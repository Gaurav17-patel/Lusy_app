import {
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { ninjaStar } from "../assets";
import { Modal } from "react-native-paper";
import { Strings, Fonts } from "../constant";

const CModal = ({ modalVisible, onDismiss, onPress }) => {
  return (
    <Modal
      visible={modalVisible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.modalContainer}
    >
      <Image source={ninjaStar} resizeMode="contain" style={styles.imgStyle} />
      <Text style={styles.headerText}>{Strings.success}</Text>
      <Text style={styles.subText}>{Strings.resetPasswordSuccess}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginTextButton}>{Strings.login}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CModal;

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(300),
    backgroundColor: Colors.onBoardBackground,
    width: Platform.OS === "ios" ? "100%" : "80%",
    padding: Platform.OS === "ios" ? moderateScale(35) : 0,
  },
  imgStyle: {
    height: verticalScale(42),
    width: horizontalScale(42),
  },
  headerText: {
    color: Colors.yellow,
    fontSize: moderateScale(36),
    marginTop: verticalScale(16),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  subText: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(16),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },
  loginTextButton: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(16),
    textDecorationLine: "underline",
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});
