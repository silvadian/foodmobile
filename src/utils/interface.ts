export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  full_name: string;
  image?: string;
}

export interface SuccessResponse {
  status: 'success';
}
export interface ErrorResponse {
  status: 'error';
  message: string;
}

export interface RegisterResponse extends SuccessResponse {
  data: {
    id: number;
  };
}

export interface SignUpAddressRequest {
  user_id: number;
  phone: string;
  address: string;
  house_number: string;
  city: string;
}

export interface SignInResponse extends SuccessResponse {
  data: {
    token: string;
    refresh_token: string;
  };
}

export interface Address {
  address: string;
  city: string;
  createdAt: Date;
  house_number: string;
  id: number;
  phone: string;
  updatedAt: Date;
  user_id: number;
}

export interface UserData {
  avatar: string;
  email: string;
  full_name: string;
  id: number;
  rules: 'user' | 'admin';
  address: Address;
}

export interface getUserResponse extends SuccessResponse {
  data: UserData;
}
export interface Food {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  picture: string;
  popular: number;
  price: number;
  recommended: number;
  star: number;
  created_at: Date;
  updated_at: Date;
}

export interface getFoodsResponse extends SuccessResponse {
  data: Food[];
}

export interface getFoodResponse extends SuccessResponse {
  data: Food;
}

export interface CreateOrderRequest {
  food_id: number;
  user_id: number;
  amount: number;
  status: 'Pending';
  transaction_code: 'test';
}

export interface getOrderResponse extends SuccessResponse {
  data: {
    id: number;
    food_id: number;
    user_id: number;
    amount: number;
    status: string;
    transaction_code: string;
    created_at: Date;
    updated_at: Date;
    food: Food;
    user: UserData;
  }[];
}

export interface UpdateOrderRequest {
  id: number;
  status: 'Completed' | 'Canceled';
}
