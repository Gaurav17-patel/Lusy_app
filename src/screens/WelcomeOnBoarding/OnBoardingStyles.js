import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../helper/Metrics";
import { Colors } from "../../theme";
import { Fonts } from "../../constant";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  screensContainer: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  onBoardScreen01: {
    justifyContent: "center",
  },
  posterOne: {
    alignSelf: "center",
    height: verticalScale(339),
    width: horizontalScale(339),
  },
  posterTwo: {
    width: "100%",
    alignSelf: "center",
    height: verticalScale(540),
  },
  posterThree: {
    alignSelf: "center",
    height: verticalScale(339),
    width: horizontalScale(339),
  },
  posterOneHeading: {
    // position: 'absolute',
    // bottom: 60,
    textAlign: "center",
    fontSize: moderateScale(34),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  mainContentView: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    // right: 9,
    bottom: Platform.OS === "ios" ? 60 : 100,
  },
  mainContentView01: {
    width: "90%",
    alignSelf: "center",
    marginTop: verticalScale(-40),
  },
  subContentView: {
    width: "90%",
    alignSelf: "center",
    marginVertical: verticalScale(15),
  },
  posterOneSubContent: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontRegularWorkSans,
  },
  forwardButton: {
    height: verticalScale(60),
    width: horizontalScale(60),
  },
  sliderScreenSection: {
    bottom: 10,
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customDotStyle: {
    width: horizontalScale(14),
    height: verticalScale(14),
    borderRadius: moderateScale(7),
    marginHorizontal: horizontalScale(3),
  },
  customPaginatorView: {
    width: "90%",
    paddingBottom: 20,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  posterTwoContent: {
    bottom: 0,
    width: "80%",
    alignSelf: "center",
    position: "absolute",
  },
});
