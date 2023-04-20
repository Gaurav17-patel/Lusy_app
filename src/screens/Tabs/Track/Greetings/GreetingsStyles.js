import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../../theme";
import { Fonts } from "../../../../constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.onBoardBackground,
  },
  heading: {
    fontSize: moderateScale(30),
    marginTop: verticalScale(80),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  desc: {
    textAlign: "center",
    fontSize: moderateScale(18),
    marginVertical: verticalScale(24),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  btnTxt: {
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  btnStyle: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(302),
    marginTop: verticalScale(20),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.activeDotColor,
    borderColor: Colors.onBoardHeadingColor,
  },
});
