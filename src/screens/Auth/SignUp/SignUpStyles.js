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
    backgroundColor: Colors.onBoardBackground,
  },
  subContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: verticalScale(50),
  },
  signupHeaderContent: {
    color: "#474A57",
    fontSize: moderateScale(17),
    marginTop: verticalScale(12),
  },
  headerText: {
    fontSize: moderateScale(36),
    color: Colors.deactiveDotBorderColor,
  },
  btnContainer: {
    marginTop: verticalScale(31),
    backgroundColor: Colors.yellow,
    borderWidth: moderateScale(2),
    borderColor: Colors.onBoardHeadingColor,
    height: verticalScale(60),
    justifyContent: "center",
    alignItems: "center",
  },
  signUpBtnText: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  linkSection: {
    flexDirection: "row",
    marginTop: verticalScale(31),
  },
  textOne: {
    fontSize: moderateScale(13),
    color: Colors.onBoardHeadingColor,
  },
  textTwo: {
    fontSize: moderateScale(13),
    color: Colors.activeDotColor,
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontBoldMontserrat,
  },
  bottomSection: {
    width: "90%",
    alignSelf: "center",
  },
  bottomContent: {
    textAlign: "center",
    fontSize: moderateScale(12),
    marginTop: verticalScale(24),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularWorkSans,
  },
  errorMessage: {
    color: "red",
    marginTop: verticalScale(5),
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontMediumMontserrat,
  },
});
