import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../../../helper/Metrics";
import { StyleSheet } from "react-native";
import { Colors } from "../../../../../../theme";
import { Fonts } from "../../../../../../constant/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(40),
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
  },
  headingText: {
    color: "black",
    fontSize: moderateScale(30),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  headingData: {
    fontWeight: "bold",
    borderWidth: 0.6,
    fontSize: moderateScale(12),
    color: Colors.activeDotColor,
    borderRadius: moderateScale(9),
    paddingVertical: verticalScale(8),
    borderColor: Colors.activeDotColor,
    paddingHorizontal: horizontalScale(25),
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
    width: horizontalScale(186),
    marginTop: verticalScale(20),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.activeDotColor,
    borderColor: Colors.onBoardHeadingColor,
  },
  selectBtnText: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(11),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  selectContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: verticalScale(19),
  },
  selectText: {
    fontSize: moderateScale(17),
    marginLeft: horizontalScale(12),
    fontFamily: Fonts.fontBoldMontserrat,
  },
  selectionView: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    marginTop: verticalScale(17),
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(18),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(11),
  },
  renderBtn: {
    width: "45%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(43),
    marginTop: verticalScale(11),
    marginHorizontal: horizontalScale(4),
  },
});
