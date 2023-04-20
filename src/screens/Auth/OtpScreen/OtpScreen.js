import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../theme";
import { styles } from "./OtpScreenStyles";
import { otpAvtar } from "../../../assets";
import { Strings } from "../../../constant";
import React, { useRef, useState } from "react";
import { CButton, CHeader } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const OtpScreen = () => {
  const otpInputRef = useRef(null);
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <CHeader
        customHeaderStyle={styles.headerStyle}
        statusBarBackgroundColor={Colors.yellow}
        dividerStyle={{ backgroundColor: "#FFFFFF" }}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.topView}>
          <Text style={styles.heading}>{Strings.verificationCode}</Text>
          <Image source={otpAvtar} style={styles.Otpimage} />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.boxContainer}>
            <OTPInputView
              pinCount={4}
              ref={otpInputRef}
              autoFocusOnLoad={true}
              keyboardType="number-pad"
              placeholderCharacter={"_"}
              style={styles.otpContainer}
              codeInputFieldStyle={styles.inputBox}
              onCodeFilled={(val) => console.log(val)}
              onCodeChanged={(codeVal) => setCode(codeVal)}
            />
          </View>
          <Text style={styles.message}>{Strings.verifySubContent}</Text>
          <CButton
            ButtonText={Strings.verify}
            ButtonStyle={styles.verifyButton}
            ButtonTextStyle={styles.buttonText}
            onPress={() => navigation.navigate("GetMembership")}
          />
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkHeading}>
              {Strings.didNotReceive + " "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>{Strings.getNewCode}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpScreen;
