import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../helper/Metrics";
import { Colors } from "../../../../theme";
import { StyleSheet } from "react-native";
import { Fonts } from "../../../../constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.deactiveDotColor,
  },
  dividerView: {
    backgroundColor: "#FFFFFF",
  },
  mainContainer: {
    width: "90%",
    alignSelf: "center",
  },
  headingContainStyle: {
    textAlign: "center",
    fontSize: moderateScale(27),
    marginTop: verticalScale(12),
    color: Colors.recordAudioText,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  dividerStyle: {
    width: "100%",
    alignSelf: "center",
    height: verticalScale(1),
    backgroundColor: "#C4C4C4",
    marginTop: verticalScale(16),
  },
  buttonStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10),
    height: verticalScale(101),
    borderRadius: moderateScale(16),
  },
  recordAudioIcon: {
    height: verticalScale(51),
    width: horizontalScale(43),
  },
  buttonTextStyle: {
    // textAlign: "center",
    fontSize: moderateScale(20),
    fontFamily: Fonts.fontBoldMontserrat,
  },
  writeTextIcon: {
    height: verticalScale(36),
    width: horizontalScale(32),
  },
  IconView: {
    width: "15%",
    alignItems: "center",
  },
  ButtonTextView: {
    width: "80%",
    alignItems: "flex-start",
  },
});
