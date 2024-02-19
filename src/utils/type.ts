import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParams = {
    SignIn : undefined,
    SignUp : undefined,
    HomeScreen : undefined,
    SplashScreen : undefined,
    SignUpAddress : undefined,
}

export type HomeScreenProps = NativeStackScreenProps<
RootStackParams,
'HomeScreen'
>;

export type SplashScreenProps = NativeStackScreenProps<
RootStackParams,
'SplashScreen'
>;

export type SignInProps = NativeStackScreenProps<
RootStackParams,
'SignIn'
>;

export type SignUpProps = NativeStackScreenProps<
RootStackParams,
'SignUp'
>;

export type SignUpAddressProps = NativeStackScreenProps<
RootStackParams,
'SignUpAddress'
>;

