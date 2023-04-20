import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Fonts } from "../../../../constant";
import { Colors } from "../../../../theme/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },
  btn: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
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
