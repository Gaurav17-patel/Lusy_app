import React from "react";
import { Colors } from "../../../theme";
import styles from "./ForgotPasswordStyles";
import { useForm, Controller } from "react-hook-form";
import { Strings, Messages } from "../../../constant";
import { verticalScale } from "../../../helper/Metrics";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, View, SafeAreaView } from "react-native";
import { CButton, CHeader, CInput } from "../../../components";
import { forgetPoster1, forgetPoster2, forgetPoster3 } from "../../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  const onsubmit = (data) => {
    reset();
    setTimeout(() => {
      navigation.navigate("ResetPassword");
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: verticalScale(160) }}
      >
        <View style={styles.imageSectionView}>
          <Image
            source={forgetPoster3}
            resizeMode="contain"
            style={[styles.posterThreeStyle]}
          />
          <Image
            source={forgetPoster2}
            resizeMode="contain"
            style={[styles.posterTwoStyle]}
          />
          <Image
            source={forgetPoster1}
            resizeMode="contain"
            style={[styles.posterOneStyle]}
          />
        </View>
        <View style={{ marginTop: verticalScale(80) }}>
          <Text style={styles.headerText}>
            {Strings.forgotPasswordHeadingContent}
          </Text>
          <Text style={styles.subHeaderText}>{Strings.passwordSubContent}</Text>
          <View style={styles.inputSection}>
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
              render={({ field: { onChange, onBlur, value } }) => (
                <CInput
                  value={value}
                  onBlur={onBlur}
                  onFocus={onBlur}
                  iconName={"mail"}
                  autoCapitalize="none"
                  returnKeyType="done"
                  onChangeText={onChange}
                  placeholder={Strings.emailAddress}
                  keyboardType="email-address"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errorMessage}>{errors.email?.message}</Text>
            )}
          </View>
          <CButton
            ButtonText={Strings.sendReset}
            ButtonStyle={styles.btnContainer}
            ButtonTextStyle={styles.sendResetBtn}
            isTrue={true}
            iconName={"chevron-right"}
            color={Colors.onBoardBackground}
            onPress={handleSubmit(onsubmit)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
