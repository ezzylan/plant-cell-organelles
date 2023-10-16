import { useDroppable } from "@dnd-kit/core";
import React from "react";

type DroppableProps = {
  id: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
};

export function Droppable(props: DroppableProps) {
  const { children, id, styles } = props;
  const { isOver, setNodeRef } = useDroppable({ id: id });
  const overClass = isOver ? "border-2 border-yellow-300" : "";
  const childrenClass = (children && children.length) > 0 ? "p-0" : "p-5";

  return (
    <div
      ref={setNodeRef}
      className={`bg-slate-600 w-28 rounded-md ${overClass} ${childrenClass}`}
      style={styles}
    >
      {children}
    </div>
  );
}
