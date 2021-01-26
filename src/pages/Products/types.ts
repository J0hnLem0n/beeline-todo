export enum Statuses {
  new = "new",
  bought = "bought",
}
export type Product = {
  id: number;
  name: string;
  count: number;
  priority: number;
  createDate: number;
  status: Statuses;
};
