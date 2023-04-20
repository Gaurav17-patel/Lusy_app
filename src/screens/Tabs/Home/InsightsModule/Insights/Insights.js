import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./InsightsStyles";
import React, { useState } from "react";
import { Divider } from "react-native-paper";
import { Colors } from "../../../../../theme";
import { Strings } from "../../../../../constant";
import { LineChart } from "react-native-chart-kit";
import { women } from "../../../../../assets/index";
import { CHeader, CSlider } from "../../../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { moderateScale, verticalScale } from "../../../../../helper/Metrics";

const screenWidth = Dimensions.get("window").width;

const Insights = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [value, setValue] = useState(6);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
            <Text style={styles.headingContainer}>{Strings.insights}</Text>
          </View>
          <TouchableOpacity
            style={styles.selectDateRangeStyle}
            onPress={() => navigation.navigate("SelectMonthAndYear")}
          >
            <Text style={styles.selectDataRangeText}>
              {route.params?.selectedYear
                ? route.params?.selectedYear
                : currentYear}
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
          <Text style={styles.chartHeadingTxt}>{Strings.reportedMood}</Text>
          <Text style={styles.chartHeadingTxt}>
            {Strings.psychedelicExperiences}
          </Text>
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
            {`On average, your mood is `}
            <Text style={{ color: Colors.buttonOrange }}>{"positively"} </Text>
            <Text>
              {`correlated with psychedelic use. With an ${`\n`}average score of `}
            </Text>
            <Text style={{ color: Colors.buttonOrange }}>{"80%"}</Text>
          </Text>
          <View style={{ marginTop: verticalScale(35) }}>
            <Text style={styles.averageMoodContent}>
              {Strings.yourAverageMood}
            </Text>
            <Text style={styles.sliderSubContent}>{Strings.selfReported}</Text>
          </View>
          <View style={styles.sliderView}>
            <CSlider
              value={value}
              startValue={value}
              endValue={10}
              minimumTrackTintColor={Colors.dividerYellowLine}
            />
          </View>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={styles.feelingBestContent}>{Strings.feelingBest}</Text>
          </View>
          <View style={{ width: "94%" }}>
            <Text style={styles.feelingAns}>{Strings.theInBetween}</Text>
            <Text style={styles.feelingSubAns}>
              {Strings.theBetweenSubContent}
            </Text>
            <Text
              style={[styles.feelingSubAns, { marginTop: verticalScale(40) }]}
            >
              {`July 21`}
            </Text>
            <Divider style={styles.dividerStyle} />
          </View>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={styles.feelingBestContent}>
              {Strings.feelingWorst}
            </Text>
          </View>
          <View style={{ width: "94%" }}>
            <Text style={styles.feelingAns}>{Strings.onceUponTime}</Text>
            <Text style={styles.feelingSubAns}>
              {Strings.onceUponTimeSubContent}
            </Text>
            <Text
              style={[styles.feelingSubAns, { marginTop: verticalScale(40) }]}
            >
              {`July 21`}
            </Text>
            <Divider style={styles.dividerStyle} />
          </View>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginTop: verticalScale(15),
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <Image source={women} resizeMode={"contain"} style={styles.womenBG} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Insights;
