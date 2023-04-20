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
    backgroundColor: Colors.yellow,
  },
  btn: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(18),
  },
  btnText: {
    fontSize: moderateScale(17),
    marginLeft: horizontalScale(16),
    color: Colors.headingBlackColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  checkIconImg: {
    resizeMode: "contain",
    height: verticalScale(32),
    width: horizontalScale(32),
  },
});
