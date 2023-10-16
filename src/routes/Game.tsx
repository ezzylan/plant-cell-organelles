import plantCell from "@/assets/images/plant-cell-organelle-labelling.png";
import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";
import { buttonVariants } from "@/components/ui/button";
import {
  PlantCellLabel,
  plantCellContainers as droppables,
  plantCellLabels,
} from "@/items";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Game() {
  const sensors = useSensors(
    useSensor(KeyboardSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor),
  );
  const [draggables, setDraggables] = useState([...plantCellLabels]);
  const [plantCellContainers, setPlantCellContainers] = useState(
    [] as PlantCellLabel[],
  );

  function handleDragEnd(ev: DragEndEvent) {
    const { active, over } = ev;

    setDraggables((draggables) => {
      return draggables.map((draggable) => {
        if (draggable.id === active.id) {
          if (over && draggable.id === over.id) {
            setPlantCellContainers([...plantCellContainers, draggable]);
            return { ...draggable, containerId: over.id };
          }
          if (draggable.containerId !== "") return draggable;
          return {
            ...draggable,
            position: {
              x: (draggable.position.x += ev.delta.x),
              y: (draggable.position.y += ev.delta.y),
            },
            containerId: "",
          };
        }
        return draggable;
      });
    });
  }

  return (
    <main>
      <Link to={"/"} className={buttonVariants({ variant: "destructive" })}>
        <ChevronLeft />
      </Link>

      <div className="flex">
        <img
          className="w-5/6"
          src={plantCell}
          alt="Plant cell organelle labelling"
        />
        {plantCellContainers.length === 11 && (
          <div className="text-white flex flex-col gap-6 self-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
              Great job!
            </h1>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              You really know your organelles...
            </h4>
          </div>
        )}
      </div>

      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        {droppables.map((droppable) => (
          <Droppable
            {...droppable}
            key={droppable.id}
            id={droppable.id}
            styles={{
              position: "absolute",
              left: `${droppable.position.x}px`,
              top: `${droppable.position.y}px`,
            }}
          >
            {draggables
              .filter((draggable) => draggable.containerId === droppable.id)
              .map((draggable) => (
                <Draggable key={draggable.id} disabled={true} {...draggable} />
              ))}
          </Droppable>
        ))}
        {draggables
          .filter((draggable) => draggable.containerId === "")
          .map((draggable) => (
            <Draggable
              {...draggable}
              key={draggable.id}
              styles={{
                position: "absolute",
                left: `${draggable.position.x}px`,
                top: `${draggable.position.y}px`,
              }}
            />
          ))}
      </DndContext>
    </main>
  );
}
