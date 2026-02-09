import ButtonComponent from "@/ui/Button";

interface AddNewCourseButtonProps {
  onClick: () => void;
}

export default function AddNewCourseButton({ onClick }: AddNewCourseButtonProps) {
  return <ButtonComponent text="Add new course" onClick={onClick} />;
}
