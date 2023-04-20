import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../../../theme";
import { Strings } from "../../../../../constant";
import styles from "./PsychActivityDetailsStyles";
import { LineChart } from "react-native-chart-kit";
import { activity01 } from "../../../../../assets/index";
import { CHeader, CSlider } from "../../../../../components";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRoute, useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "../../../../../helper/Metrics";

const screenWidth = Dimensions.get("window").width;

const PsychActivityDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [value, setValue] = useState(6);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [microDoses, setMicroDoses] = useState([
    {
      img: activity01,
      doses: Strings.microDoses,
      total: "Total",
      doseCount: 89,
      commonDose: Strings.mostCommonDose,
      doseGrams: "22.5 micrograms",
    },
    {
      img: activity01,
      doses: Strings.microDoses,
      total: "Total",
      doseCount: 2,
      commonDose: Strings.mostCommonDose,
      doseGrams: "22.5 micrograms",
    },
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
            <Text style={styles.headingContainer}>{Strings.psilocybin}</Text>
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
          <View style={styles.middleBoxView}>
            <Text style={styles.middleBoxHeading}>{Strings.lastUsed}</Text>
            <Text style={styles.middleBoxSubHeading}>{Strings.dayAgo}</Text>
          </View>
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

          {microDoses.map((item, index) => (
            <View style={styles.footerBoxMainView} key={index}>
              <Text style={styles.boxHeadingTxt}>{item.doses}</Text>
              <View style={styles.boxImgView}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.footerBoxImg}
                />
                <View style={styles.footerBoxSecondView}>
                  <View style={styles.totalTxtView}>
                    <Text style={styles.totalTxt}>{item.total}</Text>
                    <Text style={styles.totalDoseTxt}>{item.doseCount}</Text>
                  </View>
                  <Text style={styles.commonDoseTxt}>{item.commonDose}</Text>
                  <Text style={styles.gramsTxt}>{item.doseGrams}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PsychActivityDetails;
