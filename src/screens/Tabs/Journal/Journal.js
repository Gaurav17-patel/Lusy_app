import styles from "./JournalStyles";
import React, { useState } from "react";
import { journalBg } from "../../../assets";
import { Strings } from "../../../constant/Strings";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Image } from "react-native";
import { CButton, CDatePicker, CFeeling } from "../../../components";

const Journal = () => {
  const navigation = useNavigation();
  const [isDatePickerOpened, setIsDatePickerOpened] = useState(false);
  const [isFeelingDisplayed, setIsFeelingDisplayed] = useState(false);

  return (
    <>
      {!isDatePickerOpened && !isFeelingDisplayed ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={styles.headingContainer}>{Strings.myJournal}</Text>
            <View style={styles.buttonMainView}>
              <CButton
                ButtonText={Strings.newJournal}
                ButtonStyle={styles.newJournalButton}
                ButtonTextStyle={styles.newJournalButtonText}
                // onPress={() => navigation.navigate("DatePicker")}
                onPress={() => setIsDatePickerOpened(true)}
              />
              <CButton
                ButtonText={Strings.viewEntries}
                ButtonStyle={styles.viewEntriesButton}
                ButtonTextStyle={styles.viewEntriesButtonText}
                onPress={() => navigation.navigate("ViewJournalEntries")}
              />
            </View>
          </View>
          <Image
            source={journalBg}
            resizeMode="contain"
            style={styles.journalBgStyles}
          />
        </SafeAreaView>
      ) : isDatePickerOpened && !isFeelingDisplayed ? (
        <CDatePicker saveDateOnPress={() => setIsFeelingDisplayed(true)} />
      ) : (
        <CFeeling feelingOnPress={() => navigation.navigate("JournalEntry")} />
      )}
    </>
  );
};

export default Journal;
