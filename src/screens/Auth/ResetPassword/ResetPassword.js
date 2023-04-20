import React, { useRef } from "react";
import styles from "./ResetPasswordStyles";
import { key, keyHolder } from "../../../assets";
import { useForm, Controller } from "react-hook-form";
import { Strings, Messages } from "../../../constant";
import { verticalScale } from "../../../helper/Metrics";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView } from "react-native";
import { CButton, CHeader, CInput, CModal } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    setFocus,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const passwordRef = useRef(null);

  const onsubmit = (data) => {
    reset();
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: verticalScale(30) }}
      >
        <View style={styles.mainBodyView}>
          <View
            style={{
              alignSelf: "center",
              paddingTop: verticalScale(7),
            }}
          >
            <Image source={keyHolder} style={styles.userImg} />
            <Image source={key} style={styles.keyImg} />
          </View>
          <Text style={styles.headerText}>{Strings.resetPassword}</Text>
          <Text style={styles.subText}>{Strings.passwordSubContent}</Text>
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
                ref={(e) => {
                  ref(e);
                  passwordRef.current = e;
                }}
                value={value}
                onBlur={onBlur}
                onFocus={onBlur}
                iconName={"lock"}
                returnKeyType="next"
                secureTextEntry={true}
                onChangeText={onChange}
                placeholder={Strings.enterPassword}
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
                secureTextEntry={true}
                onChangeText={onChange}
                placeholder={Strings.confirmPassword}
                // onSubmitEditing={handleSubmit(onsubmit)}
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
            ButtonText={Strings.submit}
            ButtonStyle={styles.btnContainer}
            ButtonTextStyle={styles.submitBtn}
            onPress={handleSubmit(onsubmit)}
          />
        </View>
      </KeyboardAwareScrollView>
      <CModal
        modalVisible={visible}
        // onDismiss={visible}
        onPress={() => navigation.navigate("SignIn")}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
