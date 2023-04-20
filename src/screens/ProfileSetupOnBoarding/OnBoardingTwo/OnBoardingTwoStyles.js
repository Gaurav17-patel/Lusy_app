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
  mainBodyView: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  roundBGStyle: {
    height: verticalScale(309),
    width: horizontalScale(309),
    marginTop: verticalScale(40),
  },
  posterUserStyle: {
    position: "absolute",
    top: verticalScale(80),
    height: verticalScale(347),
    width: horizontalScale(263),
  },
  screenMainText: {
    textAlign: "center",
    fontSize: moderateScale(30),
    marginTop: verticalScale(110),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  btnSection: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: verticalScale(45),
    justifyContent: "space-between",
  },
  notNowYesBtnStyle: {
    height: verticalScale(61),
    width: horizontalScale(123),
  },

  btnContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(61),
    width: horizontalScale(123),
    borderWidth: moderateScale(2),
    borderColor: Colors.onBoardHeadingColor,
    backgroundColor: Colors.onBoardBackground,
  },
  btnTextStyle: {
    textAlign: "center",
    fontSize: moderateScale(21),
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
