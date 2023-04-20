import React from "react";
import styles from "./DoseScreenStyles";
import { Strings } from "../../../constant";
import { doseJmiller } from "../../../assets";
import { CButton, CHeader } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView } from "react-native";

const DoseScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <View style={styles.mainView}>
        <Text style={styles.mainHeading}>{Strings.doseHeadingContent}</Text>
        <Text style={styles.subHeading}>{Strings.doseSubContentOne}</Text>
        <Text style={styles.subHeading}>{Strings.doseSubContentTwo}</Text>
        <CButton
          ButtonText={Strings.addYourFirstJournalEntry}
          ButtonStyle={styles.btnContainer}
          ButtonTextStyle={styles.joiningBtn}
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
      <View>
        <Image
          source={doseJmiller}
          resizeMode="contain"
          style={styles.DosejmillerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default DoseScreen;
