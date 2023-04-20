import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../../../theme";
import { Fonts } from "../../../../../constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: verticalScale(25),
    justifyContent: "space-between",
  },
  headingContainer: {
    textAlign: "center",
    fontSize: moderateScale(27),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  selectDateRangeStyle: {
    width: "18%",
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    // top: verticalScale(-10),
    padding: moderateScale(3),
    borderRadius: moderateScale(9),
    justifyContent: "space-around",
  },
  selectDataRangeText: {
    fontSize: moderateScale(12),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  reportedMoodView: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: verticalScale(29),
    marginBottom: verticalScale(16),
    justifyContent: "space-between",
  },
  chartHeadingTxt: {
    fontSize: moderateScale(9),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  middleContentView: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: verticalScale(18),
  },
  middleContent: {
    fontSize: moderateScale(19),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  averageMoodContent: {
    fontSize: moderateScale(24),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  sliderSubContent: {
    textAlign: "center",
    fontSize: moderateScale(12),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  sliderView: {
    width: "100%",
    alignItems: "center",
    marginTop: verticalScale(17),
  },
  footerBoxMainView: {
    width: "95%",
    borderWidth: 2,
    borderBottomWidth: 8,
    padding: moderateScale(22),
    height: verticalScale(208),
    marginTop: verticalScale(30),
    borderRadius: moderateScale(16),
    borderColor: Colors.deactiveDotBorderColor,
  },
  boxHeadingTxt: {
    fontSize: moderateScale(24),
    marginTop: verticalScale(15),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  boxImgView: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: verticalScale(9),
  },
  footerBoxImg: {
    width: "25%",
    height: verticalScale(89),
  },
  footerBoxSecondView: {
    width: "80%",
    marginLeft: horizontalScale(15),
  },
  totalTxtView: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  totalDoseTxt: {
    fontSize: moderateScale(36),
    marginLeft: horizontalScale(20),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  commonDoseTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  gramsTxt: {
    fontSize: moderateScale(12),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  middleBoxMainView: {
    width: "95%",
    borderWidth: 2,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(67),
    marginTop: verticalScale(30),
    borderRadius: moderateScale(16),
    borderColor: Colors.deactiveDotBorderColor,
  },
  middleBoxHeading: {
    fontSize: moderateScale(17),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  middleBoxSubHeading: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(2),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
});
