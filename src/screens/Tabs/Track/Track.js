import styles from "./TrackStyles";
import React, { useState } from "react";
import { trackImg } from "../../../assets";
import { Strings } from "../../../constant";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, StatusBar, SafeAreaView } from "react-native";
import { CButton, CDatePicker, CFeeling } from "../../../components";

const Track = () => {
  const navigation = useNavigation();
  const [isDatePickerOpened, setIsDatePickerOpened] = useState(false);
  const [isFeelingDisplayed, setIsFeelingDisplayed] = useState(false);

  return (
    <>
      {!isDatePickerOpened && !isFeelingDisplayed ? (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={"dark-content"} />
          <Text style={styles.heading}>
            {Strings.trackFirstTimeHeadingContent}
          </Text>
          <Text style={styles.description}>
            {Strings.trackFirstTimedetailContent}
          </Text>

          {/* <TouchableOpacity
            style={styles.btn}
            // onPress={() => navigation.navigate("DatePicker")}
            onPress={() => setIsDatePickerOpened(true)}
          >
            <Image source={trackButtonImg} style={styles.buttonimg} />
          </TouchableOpacity> */}

          <CButton
            ButtonText={Strings.trackHeading}
            ButtonStyle={styles.btn}
            ButtonTextStyle={styles.btnTxt}
            onPress={() => setIsDatePickerOpened(true)}
          />

          <Image source={trackImg} style={styles.bgImg} resizeMode="contain" />
        </SafeAreaView>
      ) : isDatePickerOpened && !isFeelingDisplayed ? (
        <CDatePicker saveDateOnPress={() => setIsFeelingDisplayed(true)} />
      ) : (
        <CFeeling
          feelingOnPress={() => navigation.navigate("SelectPsychedelic")}
        />
      )}
    </>
  );
};

export default Track;
