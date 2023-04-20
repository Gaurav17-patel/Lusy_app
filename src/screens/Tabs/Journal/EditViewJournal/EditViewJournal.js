import moment from "moment";
import {
  CButton,
  CHeader,
  CJournalEditSuccessModel,
} from "../../../../components";
import React, { useState } from "react";
import { Colors } from "../../../../theme";
import styles from "./EditViewJournalStyles";
import { Strings } from "../../../../constant";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "../../../../helper/Metrics";
import { View, Text, SafeAreaView, TextInput } from "react-native";

const EditViewJournal = () => {
  const navigation = useNavigation();
  const newDate = new Date();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const hideModal = () => setVisible(false);

  const viewJournal = () => {
    setVisible(false);
    navigation.navigate("ViewJournalEntries");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CHeader
        dividerStyle={styles.dividerView}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.headingContent}>
          {moment(newDate).format("LL")}
        </Text>
        <View style={{ marginTop: moderateScale(21) }}>
          <TextInput
            placeholder="Type here..."
            multiline={true}
            scrollEnabled={true}
            textAlignVertical="top"
            style={styles.inputStyle}
            placeholderTextColor={Colors.inputTextColor}
            value={value}
            onChangeText={(val) => setValue(val)}
          />
        </View>
        <CButton
          ButtonText={Strings.save}
          ButtonStyle={styles.saveButtonStyle}
          ButtonTextStyle={styles.saveBtnTextStyle}
          onPress={() => value == "" ? null : setVisible(true)}
        />
      </View>
      <CJournalEditSuccessModel
        modalVisible={visible}
        onDismiss={hideModal}
        onPress={viewJournal}
      />
    </SafeAreaView>
  );
};

export default EditViewJournal;
