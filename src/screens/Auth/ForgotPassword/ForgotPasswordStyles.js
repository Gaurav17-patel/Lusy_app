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
  errorMessage: {
    color: "red",
    marginTop: verticalScale(5),
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontMediumMontserrat,
  },
  imageSectionView: {
    height: "25%",
    marginTop: verticalScale(46),
    marginHorizontal: horizontalScale(50),
  },
  posterThreeStyle: {
    position: "absolute",
    top: verticalScale(10),
    height: verticalScale(65),
    width: horizontalScale(65),
    right: horizontalScale(28),
  },
  posterTwoStyle: {
    position: "absolute",
    left: horizontalScale(95),
    height: verticalScale(145),
    width: horizontalScale(121),
  },
  posterOneStyle: {
    left: 0,
    position: "absolute",
    top: verticalScale(12),
    width: horizontalScale(161),
    height: verticalScale(154),
  },
  headerText: {
    textAlign: "center",
    fontSize: moderateScale(36),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
    // marginTop: Platform.OS === "ios" ? verticalScale(10) : verticalScale(40),
  },
  subHeaderText: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginTop: verticalScale(21),
    color: Colors.deactiveDotBorderColor,
    marginHorizontal: horizontalScale(32),
    fontFamily: Fonts.fontRegularMontserrat,
  },
  inputSection: {
    width: "90%",
    alignSelf: "center",
  },
  btnContainer: {
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 0,
    justifyContent: "center",
    height: verticalScale(60),
    marginTop: verticalScale(21),
    backgroundColor: Colors.onBoardHeadingColor,
  },
  sendResetBtn: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardBackground,
    paddingRight: horizontalScale(10),
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
