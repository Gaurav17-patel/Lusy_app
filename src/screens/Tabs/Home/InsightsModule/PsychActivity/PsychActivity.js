import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  activity01,
  activity02,
  activity03,
  activity04,
  activity05,
  activity06,
} from "../../../../../assets/index";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../../helper/Metrics";
import React, { useState } from "react";
import styles from "./PsychActivityStyles";
import { Colors } from "../../../../../theme";
import { Strings } from "../../../../../constant";
import { LineChart } from "react-native-chart-kit";
import { CHeader } from "../../../../../components";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const screenWidth = Dimensions.get("window").width;

const PsychActivity = () => {
  const navigation = useNavigation();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [activityDoses, setActivityDoses] = useState([
    {
      img: activity01,
      dose: "Macro Dose",
      doseName: "Psilocybin",
      times: "4 times",
    },
    {
      img: activity02,
      dose: "Macro Dose",
      doseName: "Ayahuaska",
      times: "89 times",
    },
    {
      img: activity03,
      dose: "Macro Dose",
      doseName: "LSD",
      times: "24 times",
    },
    {
      img: activity04,
      dose: "Macro Dose",
      doseName: "Mescaline/Peyote",
      times: "1 times",
    },
    {
      img: activity05,
      dose: "Macro Dose",
      doseName: "MDMA",
      times: "3 times",
    },
    {
      img: activity06,
      dose: "Macro Dose",
      doseName: "Salvia Divinorum",
      times: "10 times",
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
          <View></View>
          <View>
            <Text
              style={styles.headingContainer}
            >{`Psychedelic${"\n"}Activity`}</Text>
          </View>
          <TouchableOpacity
            style={styles.selectDateRangeStyle}
            // onPress={() => navigation.navigate("SelectMonthAndYear")}
          >
            <Text style={styles.selectDataRangeText}>
              {/* {route.params?.selectedYear
                ? route.params?.selectedYear
                : currentYear} */}
              {currentYear}
            </Text>
            <FontAwesome5
              name="caret-down"
              size={moderateScale(25)}
              color={Colors.deactiveDotBorderColor}
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
            {`You have taken ${"\n"}psychedelics `}
            <Text style={{ color: Colors.buttonOrange }}>{"117"} </Text>
            <Text>{`total times `}</Text>
            <Text>{`over this period.`}</Text>
          </Text>
        </View>

        {activityDoses.map((item, index) => (
          <View style={styles.footerMainView}>
            <TouchableOpacity
              style={styles.footerSubView}
              onPress={() =>
                index === 0 && navigation.navigate("PsychActivityDetails")
              }
            >
              <Image
                source={item.img}
                resizeMode="contain"
                style={styles.imgStyle}
              />
              <View style={{ marginLeft: horizontalScale(13) }}>
                <Text style={styles.firstDoseTxt}>{item.dose}</Text>
                <Text style={styles.doseNameTxt}>{item.doseName}</Text>
                <Text style={styles.timesTxt}>{item.times}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PsychActivity;
