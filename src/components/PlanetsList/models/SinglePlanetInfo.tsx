export interface SinglePlanetInfo {
  [key: string]:
    | string
    | null
    | number
    | string[]
    | {
        films: { id: string }[];
      };
  id: string;
  name: string;
  rotationPeriod: number | null;
  orbitalPeriod: number | null;
  diameter: number | null;
  climates: string[];
  surfaceWater: number | null;
  population: number | null;
  filmConnection: {
    films: { id: string }[];
  };
}
