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
    backgroundColor: Colors.yellow,
  },
  headerStyle: {
    backgroundColor: Colors.yellow,
  },
  dividerView: {
    backgroundColor: "#FFFFFF",
  },
  mainView: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  img: {
    width: horizontalScale(206),
    height: verticalScale(300),
  },
  box: {
    width: "100%",
    height: "94%",
    borderWidth: 2,
    alignSelf: "center",
    position: "absolute",
    top: verticalScale(35),
    borderTopEndRadius: moderateScale(16),
    borderTopStartRadius: moderateScale(16),
    backgroundColor: Colors.onBoardBackground,
  },
  headingText: {
    fontSize: moderateScale(24),
    marginTop: verticalScale(25),
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(22),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  searchWrapper: {
    borderWidth: 2,
    shadowRadius: 3,
    shadowColor: "#000",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 5,
    height: moderateScale(56),
    width: moderateScale(300),
    borderRadius: moderateScale(16),
    marginVertical: verticalScale(18),
    paddingHorizontal: moderateScale(12),
    shadowOffset: { width: 1, height: 1 },
  },
  searchInput: {
    width: "90%",
    fontSize: moderateScale(21),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  dropContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(9),
    marginTop: verticalScale(9),
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(22),
  },
  dropdownTxt: {
    fontSize: moderateScale(17),
    marginLeft: horizontalScale(8),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  nextBtn: {
    bottom: 0,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    borderRadius: moderateScale(16),
    marginVertical: verticalScale(12),
    backgroundColor: Colors.deactiveDotBorderColor,
  },
  nextTxt: {
    textAlign: "center",
    fontSize: moderateScale(21),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});
