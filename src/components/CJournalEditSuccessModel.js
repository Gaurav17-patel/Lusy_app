import React from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { Modal } from "react-native-paper";
import { Strings, Fonts } from "../constant";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";

const CJournalEditSuccessModel = ({ modalVisible, onDismiss, onPress }) => {
  return (
    <Modal
      visible={modalVisible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.modalContainer}
    >
      <Text style={styles.headerText}>{Strings.allDone}</Text>
      <TouchableOpacity style={styles.viewBtnStyle} onPress={onPress}>
        <Text style={styles.btnText}>{Strings.viewJournals}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CJournalEditSuccessModel;

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(200),
    borderWidth: moderateScale(1.2),
    borderRadius: moderateScale(16),
    borderBottomWidth: moderateScale(6),
    backgroundColor: Colors.onBoardBackground,
    width: Platform.OS === "ios" ? "100%" : "80%",
    padding: Platform.OS === "ios" ? moderateScale(35) : 0,
  },
  headerText: {
    color: Colors.darkBlack,
    fontSize: moderateScale(26),
    marginTop: verticalScale(26),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  viewBtnStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(260),
    marginTop: verticalScale(24),
    borderRadius: moderateScale(16),
    backgroundColor: Colors.onBoardHeadingColor,
  },
  btnText: {
    fontSize: moderateScale(21),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
