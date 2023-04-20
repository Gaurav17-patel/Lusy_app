import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./SignInStyles";
import { Colors } from "../../../theme";
import { lucySignIn } from "../../../assets";
import { Strings, Messages } from "../../../constant";
import { CButton, CInput } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setFocus,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const emailRef = useRef();

  const onSubmit = (data) => {
    reset();
    setTimeout(() => {
      navigation.navigate("OnBoardingTwo");
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.mainView}>
          <Image source={lucySignIn} style={styles.mainLogo} />
          <Text style={styles.heading}>{Strings.login}</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: Messages.emailRequired,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: Messages.invalidEmailAddress,
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref } = register("email"),
            }) => (
              <CInput
                ref={(e) => {
                  ref(e);
                  emailRef.current = e;
                }}
                value={value}
                onBlur={onBlur}
                onFocus={onBlur}
                iconName={"mail"}
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={onChange}
                keyboardType="email-address"
                placeholder={Strings.emailAddress}
                onSubmitEditing={() => setFocus("password")}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorMessage}>{errors.email?.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: Messages.passwordRequired,
              },
              minLength: {
                value: 6,
                message: Messages.passwordCharactersRequired,
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref } = register("password"),
            }) => (
              <CInput
                ref={ref}
                value={value}
                onBlur={onBlur}
                onFocus={onBlur}
                iconName={"lock"}
                returnKeyType="done"
                autoCapitalize={false}
                secureTextEntry={true}
                onChangeText={onChange}
                placeholder={Strings.enterPassword}
                // onSubmitEditing={handleSubmit(onSubmit)}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorMessage}>{errors.password?.message}</Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.resetText}>{Strings.resetPassword}</Text>
          </TouchableOpacity>
          <CButton
            ButtonText={Strings.signIn}
            ButtonStyle={styles.btnContainer}
            ButtonTextStyle={styles.signInBtn}
            isTrue={true}
            iconName={"chevron-right"}
            color={Colors.onBoardBackground}
            onPress={handleSubmit(onSubmit)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.createAccountText}
          >
            <Text style={styles.createNewText}>{Strings.createAccount}</Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>{Strings.PrivacyFooterContent}</Text>
        </View>
      </KeyboardAwareScrollView>
      {/* <TouchableOpacity style={styles.imgCloseSection}>
        <Image source={close} style={styles.closeImg} />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default SignIn;
