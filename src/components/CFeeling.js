import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { feelingBg } from "../assets";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Fonts, Strings } from "../constant";
import { CSlider, CButton } from "../components/index";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Image } from "react-native";

const CFeeling = ({ feelingOnPress }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={feelingBg}
        resizeMode="contain"
        style={styles.feelingBgImage}
      />
      <Text style={styles.headingContain}>{Strings.feelingHeadingContain}</Text>
      <Text style={styles.subHeadingContain}>{Strings.feelingSubContain}</Text>
      <View style={styles.sliderView}>
        <CSlider
          value={value}
          // onValueChange={(val) => setValue(val)}
          startValue={value}
          endValue={10}
          minimumTrackTintColor={Colors.sliderLineColor}
        />
      </View>
      <CButton
        ButtonText={Strings.submit}
        ButtonStyle={styles.submitButton}
        ButtonTextStyle={styles.submitButtonText}
        onPress={feelingOnPress}
        // onPress={() => navigation.navigate("JournalEntry")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.deactiveDotColor,
  },
  feelingBgImage: {
    height: verticalScale(343),
    width: horizontalScale(327),
    marginTop: verticalScale(40),
  },
  headingContain: {
    fontSize: moderateScale(30),
    marginTop: verticalScale(35),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  subHeadingContain: {
    textAlign: "center",
    fontSize: moderateScale(17),
    marginTop: verticalScale(8),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  sliderView: {
    width: "100%",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  submitButton: {
    // backgroundColor: Colors.buttonOrange,
    // padding: moderateScale(12),
    // marginTop: verticalScale(10),
    // width: "35%",

    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(40),
    width: horizontalScale(115),
    marginTop: verticalScale(10),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.buttonOrange,
    borderColor: Colors.deactiveDotBorderColor,
  },
  submitButtonText: {
    fontSize: moderateScale(18),
    color: Colors.deactiveDotColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});

export default CFeeling;
