import React from "react";
import { Colors } from "../theme";
import { moderateScale } from "../helper/Metrics";
import Feather from "react-native-vector-icons/Feather";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CButton = (props) => {
  const {
    ButtonStyle,
    ButtonText,
    ButtonTextStyle,
    onPress,
    isTrue,
    iconName,
    color,
    wrapperStyle,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.buttonView, ButtonStyle]}
      onPress={onPress}
    >
      <View
        style={[
          {
            flexDirection: "row",
          },
          wrapperStyle,
        ]}
      >
        <Text style={ButtonTextStyle}>{ButtonText}</Text>
        {isTrue && <Feather name={iconName} size={25} color={color} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    alignItems: "center",
    borderWidth: 0.2,
    borderBottomWidth: 6,
    borderRadius: moderateScale(16),
    borderColor: Colors.deactiveDotBorderColor,
  },
});

export default CButton;
