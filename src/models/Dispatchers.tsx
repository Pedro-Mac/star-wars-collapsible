import {Dispatch, SetStateAction } from 'react'

export interface DispatcherProps {
  setIsSorting: Dispatch<SetStateAction<string>>;
  listSetter: Dispatch<SetStateAction<{id: string;
    name: string;
    rotationPeriod: number | null;
    orbitalPeriod: number | null;
    diameter: number | null;
    climates: string[];
    surfaceWater: number | null;
    population: number | null;
    filmConnection: {
      films: {id: string}[]
    }
  }[]>>
}