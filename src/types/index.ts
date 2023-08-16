export interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  img1: string;
  img2: string;
  quantity: number;
}

export interface ProductImageProps {
  img1: string;
  img2: string;
}

export interface CartState {
  selectItems: CartItem[];
  quantity: number;
  total: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  img1: string;
  quantity: number;
}
