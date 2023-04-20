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
  headerMainView: {
    flex: 1,
    alignItems: "center",
    marginTop: verticalScale(40),
    backgroundColor: Colors.onBoardBackground,
  },
  rectangleBg: {
    height: verticalScale(230),
    width: horizontalScale(238),
  },
  tracUser1Style: {
    position: "absolute",
    left: horizontalScale(5),
    height: verticalScale(251),
    width: horizontalScale(195),
    marginTop: verticalScale(30),
  },
  tracUser2Style: {
    right: 0,
    position: "absolute",
    height: verticalScale(251),
    width: horizontalScale(195),
    marginTop: verticalScale(24),
  },
  middleView: {
    flex: 1.3,
    width: "85%",
    alignSelf: "center",
    marginTop: verticalScale(39),
  },
  headingText: {
    textAlign: "center",
    fontSize: moderateScale(24),
    color: Colors.headingBlackColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  dividerStyle: {
    width: "70%",
    alignSelf: "center",
    height: verticalScale(2),
    marginTop: verticalScale(25),
    backgroundColor: Colors.dividerYellowLine,
  },
  allowButtonStyle: {
    alignSelf: "center",
    marginTop: verticalScale(39),
  },
  allowButtonImgStyle: {
    resizeMode: "contain",
    height: verticalScale(44),
    width: horizontalScale(254),
  },
  notNowButton: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginTop: verticalScale(39),
    fontFamily: Fonts.fontRegularMontserrat,
  },
  footerView: {
    width: "85%",
    alignSelf: "center",
    bottom: verticalScale(15),
  },
  footerText: {
    textAlign: "center",
    fontSize: moderateScale(12),
    fontFamily: Fonts.fontMediumWorkSans,
    color: Colors.deactiveDotBorderColor,
  },
});
