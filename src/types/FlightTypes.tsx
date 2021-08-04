export interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

export interface Flight {
  id: string;
  departuretime: number;
  arrivaltime: number;
  readable_departure: string;
  readable_arrival: string;
  origin: string;
  destination: string;
}

export interface Flights {
  pagination: Pagination;
  data: Flight[];
}
