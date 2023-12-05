export interface Response<T> {
  status?: "success" | "fail" | "error";
  message?: string;
  data?: T;
}
