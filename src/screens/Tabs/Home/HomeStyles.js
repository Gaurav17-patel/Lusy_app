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
    backgroundColor: Colors.deactiveDotColor,
  },
  mainContainer: {
    width: "90%",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: moderateScale(44),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  jaclynText: {
    fontSize: moderateScale(24),
    marginLeft: horizontalScale(10),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  boxMainView: {
    height: "auto",
    padding: moderateScale(15),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(16),
    borderColor: Colors.onBoardHeadingColor,
  },
  boxFirstView: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxOneIcon: {
    height: verticalScale(34),
    width: horizontalScale(33),
  },
  boxOneHeading: {
    fontSize: moderateScale(15),
    marginLeft: horizontalScale(12),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  boxOneMiddleText: {
    fontSize: moderateScale(15),
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  nextButtonIcon: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  TrackUserStyle: {
    height: verticalScale(60),
    width: horizontalScale(60),
  },
  boxTwoHeadingText: {
    fontSize: moderateScale(21),
    marginLeft: horizontalScale(12),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  boxTwoSubHeadingText: {
    fontSize: moderateScale(13),
    marginLeft: horizontalScale(12),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  previewButtonIcon: {
    height: verticalScale(36),
    width: horizontalScale(41),
  },
  mainBoxWithBorder: {
    height: "auto",
    borderBottomWidth: 6,
    padding: moderateScale(15),
    marginTop: verticalScale(20),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(16),
    borderColor: Colors.onBoardHeadingColor,
  },
  boxHeaderIcon: {
    height: verticalScale(32),
    width: horizontalScale(32),
  },
  boxHeadingText: {
    fontSize: moderateScale(15),
    color: Colors.deactiveDotColor,
    marginLeft: horizontalScale(12),
    fontFamily: Fonts.fontBoldMontserrat,
  },
  middleImageView: {
    alignItems: "center",
    marginTop: verticalScale(12),
  },
  boxMiddleImage: {
    height: verticalScale(210),
    width: horizontalScale(299),
  },
  boxThreeNextButton: {
    alignItems: "flex-end",
    paddingTop: verticalScale(30),
  },
  boxNextButtonIcon: {
    right: 0,
    bottom: 0,
    position: "absolute",
    width: moderateScale(48),
    height: moderateScale(48),
  },
  boxFourHeading: {
    fontSize: moderateScale(30),
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(5),
    color: Colors.deactiveDotColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  boxFourNextButton: {
    alignItems: "flex-end",
    paddingTop: verticalScale(25),
  },
  boxFiveHeadingIcon: {
    borderWidth: 2,
    height: verticalScale(34),
    width: horizontalScale(34),
    borderRadius: moderateScale(22),
  },
  boxFiveHeading: {
    fontSize: moderateScale(15),
    marginLeft: horizontalScale(12),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  boxFiveMiddleContainView: {
    alignItems: "center",
    margin: verticalScale(20),
  },
  footerMainView: {
    width: "95%",
    flexDirection: "row",
    marginTop: verticalScale(10),
    // backgroundColor: 'red',
  },
  footerImage: {
    height: verticalScale(232),
    width: horizontalScale(180),
  },
  footerTextMainVIew: {
    width: "55%",
    paddingTop: verticalScale(20),
  },
  footerHeading: {
    textAlign: "auto",
    fontSize: moderateScale(15),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  footerSubHeading: {
    textAlign: "auto",
    fontSize: moderateScale(15),
    marginTop: verticalScale(15),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
});
