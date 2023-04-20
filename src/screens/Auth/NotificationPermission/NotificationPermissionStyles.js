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
  mainView: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  mainHeading: {
    textAlign: "center",
    fontSize: moderateScale(24),
    marginTop: verticalScale(27),
    lineHeight: verticalScale(40),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  dividerStyle: {
    alignSelf: "center",
    height: verticalScale(3),
    width: horizontalScale(241),
    marginTop: verticalScale(16),
    color: Colors.onBoardSubContentColor,
    backgroundColor: Colors.dividerYellowLine,
  },
  subHeading: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginTop: verticalScale(16),
    lineHeight: verticalScale(28),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  notificationBtnStyle: {
    alignSelf: "center",
    marginTop: verticalScale(16),
  },
  notificationBtnImg: {
    height: verticalScale(44),
    width: horizontalScale(254),
  },
  yellowBgRoundStyle: {
    alignSelf: "center",
    height: verticalScale(325),
    width: horizontalScale(325),
    marginTop: verticalScale(88),
  },
  activeUserStyle: {
    alignSelf: "center",
    position: "absolute",
    top: verticalScale(20),
    height: verticalScale(290),
    width: horizontalScale(201),
  },
});
