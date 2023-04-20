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
    alignSelf: "flex-start",
    //   top: verticalScale(-10),
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
    width: "75%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: verticalScale(18),
  },
  middleContent: {
    fontSize: moderateScale(19),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  footerMainView: {
    borderBottomWidth: 1,
    width: "100%",
    marginTop: verticalScale(43),
  },
  footerSubView: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(23),
  },
  imgStyle: {
    width: "30%",
    height: verticalScale(121),
  },
  firstDoseTxt: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.onBoardSubContentColor,
  },
  doseNameTxt: {
    fontSize: moderateScale(21),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  timesTxt: {
    fontSize: moderateScale(24),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
