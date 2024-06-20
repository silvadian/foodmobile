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

export interface getUserResponse extends SuccessResponse {
  data: {
    avatar: string;
    email: string;
    full_name: string;
    id: number;
    rules: 'user' | 'admin';
  };
}
