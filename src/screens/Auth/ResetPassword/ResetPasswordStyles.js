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
  },
  userImg: {
    height: verticalScale(226),
    width: horizontalScale(109),
  },
  keyImg: {
    position: "absolute",
    top: verticalScale(40),
    right: horizontalScale(68),
    width: horizontalScale(92),
    height: verticalScale(112),
  },
  headerText: {
    textAlign: "center",
    fontSize: moderateScale(36),
    paddingTop: verticalScale(38),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  subText: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginTop: verticalScale(21),
    color: Colors.deactiveDotBorderColor,
    marginHorizontal: horizontalScale(32),
    fontFamily: Fonts.fontRegularMontserrat,
  },
  errorMessage: {
    color: "red",
    marginTop: verticalScale(5),
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(5),
    fontFamily: Fonts.fontMediumMontserrat,
  },
  btnContainer: {
    alignSelf: "center",
    borderBottomWidth: 0,
    justifyContent: "center",
    height: verticalScale(60),
    marginTop: verticalScale(21),
    backgroundColor: Colors.onBoardHeadingColor,
  },
  submitBtn: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardBackground,
    paddingRight: horizontalScale(10),
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
