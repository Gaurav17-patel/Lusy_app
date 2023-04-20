import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/Colors";
import { Fonts } from "../../../constant/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.deactiveDotColor,
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(10),
  },
  headingContainer: {
    fontSize: moderateScale(36),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  buttonMainView: {
    width: "80%",
    marginTop: verticalScale(25),
  },
  newJournalButton: {
    // backgroundColor: Colors.buttonOrange,
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(302),
    marginTop: verticalScale(31),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.buttonOrange,
    borderColor: Colors.onBoardHeadingColor,
  },
  newJournalButtonText: {
    fontSize: moderateScale(18),
    color: Colors.deactiveDotColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  viewEntriesButton: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(302),
    marginTop: verticalScale(25),
    borderWidth: moderateScale(1),
    borderColor: Colors.onBoardHeadingColor,
  },
  viewEntriesButtonText: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  journalBgStyles: {
    right: 0,
    bottom: 40,
    position: "absolute",
    height: verticalScale(366),
    width: horizontalScale(467),
  },
});
