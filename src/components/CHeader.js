import {
  Text,
  View,
  StatusBar,
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
import { Fonts } from "../constant";
import { Divider } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const CHeader = ({
  customHeaderStyle,
  dividerStyle,
  statusBarBackgroundColor,
  onPress,
}) => {
  return (
    <View style={[styles.container, customHeaderStyle]}>
      <StatusBar animated={true} backgroundColor={statusBarBackgroundColor} />
      <View />
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={onPress}
        activeOpacity={1}
      >
        <FontAwesome5
          size={20}
          name="angle-left"
          color={Colors.onBoardHeadingColor}
        />
        <Text style={styles.backTextStyle}>Back</Text>
      </TouchableOpacity>
      <Divider style={dividerStyle} />
    </View>
  );
};

export const CHeaderSkip = ({
  customHeaderStyle,
  dividerStyle,
  statusBarBackgroundColor,
  skipPress,
}) => {
  return (
    <View style={[styles.skipContainer, customHeaderStyle]}>
      <StatusBar animated={true} backgroundColor={statusBarBackgroundColor} />
      <View />
      <View style={[styles.headerContainer, styles.extraHeaderContainer]}>
        <Text style={[styles.backTextStyle, styles.skipTextStyle]}>Skip</Text>
        <Feather
          size={25}
          name="chevron-right"
          color={Colors.onBoardHeadingColor}
          onPress={skipPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(60),
    justifyContent: "space-between",
  },
  skipContainer: {
    width: "100%",
    marginTop: verticalScale(20),
    justifyContent: "space-between",
  },
  headerContainer: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  extraHeaderContainer: {
    justifyContent: "flex-end",
  },
  backTextStyle: {
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(15),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  skipTextStyle: {
    marginRight: horizontalScale(5),
    fontFamily: Fonts.fontRegularMontserrat,
  },
});
