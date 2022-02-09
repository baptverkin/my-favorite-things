type Spot = {
  name: string;
  address: string;
  difficulty: string;
};
type Spots = Spot[];

const mySpots: Spots = [
  {
    name: "LaGraviere",
    address: "Hossegor, France",
    difficulty: "Medium",
  },
  {
    name: "Nazare",
    address: "Nazare, Portugal",
    difficulty: "Hard",
  },
  {
    name: "Pipeline",
    address: "Hawaï, USA",
    difficulty: "Hard",
  },
];

export { mySpots };
