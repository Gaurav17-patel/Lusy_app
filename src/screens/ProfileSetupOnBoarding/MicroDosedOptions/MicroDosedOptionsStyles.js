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
    width: horizontalScale(190),
    height: verticalScale(298),
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
    color: Colors.deactiveDotBorderColor,
    marginHorizontal: horizontalScale(22),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  searchWrapper: {
    width: "90%",
    borderWidth: 2,
    shadowRadius: 3,
    marginVertical: 18,
    shadowColor: "#000",
    alignSelf: "center",
    borderBottomWidth: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(9),
    borderRadius: moderateScale(16),
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
    justifyContent: "space-between",
    marginVertical: verticalScale(13),
    marginHorizontal: horizontalScale(22),
  },
  dropdownTxt: {
    fontSize: moderateScale(17),
    marginLeft: horizontalScale(8),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  dataContainer: {
    width: "90%",
    borderWidth: 2,
    height: "auto",
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 6,
    borderRadius: moderateScale(9),
  },
  heading: {
    textAlign: "center",
    fontSize: moderateScale(18),
    marginBottom: verticalScale(9),
    color: Colors.deactiveDotBorderColor,
  },
  dropdownTxt: {
    fontSize: moderateScale(17),
    marginLeft: horizontalScale(8),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  itemContainer: {
    width: "100%",
    margin: moderateScale(9),
  },
  itemTxt: {
    textAlign: "center",
    fontSize: moderateScale(17),
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
