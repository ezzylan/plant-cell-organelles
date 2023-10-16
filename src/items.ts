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
    position: { x: 1050, y: 85 },
    containerId: "",
  },
  {
    id: "VC",
    name: "vacuole",
    position: { x: 1050, y: 135 },
    containerId: "",
  },
  {
    id: "CW",
    name: "cell wall",
    position: { x: 1050, y: 185 },
    containerId: "",
  },
  {
    id: "PM",
    name: "plasma membrane",
    position: { x: 1050, y: 235 },
    containerId: "",
  },
  {
    id: "NC",
    name: "nucleus",
    position: { x: 1050, y: 285 },
    containerId: "",
  },
  {
    id: "CHP",
    name: "chloroplast",
    position: { x: 1050, y: 335 },
    containerId: "",
  },
  {
    id: "MC",
    name: "mitochondria",
    position: { x: 1050, y: 385 },
    containerId: "",
  },
  {
    id: "CYP",
    name: "cytoplasm",
    position: { x: 1050, y: 435 },
    containerId: "",
  },
  {
    id: "GA",
    name: "golgi apparatus",
    position: { x: 1050, y: 485 },
    containerId: "",
  },
  {
    id: "PX",
    name: "peroxisomes",
    position: { x: 1050, y: 535 },
    containerId: "",
  },
  {
    id: "ER",
    name: "endoplasmic reticulum",
    position: { x: 1050, y: 585 },
    containerId: "",
  },
];

export const plantCellContainers = [
  { id: "RS", position: { x: 798, y: 123 } },
  { id: "VC", position: { x: 173, y: 313 } },
  { id: "CW", position: { x: 144, y: 380 } },
  { id: "PM", position: { x: 157, y: 452 } },
  { id: "NC", position: { x: 808, y: 234 } },
  { id: "CHP", position: { x: 795, y: 538 } },
  { id: "MC", position: { x: 157, y: 153 } },
  { id: "CYP", position: { x: 170, y: 215 } },
  { id: "GA", position: { x: 186, y: 511 } },
  { id: "PX", position: { x: 827, y: 454 } },
  { id: "ER", position: { x: 808, y: 310 } },
];
