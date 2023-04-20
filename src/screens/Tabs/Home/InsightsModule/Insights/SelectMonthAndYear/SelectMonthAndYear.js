import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../../../helper/Metrics";
import styles from "./SelectMonthAndYearStyles";
import { Colors } from "../../../../../../theme";
import React, { useEffect, useState } from "react";
import { Fonts } from "../../../../../../constant";
import { useNavigation } from "@react-navigation/native";
import { CButton, CHeader } from "../../../../../../components";
import { checkbox, unCheckbox } from "../../../../../../assets/index";

const SelectMonthAndYear = () => {
  const navigation = useNavigation();
  const [activeSelection, setActiveSelection] = useState(0);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedData, setSelectedData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedAll, setSelectedAll] = useState(false);

  console.log(selectedYear, "selectedYear");
  console.log(selectedMonth, "selectedMonth");

  const MonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setSelectedData(ShortMonthNames);
    setActiveSelection(0);
  }, []);

  const renderCard = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          {
            backgroundColor:
              activeSelection == 1
                ? item == selectedYear || selectedAll
                  ? Colors.activeDotColor
                  : Colors.onBoardBackground
                : index == selectedMonth || selectedAll
                ? Colors.activeDotColor
                : Colors.onBoardBackground,
          },
          styles.renderBtn,
        ]}
        onPress={() =>
          activeSelection == 0 ? setSelectedMonth(index) : setSelectedYear(item)
        }
      >
        <Text
          style={{
            fontSize: moderateScale(21),
            fontFamily: Fonts.fontMediumMontserrat,
            color:
              activeSelection == 1
                ? item == selectedYear || selectedAll
                  ? Colors.onBoardBackground
                  : Colors.deactiveDotBorderColor
                : index == selectedMonth || selectedAll
                ? Colors.onBoardBackground
                : Colors.deactiveDotBorderColor,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const ShortMonthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const YearData = [
    new Date().getFullYear() - 5,
    new Date().getFullYear() - 4,
    new Date().getFullYear() - 3,
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 1,
    new Date().getFullYear(),
  ];

  const selectAll = () => {
    setSelectedAll(!selectedAll);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />

      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Select Date</Text>
        <View>
          <Text
            style={styles.headingData}
          >{`${MonthNames[currentMonth]} ${currentYear}`}</Text>
        </View>
      </View>

      <View style={styles.selectContainer}>
        <TouchableOpacity onPress={() => selectAll()}>
          <Image
            source={selectedAll ? checkbox : unCheckbox}
            resizeMode="contain"
            style={{ width: horizontalScale(25), height: verticalScale(25) }}
          />
        </TouchableOpacity>
        <Text style={styles.selectText}>Select All</Text>
      </View>

      <View style={styles.selectionView}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeSelection == 0 ? 2 : 0,
              borderColor: activeSelection == 0 ? Colors.activeDotColor : "",
              width: "45%",
            }}
            onPress={() => {
              setSelectedData(ShortMonthNames);
              setActiveSelection(0);
            }}
          >
            <Text style={styles.selectBtnText}>Select Month</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderBottomWidth: activeSelection == 1 ? 2 : 0,
              borderColor: activeSelection == 1 ? Colors.activeDotColor : "",
              width: "45%",
            }}
          >
            <Text
              style={styles.selectBtnText}
              onPress={() => {
                setSelectedData(YearData);
                setActiveSelection(1);
              }}
            >
              Select Year
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={selectedData}
          renderItem={renderCard}
          numColumns={2}
          contentContainerStyle={{
            marginLeft: moderateScale(12),
          }}
        />
      </View>
      <CButton
        ButtonText="Continue"
        ButtonStyle={styles.btnStyle}
        ButtonTextStyle={styles.btnTxt}
        onPress={() =>
          navigation.navigate("Insights", { selectedYear: selectedYear })
        }
      />
    </SafeAreaView>
  );
};

export default SelectMonthAndYear;
