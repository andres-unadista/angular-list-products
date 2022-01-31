export interface ProductResponse {
  msg: string;
  body: Product[];
  error: boolean;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  created_at?: string;
  updated_at?: string;
}