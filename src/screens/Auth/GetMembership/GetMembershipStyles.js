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
    backgroundColor: Colors.blue,
  },
  sectionOne: {
    flex: 3,
    alignItems: "center",
  },
  commonTextStyle: {
    textAlign: "center",
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  headerText: {
    fontSize: moderateScale(28),
    marginTop: verticalScale(31),
  },
  bgImage: {
    height: verticalScale(353),
    width: horizontalScale(342),
    marginTop: verticalScale(28),
  },
  overlayText: {
    fontSize: moderateScale(24),
    marginTop: verticalScale(30),
  },
  sectionTwo: {
    flex: 1.5,
    borderTopLeftRadius: moderateScale(26),
    borderTopRightRadius: moderateScale(26),
    backgroundColor: Colors.onBoardBackground,
  },
  btnContainer: {
    borderWidth: 1.5,
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(302),
    marginTop: verticalScale(19),
    backgroundColor: Colors.blue,
    borderColor: Colors.deactiveDotBorderColor,
  },
  memberShipBtn: {
    textAlign: "center",
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  infoText: {
    textAlign: "center",
    fontSize: moderateScale(13),
    marginTop: verticalScale(22),
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  bottomSection: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: verticalScale(22),
    justifyContent: "space-around",
  },
  bottomSectionTexts: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.fontBoldWorkSans,
    color: Colors.deactiveDotBorderColor,
  },
});
