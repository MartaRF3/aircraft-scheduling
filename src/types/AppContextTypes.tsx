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
  githubLogin: string;
  submitted: boolean;
  usersPerPageChanged: boolean;
  sort: SortOption;
  usersPerPage: string;
  page: number;
};
