import { Colors } from "../theme";
import { Fonts } from "../constant";
import React, { forwardRef } from "react";
import Feather from "react-native-vector-icons/Feather";
import { StyleSheet, View, TextInput } from "react-native";
import { moderateScale, verticalScale } from "../helper/Metrics";

const CInput = forwardRef((props, ref) => {
  const { inputStyle, placeholder, iconName } = props;
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      <View style={styles.iconSection}>
        <Feather name={iconName} size={25} color={Colors.onBoardHeadingColor} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#18191F"}
          style={{
            fontFamily: Fonts.fontMediumMontserrat,
            fontSize: moderateScale(18),
            color: Colors.deactiveDotBorderColor,
          }}
          {...props}
          ref={ref}
        />
      </View>
    </View>
  );
});

export default CInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderWidth: 2,
    flexDirection: "row",
    borderColor: "#18191F",
    height: verticalScale(56),
    marginTop: verticalScale(24),
    borderRadius: moderateScale(15),
  },
  iconSection: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "85%",
    justifyContent: "center",
  },
});
