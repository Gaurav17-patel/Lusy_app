import React from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { Fonts } from "../constant";
import { StyleSheet, View, Text } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

const CSlider = (props) => {
  const { value, onValueChange, startValue, endValue, minimumTrackTintColor } =
    props;
  return (
    <View style={styles.container}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={Colors.deactiveDotColor}
        thumbTintColor={Colors.deactiveDotColor}
        trackStyle={styles.trackStyles}
        thumbStyle={styles.thumbStyles}
      />
      <View style={styles.valueTextView}>
        <Text style={styles.showValue}>{startValue}</Text>
        <Text style={[styles.showValue, { marginRight: horizontalScale(10) }]}>
          {endValue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  trackStyles: {
    padding: moderateScale(4),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
  },
  thumbStyles: {
    height: verticalScale(24),
    width: horizontalScale(22),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(11),
    borderBottomWidth: verticalScale(6),
  },
  valueTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showValue: {
    fontSize: moderateScale(13),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
});

export default CSlider;
