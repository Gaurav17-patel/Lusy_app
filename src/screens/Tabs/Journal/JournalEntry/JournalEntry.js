import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./JournalEntryStyles";
import { Colors } from "../../../../theme";
import { Divider } from "react-native-paper";
import { Strings } from "../../../../constant";
import { CHeader } from "../../../../components";
import { useNavigation } from "@react-navigation/native";
import { verticalScale } from "../../../../helper/Metrics";
import { microphone, writeText } from "../../../../assets/index";

const JournalEntry = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CHeader
        dividerStyle={styles.dividerView}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.headingContainStyle}>{Strings.newJournalEntry}</Text>
      <Divider style={styles.dividerStyle} />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              marginTop: verticalScale(36),
              backgroundColor: Colors.yellow,
            },
          ]}
          onPress={() => navigation.navigate("RecordingEntry")}
        >
          <View style={styles.IconView}>
            <Image
              source={microphone}
              resizeMode="contain"
              style={styles.recordAudioIcon}
            />
          </View>
          <View style={styles.ButtonTextView}>
            <Text
              style={[
                styles.buttonTextStyle,
                { color: Colors.deactiveDotBorderColor },
              ]}
            >
              {Strings.recordAudio}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              marginTop: verticalScale(15),
              backgroundColor: Colors.buttonOrange,
            },
          ]}
          onPress={() => navigation.navigate("EditViewJournal")}
        >
          <View style={styles.IconView}>
            <Image
              source={writeText}
              resizeMode="contain"
              style={styles.writeTextIcon}
            />
          </View>
          <View style={styles.ButtonTextView}>
            <Text
              style={[
                styles.buttonTextStyle,
                {
                  color: Colors.onBoardBackground,
                },
              ]}
            >
              {Strings.writeTextJournal}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JournalEntry;
