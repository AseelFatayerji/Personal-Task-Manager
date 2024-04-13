import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Task({ task, content, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: id,
    });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div className="header">{task}</div>
      <div className="body">{content}</div>
    </li>
  );
}

export default Task;
