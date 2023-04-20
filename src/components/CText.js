import React from "react";
import { Fonts } from "../constant";
import { StyleSheet, Text } from "react-native";

export const CText = ({ text, customLightTextStyle }) => {
  return (
    <Text style={[styles.lightTextStyle, customLightTextStyle]}>{text}</Text>
  );
};

export const CTextBold = ({ text, customBoldTextStyle }) => {
  return (
    <Text style={[styles.boldTextStyle, customBoldTextStyle]}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  lightTextStyle: {
    fontFamily: Fonts.fontMediumMontserrat,
  },
  boldTextStyle: {
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});
