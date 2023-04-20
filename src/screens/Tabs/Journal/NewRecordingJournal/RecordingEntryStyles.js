import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../../theme/Colors";
import { Fonts } from "../../../../constant/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  mainBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  audioTexts: {
    fontSize: moderateScale(27),
    color: Colors.recordAudioText,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  timer: {
    color: Colors.timerColor,
    fontSize: moderateScale(44),
    marginTop: verticalScale(64),
    fontFamily: Fonts.fontBoldMontserrat,
  },
  actionButtons: {
    height: verticalScale(71),
    width: horizontalScale(71),
    marginTop: verticalScale(41),
  },
  inProgressButtonActions: {
    width: "55%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewEditRecordingButton: {
    width: "75%",
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(64),
    marginTop: verticalScale(66),
    borderWidth: moderateScale(1),
    backgroundColor: Colors.buttonOrange,
    borderColor: Colors.onBoardHeadingColor,
  },
  btnText: {
    fontSize: moderateScale(16),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  maxTimeStyle: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(25),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
});
