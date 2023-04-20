import moment from "moment";
import React, { useState } from "react";
import { Divider } from "react-native-paper";
import { Strings } from "../../../../constant";
import styles from "./ViewJournalEntriesStyles";
import { Colors } from "../../../../theme/Colors";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { CButton, CHeader } from "../../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { moderateScale, verticalScale } from "../../../../helper/Metrics";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const ViewJournalEntries = () => {
  const navigation = useNavigation();
  const newDate = new Date();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [monthList, setMonthList] = useState([
    { months: "Last 3 Months" },
    { months: "Last 6 Months" },
    { months: "Last Year" },
    { months: "Custom Range" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <CHeader
        dividerStyle={styles.dividerView}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.mainContainer}>
        <Text style={styles.headingContent}>{Strings.myJournals}</Text>
        <View style={styles.selectDateRangeStyle}>
          <Text style={styles.selectDataRangeText}>
            {status ? status : Strings.selectDateRange}
          </Text>
          {open ? (
            <FontAwesome
              name="caret-up"
              size={moderateScale(25)}
              color={Colors.deactiveDotBorderColor}
              onPress={() => setOpen(false)}
            />
          ) : (
            <FontAwesome
              name="caret-down"
              size={moderateScale(25)}
              color={Colors.deactiveDotBorderColor}
              onPress={() => setOpen(true)}
            />
          )}
        </View>
        <View style={styles.middleHeadingView}>
          <Text style={styles.middleHeading}>{Strings.recording}</Text>
          <Text style={styles.middleHeading}>
            {moment(newDate).format("DD/MM/YYYY")}
          </Text>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.subContainView}>
          <Text style={styles.subContainText}>{Strings.listenRecording}</Text>
          <Feather
            name="chevron-right"
            size={moderateScale(25)}
            color={Colors.deactiveDotBorderColor}
            onPress={() =>
              navigation.navigate("RecordingEntry", { player: "isAudioPlay" })
            }
          />
        </View>
        <View style={[styles.subContainView, { marginTop: verticalScale(20) }]}>
          <Text style={styles.subContainText}>
            {Strings.viewEditTranscription}
          </Text>
          <Feather
            name="chevron-right"
            size={moderateScale(25)}
            color={Colors.deactiveDotBorderColor}
            onPress={() => navigation.navigate("EditViewJournal")}
          />
        </View>
        <View
          style={[styles.middleHeadingView, { marginTop: verticalScale(62) }]}
        >
          <Text style={styles.middleHeading}>{Strings.textJournal}</Text>
          <Text style={styles.middleHeading}>
            {moment(newDate).format("DD/MM/YYYY")}
          </Text>
        </View>
        <Divider style={styles.dividerStyle} />
        <View style={styles.subContainView}>
          <Text style={styles.subContainText}>{Strings.viewEditJournal}</Text>
          <Feather
            name="chevron-right"
            size={moderateScale(25)}
            color={Colors.deactiveDotBorderColor}
            onPress={() => alert("hello")}
          />
        </View>
        <CButton
          ButtonText={Strings.newJournal}
          ButtonStyle={styles.btnViewStyle}
          ButtonTextStyle={styles.btnTextStyle}
        />
      </View>
      <View style={[styles.modelMainView, { display: open ? "flex" : "none" }]}>
        {monthList.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.modelBoxView}
                onPress={() => {
                  setStatus(item.months);
                  setOpen(false);
                }}
              >
                <Text style={styles.boxMonthText}>{item.months}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ViewJournalEntries;
