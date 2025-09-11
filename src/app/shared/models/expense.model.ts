export interface ExpenseRequest {
  value: number;
  userId: string;
  categoryId: string;
}

export interface ExpenseResponse {
  id: string;
  value: number;
  categoryId: string;
  createdAt: string;
  updatedAy: string;
}
