export enum Status {
  SUCCESS = "success",
  FAIL = 'fail'
}

export interface Column{
  ID: number,
  Title: string,
  Order: number
}

export interface ColumnResponse {
  columns: Column[],
  status: Status
}
