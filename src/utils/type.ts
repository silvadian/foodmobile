import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParams = {
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  AdminDashboard: undefined;
  AddProductScreen: undefined;
  SplashScreen: undefined;
  SignUpAddress: {id: number};
  FoodDetails: {id: number};
  PaymentAddress: undefined;
};

export type StackNavigation = NavigationProp<RootStackParams>;

export type MainAppProps = NativeStackScreenProps<RootStackParams, 'MainApp'>;
export type AdminDashboardProps = NativeStackScreenProps<
  RootStackParams,
  'AdminDashboard'
>;

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParams,
  'SplashScreen'
>;

export type SignInProps = NativeStackScreenProps<RootStackParams, 'SignIn'>;

export type SignUpProps = NativeStackScreenProps<RootStackParams, 'SignUp'>;

export type SignUpAddressProps = NativeStackScreenProps<
  RootStackParams,
  'SignUpAddress'
>;

export type FoodDetailsProps = NativeStackScreenProps<
  RootStackParams,
  'FoodDetails'
>;

export type PaymentAddressProps = NativeStackScreenProps<
  RootStackParams,
  'PaymentAddress'
>;
