export interface MovieProps {
  movie: {
    title: string;
    id: string;
  };

  handlePlanetsList: () => {
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
  }[];
}
