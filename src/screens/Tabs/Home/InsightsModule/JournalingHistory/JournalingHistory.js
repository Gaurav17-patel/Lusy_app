import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../../../theme";
import styles from "./JournalingHistoryStyles";
import { Strings } from "../../../../../constant";
import { LineChart } from "react-native-chart-kit";
import { CHeader } from "../../../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRoute, useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "../../../../../helper/Metrics";

const screenWidth = Dimensions.get("window").width;

const JournalingHistory = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [value, setValue] = useState(6);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [journaling, setJournaling] = useState([
    { heading: "Number Of Journal Entries", subHeading: "100" },
    { heading: "Last Journal", subHeading: "a day ago" },
    { heading: "See Journal Entries" },
  ]);

  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        data: [85, 40, 60, 50, 80],
        // color: (opacity = 1) => `rgba(255, 212, 101, ${opacity})`,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(110, 22, 99, ${opacity})`,
  };
  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(50) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={{ width: "10%" }}></View>
          <View>
            <Text style={styles.headingContainer}>
              {Strings.journalingHistory}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.selectDateRangeStyle}
            onPress={() => navigation.navigate("SelectMonthAndYear")}
          >
            <Text style={styles.selectDataRangeText}>
              {/* {route.params?.selectedYear
                ? route.params?.selectedYear
                : currentYear} */}
              {currentYear}
            </Text>
            <FontAwesome
              name="caret-down"
              size={moderateScale(25)}
              color={Colors.deactiveDotBorderColor}
              // onPress={() => navigation.navigate("SelectMonthAndYear")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.reportedMoodView}>
          <Text style={styles.chartHeadingTxt}>{Strings.journalEntries}</Text>
        </View>
        <LineChart
          data={data}
          width={screenWidth + 30}
          height={220}
          chartConfig={chartConfig}
          bezier
          withOuterLines={false}
          withInnerLines={false}
          withHorizontalLabels={false}
          // withVerticalLabels={false}
          fromZero={true}
        />
        <View style={styles.middleContentView}>
          <Text style={styles.middleContent}>
            {`You have added `}
            <Text style={{ color: Colors.buttonOrange }}>{"100"} </Text>
            <Text>{` journal entries over this period.`}</Text>
          </Text>
          {journaling.map((item, index) => (
            <View style={styles.middleBoxMainView} key={index}>
              <Text style={styles.middleBoxHeading}>{item.heading}</Text>
              <Text style={styles.middleBoxSubHeading}>{item.subHeading}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JournalingHistory;
