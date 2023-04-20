import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  searchIcon,
  selectPsychedelicImage_01,
  selectPsychedelicImage_02,
} from "../assets/index";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { CHeader } from "./CHeader";
import { Fonts, Strings } from "../constant";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CSearch = (props) => {
  const { searchTextOnClick } = props;
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={props.placeholder}
        placeholderTextColor={"black"}
        returnKeyType="search"
        onChangeText={props.onChangeText}
        {...props}
      />
      <TouchableOpacity onPress={searchTextOnClick}>
        <Image source={searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

const CSelectPsyBody = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <CHeader
        onPress={() => navigation.goBack()}
        dividerStyle={{
          backgroundColor: "#F2F2F2",
        }}
        statusBarBackgroundColor={Colors.yellow}
      />
      <View style={{ flexDirection: "row", height: verticalScale(332) }}>
        <Image
          source={selectPsychedelicImage_01}
          style={[styles.bgImage, { left: 20 }]}
        />
        <Image
          source={selectPsychedelicImage_02}
          style={[styles.bgImage, { right: 20 }]}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.headingText}>{props.headingText}</Text>
        {props.divider == true && <View style={{ borderBottomWidth: 2 }} />}

        {props.search == true && (
          <CSearch
            placeholder={Strings.searchPsychedelics}
            onChangeText={props.onChangeText}
          />
        )}

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {props.data &&
            props.data.map((i, e) => {
              return props.renderCard(i, e);
            })}
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
};

export default CSelectPsyBody;

const styles = StyleSheet.create({
  bgImage: {
    top: 0,
    position: "absolute",
    height: verticalScale(502),
    width: horizontalScale(231),
  },
  box: {
    flex: 1,
    width: "90%",
    height: "auto",
    borderWidth: 2,
    alignSelf: "center",
    borderBottomWidth: 5,
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(16),
    backgroundColor: Colors.onBoardBackground,
  },
  searchWrapper: {
    borderWidth: 2,
    shadowRadius: 3,
    shadowColor: "#000",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 5,
    height: verticalScale(56),
    width: horizontalScale(300),
    borderRadius: moderateScale(16),
    marginVertical: verticalScale(18),
    shadowOffset: { width: 1, height: 1 },
    paddingHorizontal: horizontalScale(12),
  },
  searchInput: {
    width: "90%",
    fontSize: moderateScale(21),
    paddingVertical: verticalScale(9),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontMediumMontserrat,
  },
  headingText: {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: moderateScale(24),
    marginVertical: verticalScale(16),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});
