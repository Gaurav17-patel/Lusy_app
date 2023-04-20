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
    backgroundColor: Colors.onBoardBackground,
  },
  mainContainer: {
    width: "85%",
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  headingContent: {
    alignSelf: "center",
    fontSize: moderateScale(36),
    color: Colors.headingBlackColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  selectDateRangeStyle: {
    width: "60%",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    padding: moderateScale(3),
    marginTop: verticalScale(42),
    borderRadius: moderateScale(9),
    justifyContent: "space-around",
  },
  selectDataRangeText: {
    fontSize: moderateScale(12),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  middleHeadingView: {
    flexDirection: "row",
    marginTop: verticalScale(56),
    justifyContent: "space-between",
  },
  middleHeading: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  dividerStyle: {
    height: 1,
    marginTop: verticalScale(21),
    backgroundColor: Colors.deactiveDotBorderColor,
  },
  subContainView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
    justifyContent: "space-between",
  },
  subContainText: {
    fontSize: moderateScale(17),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  modelMainView: {
    elevation: 6,
    shadowColor: "#000",
    position: "absolute",
    // alignSelf: "flex-end",
    shadowOffset: {
      width: 0,
      height: moderateScale(5),
    },
    right: moderateScale(5),
    top: verticalScale(190),
    padding: moderateScale(9),
    margin: moderateScale(25),
    height: verticalScale(189),
    width: horizontalScale(189),
    marginTop: moderateScale(12),
    borderRadius: moderateScale(9),
    shadowRadius: moderateScale(4),
    shadowOpacity: moderateScale(0.25),
    backgroundColor: Colors.onBoardBackground,
    // marginHorizontal: moderateScale(25),
    // top: Platform.OS == "android" ? moderateScale(110) : moderateScale(145),
  },
  modelBoxView: {
    flexDirection: "row",
    margin: moderateScale(2),
    padding: moderateScale(4),
    justifyContent: "space-between",
  },
  boxMonthText: {
    padding: moderateScale(6),
    fontSize: moderateScale(12),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  btnViewStyle: {
    width: "70%",
    borderWidth: 0.5,
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(52),
    marginTop: verticalScale(52),
    backgroundColor: Colors.buttonOrange,
  },
  btnTextStyle: {
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
