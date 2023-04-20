import styles from "./SignUpStyles";
import React, { useRef } from "react";
import { Strings, Messages } from "../../../constant";
import { useForm, Controller } from "react-hook-form";
import { verticalScale } from "../../../helper/Metrics";
import { useNavigation } from "@react-navigation/native";
import { CText, CTextBold, CInput, CButton } from "../../../components";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = () => {
  // --------------------------------------- States and variable declaration ---------------------

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    getValues,
    setFocus,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const fullnameRef = useRef();

  // --------------------------------------- Life cycle methods ----------------------------------

  // --------------------------------------- Other methods ---------------------------------------

  const onSubmit = (data) => {
    reset();
    setTimeout(() => {
      navigation.navigate("Verification");
    }, 2000);
  };

  // --------------------------------------- Web service methods ---------------------------------

  // --------------------------------------- Design ----------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      {/* <CHeader onPress={() => navigation.goBack()} /> */}
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(40) }}
      >
        <View style={styles.subContainer}>
          <CTextBold
            text={Strings.signUp}
            customBoldTextStyle={styles.headerText}
          />
          <CText
            text={Strings.signUpSubContent}
            customLightTextStyle={styles.signupHeaderContent}
          />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: Messages.fullNameRequired,
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref } = register("fullName"),
            }) => (
              <CInput
                iconName={"user"}
                ref={(e) => {
                  ref(e);
                  fullnameRef.current = e;
                }}
                value={value}
                onBlur={onBlur}
                onFocus={onBlur}
                returnKeyType="next"
                blurOnSubmit={false}
                autoCapitalize="words"
                onChangeText={onChange}
                placeholder={Strings.fullName}
                onSubmitEditing={() => setFocus("email")}
              />
            )}
            name="fullName"
          />
          {errors.fullName && (
            <Text style={styles.errorMessage}>{errors.fullName?.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: Messages.emailRequired,
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: Messages.invalidEmailAddress,
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref } = register("email"),
            }) => (
              <CInput
                ref={ref}
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
                returnKeyType="next"
                onChangeText={onChange}
                secureTextEntry={true}
                placeholder={Strings.createNewPassword}
                onSubmitEditing={() => setFocus("confirmPassword")}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorMessage}>{errors.password?.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: Messages.confirmPasswordRequired,
              },
              validate: (val) => {
                const { password } = getValues();
                if (password !== val) {
                  return Messages.passwordDoNotMatch;
                }
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref } = register(
                "confirmPassword"
              ),
            }) => (
              <CInput
                ref={ref}
                value={value}
                onBlur={onBlur}
                onFocus={onBlur}
                iconName={"lock"}
                returnKeyType="done"
                onChangeText={onChange}
                secureTextEntry={true}
                placeholder={Strings.confirmPassword}
                // onSubmitEditing={handleSubmit(onSubmit)}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={styles.errorMessage}>
              {errors.confirmPassword?.message}
            </Text>
          )}
          <CButton
            ButtonStyle={styles.btnContainer}
            ButtonText={Strings.signUp}
            ButtonTextStyle={styles.signUpBtnText}
            onPress={handleSubmit(onSubmit)}
          />
          <View style={styles.linkSection}>
            <CText
              text={Strings.alreadyAccount}
              customLightTextStyle={styles.textOne}
            />
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <CText
                text={Strings.goHere}
                customLightTextStyle={styles.textTwo}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSection}>
            <CText
              text={Strings.PrivacyFooterContent}
              customLightTextStyle={styles.bottomContent}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
