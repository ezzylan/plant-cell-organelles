export type PlantCellLabel = {
  id: string;
  name: string;
  position: { x: number; y: number };
  containerId: string;
};

export const plantCellLabels: PlantCellLabel[] = [
  {
    id: "RS",
    name: "ribosomes",
    position: { x: 1050, y: 55 },
    containerId: "",
  },
  {
    id: "VC",
    name: "vacuole",
    position: { x: 1050, y: 105 },
    containerId: "",
  },
  {
    id: "CW",
    name: "cell wall",
    position: { x: 1050, y: 155 },
    containerId: "",
  },
  {
    id: "PM",
    name: "plasma membrane",
    position: { x: 1050, y: 205 },
    containerId: "",
  },
  {
    id: "NC",
    name: "nucleus",
    position: { x: 1050, y: 255 },
    containerId: "",
  },
  {
    id: "CHP",
    name: "chloroplast",
    position: { x: 1050, y: 305 },
    containerId: "",
  },
  {
    id: "MC",
    name: "mitochondria",
    position: { x: 1050, y: 355 },
    containerId: "",
  },
  {
    id: "CYP",
    name: "cytoplasm",
    position: { x: 1050, y: 405 },
    containerId: "",
  },
  {
    id: "GA",
    name: "golgi apparatus",
    position: { x: 1050, y: 455 },
    containerId: "",
  },
  {
    id: "PX",
    name: "peroxisomes",
    position: { x: 1050, y: 505 },
    containerId: "",
  },
  {
    id: "ER",
    name: "endoplasmic reticulum",
    position: { x: 1050, y: 555 },
    containerId: "",
  },
];

export const plantCellContainers = [
  { id: "RS", position: { x: 798, y: 83 } },
  { id: "VC", position: { x: 173, y: 273 } },
  { id: "CW", position: { x: 144, y: 340 } },
  { id: "PM", position: { x: 157, y: 412 } },
  { id: "NC", position: { x: 808, y: 194 } },
  { id: "CHP", position: { x: 795, y: 498 } },
  { id: "MC", position: { x: 157, y: 113 } },
  { id: "CYP", position: { x: 170, y: 175 } },
  { id: "GA", position: { x: 186, y: 471 } },
  { id: "PX", position: { x: 827, y: 414 } },
  { id: "ER", position: { x: 808, y: 270 } },
];
