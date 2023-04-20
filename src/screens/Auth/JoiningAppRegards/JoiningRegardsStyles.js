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
    alignItems: "center",
    marginTop: verticalScale(52),
  },
  groupIconStyle: {
    height: verticalScale(142),
    width: horizontalScale(225),
  },
  mainHeadindView: {
    width: "100%",
    alignItems: "center",
    marginTop: verticalScale(80),
  },
  mainHeadingTxt: {
    fontSize: moderateScale(27),
    color: Colors.joiningYellowColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  deviderStyle: {
    width: "60%",
    height: verticalScale(1),
    marginTop: verticalScale(9),
  },
  subHeading: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(23),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  LaunchLucyBtn: {
    resizeMode: "contain",
    height: verticalScale(44),
    width: horizontalScale(254),
    marginTop: verticalScale(55),
  },
  CandyTreeStyle: {
    resizeMode: "contain",
    height: verticalScale(300),
    width: horizontalScale(300),
    marginTop: verticalScale(10),
  },
});
