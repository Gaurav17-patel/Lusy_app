import React from "react";
import styles from "./OnBoardingTwoStyles";
import { Strings } from "../../../constant";
import { CButton } from "../../../components";
import { Colors } from "../../../theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { roundBG, posterUserOnBoard2 } from "../../../assets";
import { View, Text, Image, SafeAreaView } from "react-native";

const OnBoardingTwo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBodyView}>
        <Image
          source={roundBG}
          resizeMode="contain"
          style={styles.roundBGStyle}
        />
        <Image
          source={posterUserOnBoard2}
          resizeMode="contain"
          style={styles.posterUserStyle}
        />
        <Text style={styles.screenMainText}>
          {Strings.onboardingTwoHeadingContent}
        </Text>
        <View style={styles.btnSection}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
            <Image
              source={notNow}
              resizeMode="contain"
              style={styles.notNowYesBtnStyle}
            />
          </TouchableOpacity> */}
          <CButton
            ButtonText={Strings.notNow}
            ButtonStyle={styles.btnContainer}
            ButtonTextStyle={[
              styles.btnTextStyle,
              { color: Colors.deactiveDotBorderColor },
            ]}
            onPress={() => navigation.navigate("Tabs")}
          />
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("HerodoseOptions")}
          >
            <Image
              source={yes}
              resizeMode="contain"
              style={styles.notNowYesBtnStyle}
            />
          </TouchableOpacity> */}
          <CButton
            ButtonText={Strings.yes}
            ButtonStyle={styles.btnContainer}
            ButtonTextStyle={[
              styles.btnTextStyle,
              { color: Colors.buttonOrange },
            ]}
            onPress={() => navigation.navigate("HerodoseOptions")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingTwo;
