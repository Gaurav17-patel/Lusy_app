import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../helper/Metrics";
import { Colors } from "../../../theme";
import { Fonts } from "../../../constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  headerStyle: {
    backgroundColor: Colors.yellow,
  },
  heading: {
    textAlign: "center",
    fontSize: moderateScale(27),
    marginTop: verticalScale(18),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  topView: {
    backgroundColor: Colors.yellow,
  },
  Otpimage: {
    alignSelf: "center",
  },
  message: {
    textAlign: "center",
    fontSize: moderateScale(13),
    marginTop: verticalScale(24),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  boxContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: verticalScale(48),
  },
  otpContainer: {
    width: "100%",
    height: verticalScale(60),
    backgroundColor: "transparent",
  },
  inputBox: {
    borderWidth: 2,
    height: verticalScale(56),
    width: horizontalScale(56),
    fontSize: moderateScale(24),
    borderRadius: moderateScale(16),
    color: Colors.onBoardHeadingColor,
    borderColor: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  verifyButton: {
    width: "85%",
    alignSelf: "center",
    borderBottomWidth: 0,
    justifyContent: "center",
    height: verticalScale(60),
    backgroundColor: "#18191F",
    marginTop: verticalScale(34),
    borderRadius: moderateScale(16),
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: moderateScale(21),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  linkTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(11),
  },
  linkHeading: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  linkText: {
    fontSize: moderateScale(13),
    color: Colors.activeDotColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});
