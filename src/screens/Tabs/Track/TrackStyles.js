import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../helper/Metrics";
import { Colors } from "../../../theme";
import { StyleSheet } from "react-native";
import { Fonts } from "../../../constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.onBoardBackground,
  },
  heading: {
    textAlign: "center",
    fontSize: moderateScale(30),
    marginTop: verticalScale(25),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(18),
    marginTop: verticalScale(24),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  btn: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(210),
    marginTop: verticalScale(40),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.buttonOrange,
    borderColor: Colors.onBoardHeadingColor,
  },

  btnTxt: {
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  buttonimg: {
    resizeMode: "contain",
    height: verticalScale(60),
    width: horizontalScale(210),
  },
  bgImg: {
    height: verticalScale(317),
    width: horizontalScale(282),
    marginTop: verticalScale(52),
  },
});
