import { useState, useEffect } from "react";
import {
  Box,
  Modal,
  TextField,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { X, Plus, Trash2 } from "lucide-react";
import type { Course, CreateCourseData, Author } from "@/types";
import { createAuthor, getAuthors } from "@/services/authors.service";
import { createCourse, updateCourse, formatDuration } from "@/services/courses.service";

interface CourseFormProps {
  open: boolean;
  onClose: () => void;
  onCourseCreated: (course: Course) => void;
  onCourseUpdated?: (course: Course) => void;
  course?: Course | null;
  mode?: "create" | "edit";
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "700px", md: "800px" },
  maxHeight: "90vh",
  overflow: "auto",
  bgcolor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  p: { xs: 3, md: 4 },
};

export default function CourseForm({
  open,
  onClose,
  onCourseCreated,
  onCourseUpdated,
  course = null,
  mode = "create",
}: CourseFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
  const [newAuthorName, setNewAuthorName] = useState("");

  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
    duration?: string;
    authors?: string;
  }>({});

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (open) {
      if (isEditMode && course) {
        resetForm();
        setTitle(course.title);
        setDescription(course.description);
        setDuration(course.duration.toString());
        loadAuthorsAndSetCourseAuthors(course);
      } else {
        resetForm();
        loadAuthors();
      }
    }
  }, [open, isEditMode, course]);

  const loadAuthorsAndSetCourseAuthors = async (courseData: Course) => {
    try {
      const allAuthors = await getAuthors();
      setAuthors(allAuthors);
      
      const assignedAuthors = allAuthors.filter((author) =>
        courseData.authors.includes(author.id)
      );
      setCourseAuthors(assignedAuthors);

      const availableAuthors = allAuthors.filter(
        (author) => !courseData.authors.includes(author.id)
      );
      setAuthors(availableAuthors);
    } catch (error) {
      console.error("Failed to load authors:", error);
    }
  };

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.error("Failed to load authors:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDuration("");
    setCourseAuthors([]);
    setNewAuthorName("");
    setErrors({});
    setSubmitError("");
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.length < 2) {
      newErrors.title = "Title must be at least 2 characters";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.length < 2) {
      newErrors.description = "Description must be at least 2 characters";
    }

    if (!duration) {
      newErrors.duration = "Duration is required";
    } else {
      const durationNum = parseInt(duration, 10);
      if (isNaN(durationNum) || durationNum <= 0) {
        newErrors.duration = "Duration must be greater than 0";
      }
    }

    if (courseAuthors.length === 0) {
      newErrors.authors = "Course must have at least one author";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddAuthor = (author: Author) => {
    setAuthors(authors.filter((a) => a.id !== author.id));
    setCourseAuthors([...courseAuthors, author]);
  };

  const handleRemoveAuthor = (author: Author) => {
    setCourseAuthors(courseAuthors.filter((a) => a.id !== author.id));
    setAuthors([...authors, author]);
  };

  const handleCreateAuthor = async () => {
    if (!newAuthorName.trim()) return;

    if (newAuthorName.length < 2) {
      alert("Author name must be at least 2 characters");
      return;
    }

    try {
      const newAuthor = await createAuthor({ name: newAuthorName });
      setAuthors([...authors, newAuthor]);
      setNewAuthorName("");
    } catch (error) {
      console.error("Failed to create author:", error);
      alert("Failed to create author");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const durationNum = parseInt(duration, 10);

    if (isEditMode && course) {
      const courseData: Partial<CreateCourseData> = {
        title: title.trim(),
        description: description.trim(),
        duration: durationNum,
        authors: courseAuthors.map((a) => a.id),
      };

      setLoading(true);
      setSubmitError("");

      try {
        const updatedCourse = await updateCourse(course.id, courseData);
        if (onCourseUpdated) {
          onCourseUpdated(updatedCourse);
        }
        onClose();
      } catch (error) {
        console.error("Failed to update course:", error);
        setSubmitError("Failed to update course. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      const courseData: CreateCourseData = {
        title: title.trim(),
        description: description.trim(),
        duration: durationNum,
        authors: courseAuthors.map((a) => a.id),
        creationDate: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      };

      setLoading(true);
      setSubmitError("");

      try {
        const newCourse = await createCourse(courseData);
        onCourseCreated(newCourse);
        onClose();
      } catch (error) {
        console.error("Failed to create course:", error);
        setSubmitError("Failed to create course. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            pb: 2,
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, color: "#1a1a2e" }}
          >
            {isEditMode ? "Edit Course" : "Create Course"}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#9ca3af",
              "&:hover": { color: "#667eea" },
            }}
          >
            <X size={24} />
          </IconButton>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
            sx={{ mb: 3 }}
            inputProps={{ maxLength: 50 }}
          />

          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Duration (minutes)"
            value={duration}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDuration(value);
            }}
            error={!!errors.duration}
            helperText={errors.duration}
            sx={{ mb: 3 }}
            placeholder="Enter duration in minutes"
          />

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#1a1a2e" }}>
            Authors
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "#6b7280" }}>
                Available Authors
              </Typography>
              {authors.length > 0 ? (
                <List
                  sx={{
                    maxHeight: "150px",
                    overflow: "auto",
                    bgcolor: "#f8f9ff",
                    borderRadius: "8px",
                  }}
                >
                  {authors.map((author) => (
                    <ListItem
                      key={author.id}
                      sx={{ py: 1 }}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => handleAddAuthor(author)}
                          sx={{
                            color: "#667eea",
                            "&:hover": { color: "#764ba2" },
                          }}
                        >
                          <Plus size={18} />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={author.name} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography
                  variant="body2"
                  sx={{ color: "#9ca3af", fontStyle: "italic" }}
                >
                  No authors available
                </Typography>
              )}
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "#6b7280" }}>
                Course Authors
              </Typography>
              {courseAuthors.length > 0 ? (
                <List
                  sx={{
                    maxHeight: "150px",
                    overflow: "auto",
                    bgcolor: "#f8f9ff",
                    borderRadius: "8px",
                  }}
                >
                  {courseAuthors.map((author) => (
                    <ListItem
                      key={author.id}
                      sx={{ py: 1 }}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => handleRemoveAuthor(author)}
                          sx={{
                            color: "#ef4444",
                            "&:hover": { color: "#dc2626" },
                          }}
                        >
                          <Trash2 size={18} />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={author.name} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography
                  variant="body2"
                  sx={{ color: "#9ca3af", fontStyle: "italic" }}
                >
                  No authors added yet
                </Typography>
              )}
              {errors.authors && (
                <Typography variant="caption" sx={{ color: "#ef4444" }}>
                  {errors.authors}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: "#6b7280" }}>
              Create New Author
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Author name"
                value={newAuthorName}
                onChange={(e) => setNewAuthorName(e.target.value)}
                inputProps={{ maxLength: 50 }}
              />
              <Button
                variant="outlined"
                onClick={handleCreateAuthor}
                disabled={!newAuthorName.trim() || newAuthorName.length < 2}
                sx={{
                  borderColor: "#667eea",
                  color: "#667eea",
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    borderColor: "#764ba2",
                    bgcolor: "rgba(102, 126, 234, 0.05)",
                  },
                }}
              >
                Create Author
              </Button>
            </Box>
          </Box>

          {duration && parseInt(duration, 10) > 0 && (
            <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
              Duration: {formatDuration(parseInt(duration, 10))}
            </Typography>
          )}

          {submitError && (
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "#ef4444", textAlign: "center" }}
            >
              {submitError}
            </Typography>
          )}

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderColor: "#e5e7eb",
                color: "#6b7280",
                textTransform: "none",
                px: 4,
                "&:hover": {
                  borderColor: "#9ca3af",
                  bgcolor: "#f9fafb",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                textTransform: "none",
                px: 4,
                fontWeight: 600,
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                },
              }}
            >
              {loading
                ? isEditMode
                  ? "Updating..."
                  : "Creating..."
                : isEditMode
                ? "Update Course"
                : "Create Course"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

