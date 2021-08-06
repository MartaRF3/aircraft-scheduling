import { Flight } from "./FlightTypes";

export enum SortOption {
  DestinationASC = "DestinationASC",
  DestinationDESC = "DestinationDESC",
  OriginASC = "OriginASC",
  OriginDESC = "OriginDESC",
  DepartureASC = "DepartureASC",
  DepartureDESC = "DepartureDESC",
  ArrivalASC = "ArrivalASC",
  ArrivalDESC = "ArrivalDESC",
}

export type AppContextProps = {
  sort: SortOption;
  flightsPerPage: string;
  page: number;
  selectedFlights: Flight[];
};
