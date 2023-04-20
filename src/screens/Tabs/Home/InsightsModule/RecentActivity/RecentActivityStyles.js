import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../../../theme";
import { Fonts } from "../../../../../constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  mainContainerView: {
    width: "90%",
    alignSelf: "center",
    marginTop: verticalScale(13),
  },
  headingText: {
    textAlign: "center",
    fontSize: moderateScale(27),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  bgImg: {
    alignSelf: "center",
    height: verticalScale(216),
    width: horizontalScale(187),
    marginTop: verticalScale(29),
  },
  btnContainer: {
    borderWidth: 2,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    alignSelf: "center",
    height: verticalScale(67),
    marginTop: verticalScale(20),
    justifyContent: "space-between",
  },
  signInBtn: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  contentViewStyle: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
