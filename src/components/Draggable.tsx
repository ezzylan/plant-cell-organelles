import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

type DraggableProps = {
  id: string;
  styles?: React.CSSProperties;
  name?: string;
  disabled?: boolean;
};

export function Draggable(props: DraggableProps) {
  const { id, styles, name, disabled } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    ...styles,
  };
  const disabledClass = disabled ? "disabled" : "";

  return (
    <div
      className={disabledClass}
      ref={setNodeRef}
      style={{ ...style }}
      {...listeners}
      {...attributes}
    >
      <Button className="w-28">{name}</Button>
    </div>
  );
}
