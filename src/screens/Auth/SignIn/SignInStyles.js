import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../helper/Metrics";
import { Colors } from "../../../theme";
import { StyleSheet } from "react-native";
import { Fonts } from "../../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  mainView: {
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(24),
  },
  closeImg: {
    resizeMode: "contain",
    height: verticalScale(48),
    width: horizontalScale(48),
  },
  mainLogo: {
    alignSelf: "center",
    resizeMode: "contain",
    height: verticalScale(199),
    width: horizontalScale(199),
    marginTop: verticalScale(20),
  },
  heading: {
    textAlign: "center",
    fontSize: moderateScale(36),
    marginVertical: verticalScale(14),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  resetText: {
    textAlign: "right",
    fontSize: moderateScale(18),
    marginTop: verticalScale(10),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  errorMessage: {
    color: "red",
    marginTop: verticalScale(5),
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontMediumMontserrat,
  },
  createNewText: {
    color: "#F95A2C",
    textAlign: "center",
    fontSize: moderateScale(13),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  signInButton: {
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  infoText: {
    textAlign: "center",
    marginTop: verticalScale(14),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularWorkSans,
  },
  imgCloseSection: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
  },
  createAccountText: {
    width: "auto",
    alignSelf: "center",
    marginTop: verticalScale(40),
  },
  btnContainer: {
    alignSelf: "center",
    borderBottomWidth: 0,
    justifyContent: "center",
    height: verticalScale(60),
    marginTop: verticalScale(20),
    backgroundColor: Colors.onBoardHeadingColor,
  },
  signInBtn: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardBackground,
    paddingRight: horizontalScale(10),
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
