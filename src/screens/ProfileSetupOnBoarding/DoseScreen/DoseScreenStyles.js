import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Fonts } from "../../../constant";
import { Colors } from "../../../theme/Colors";

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
    marginTop: verticalScale(5),
    lineHeight: verticalScale(40),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  subHeading: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginTop: verticalScale(15),
    lineHeight: verticalScale(28),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  JournalEntryBtnStyle: {
    alignSelf: "center",
    marginTop: verticalScale(30),
  },
  JournalEntryBtnImg: {
    height: verticalScale(60),
    width: horizontalScale(302),
  },
  DosejmillerStyle: {
    alignSelf: "center",
    height: verticalScale(365),
    width: horizontalScale(375),
  },
  btnContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(302),
    marginTop: verticalScale(31),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.buttonOrange,
    borderColor: Colors.onBoardHeadingColor,
  },
  joiningBtn: {
    textAlign: "center",
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
