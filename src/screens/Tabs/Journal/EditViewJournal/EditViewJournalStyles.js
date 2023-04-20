import { StyleSheet } from "react-native";
import { Colors } from "../../../../theme";
import { Fonts } from "../../../../constant/Fonts";
import { moderateScale, verticalScale } from "../../../../helper/Metrics";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  mainContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: verticalScale(36),
  },
  headingContent: {
    fontSize: moderateScale(27),
    color: Colors.headingBlackColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  inputStyle: {
    lineHeight: 22,
    letterSpacing: 1,
    height: verticalScale(381),
    fontSize: moderateScale(16),
    color: Colors.inputTextColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  saveButtonStyle: {
    width: "60%",
    borderWidth: 0.5,
    height: verticalScale(54),
    alignSelf: "center",
    justifyContent: "center",
    marginTop: verticalScale(35),
    borderBottomWidth: moderateScale(3),
    backgroundColor: Colors.activeDotColor,
  },
  saveBtnTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
