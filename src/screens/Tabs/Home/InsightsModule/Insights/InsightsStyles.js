import { StyleSheet } from "react-native";
import { Colors } from "../../../../../theme";
import { Fonts } from "../../../../../constant";
import { moderateScale, verticalScale } from "../../../../../helper/Metrics";

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
  headingView: {
    width: "68%",
    alignItems: "flex-end",
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
    alignItems: "center",
    top: verticalScale(-10),
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
  feelingBestContent: {
    textAlign: "center",
    fontSize: moderateScale(21),
    marginTop: verticalScale(50),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  feelingAns: {
    fontSize: moderateScale(17),
    marginTop: verticalScale(40),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  feelingSubAns: {
    fontSize: moderateScale(17),
    marginTop: verticalScale(15),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  dividerStyle: {
    height: 1,
    marginTop: verticalScale(17),
    backgroundColor: Colors.deactiveDotBorderColor,
  },
  womenBG: {
    width: "50%",
    height: verticalScale(243),
  },
});
