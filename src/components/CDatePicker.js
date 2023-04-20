import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import moment from "moment";
import CButton from "./CButton";
import { Colors } from "../theme";
import { Fonts } from "../constant";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState, useEffect } from "react";

LocaleConfig.locales["fr"] = {
  monthNames: [
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
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Juily",
    "Aug",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
};
LocaleConfig.defaultLocale = "fr";

const CDatePicker = ({ saveDateOnPress }) => {
  const navigation = useNavigation();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const initDate =
    currentYear +
    "-" +
    (currentMonth + 1) +
    "-" +
    moment(selected).format("DD");
  const [SelectedDate, setDate] = useState(new Date().getUTCDate());

  // const CALENDAR_MONTHS = {
  //   January: "Jan",
  //   February: "Feb",
  //   March: "Mar",
  //   April: "Apr",
  //   May: "May",
  //   June: "Jun",
  //   July: "Jul",
  //   August: "Aug",
  //   September: "Sep",
  //   October: "Oct",
  //   November: "Nov",
  //   December: "Dec",
  // };

  const [selected, setSelected] = useState(new Date());
  const [openPicker, setOpenPicker] = useState(false);

  const [activeSelection, setActiveSelection] = useState(0);
  const [selectedData, setSelectedData] = useState([]);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const YearData = [
    new Date().getFullYear() - 5,
    new Date().getFullYear() - 4,
    new Date().getFullYear() - 3,
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 1,
    new Date().getFullYear(),
  ];

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
                ? item == selectedYear
                  ? Colors.activeDotColor
                  : Colors.onBoardBackground
                : index == selectedMonth
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
                ? item == selectedYear
                  ? Colors.onBoardBackground
                  : Colors.deactiveDotBorderColor
                : index == selectedMonth
                ? Colors.onBoardBackground
                : Colors.deactiveDotBorderColor,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Select Date</Text>
        <TouchableOpacity onPress={() => setOpenPicker(!openPicker)}>
          <Text
            style={styles.headingData}
          >{`${MonthNames[currentMonth]} ${currentYear}`}</Text>
        </TouchableOpacity>
      </View>
      {!openPicker ? (
        <>
          <Calendar
            disableMonthChange
            hideArrows
            customHeaderTitle
            style={styles.calendar}
            hideExtraDays
            onDayPress={onDayPress}
            markingType={"custom"}
            current={initDate}
            theme={{
              textDayStyle: {
                color: "#A5A5A5",
                fontFamily: Fonts.fontMediumMontserrat,
                fontSize: moderateScale(16),
              },
              weekVerticalMargin: verticalScale(14),
              textSectionTitleColor: "black",
            }}
            dayComponent={({ date }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onDayPress(date);
                    setDate(date.day);
                  }}
                  style={[
                    {
                      backgroundColor:
                        SelectedDate == date.day
                          ? Colors.activeDotColor
                          : Colors.onBoardBackground,
                    },
                    styles.dateBtn,
                  ]}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color:
                        SelectedDate == date.day
                          ? Colors.onBoardBackground
                          : "#A5A5A5",
                      fontFamily: Fonts.fontMediumMontserrat,
                      fontSize: moderateScale(16),
                    }}
                  >
                    {date.day.toString().length == 1
                      ? `0${date.day}`
                      : date.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.activeDateContainer}>
            <Text style={styles.activeDateText}>
              {`${MonthNames[currentMonth]}-${moment(selected).format(
                "DD"
              )}-${currentYear}`}
            </Text>
          </View>
          <CButton
            ButtonText="Save Date"
            ButtonStyle={styles.btnStyle}
            ButtonTextStyle={styles.btnTxt}
            onPress={saveDateOnPress}
          />
        </>
      ) : (
        <>
          <View style={styles.selectionView}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{
                  borderBottomWidth: activeSelection == 0 ? 2 : 0,
                  borderColor:
                    activeSelection == 0 ? Colors.activeDotColor : "",
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
                  borderColor:
                    activeSelection == 1 ? Colors.activeDotColor : "",
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
            ButtonText="Save Date"
            ButtonStyle={styles.btnStyle}
            ButtonTextStyle={styles.btnTxt}
            onPress={() => {
              setCurrentMonth(selectedMonth);
              setCurrentYear(selectedYear);
              setOpenPicker(!openPicker);
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.onBoardBackground,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(60),
    marginBottom: verticalScale(8),
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
  },
  headingText: {
    color: "black",
    fontSize: moderateScale(30),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  headingData: {
    fontWeight: "bold",
    borderWidth: 0.6,
    fontSize: moderateScale(12),
    color: Colors.activeDotColor,
    borderRadius: moderateScale(9),
    paddingVertical: verticalScale(8),
    borderColor: Colors.activeDotColor,
    paddingHorizontal: horizontalScale(25),
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  dateText: {
    color: "#A5A5A5",
    width: horizontalScale(22),
    fontSize: moderateScale(16),
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(15),
    fontFamily: Fonts.fontRegularMontserrat,
  },

  activeDateContainer: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    padding: moderateScale(16),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(16),
    borderBottomWidth: moderateScale(5),
  },
  activeDateText: {
    textAlign: "center",
    fontSize: moderateScale(18),
    color: Colors.deactiveDotBorderColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },

  dayLabelText: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: verticalScale(30),
    justifyContent: "space-between",
  },
  DayText: {
    fontWeight: "bold",
    color: Colors.onBoardSubContentColor,
    fontFamily: Fonts.fontRegularMontserrat,
  },

  btnTxt: {
    fontSize: moderateScale(18),
    color: Colors.onBoardBackground,
    fontFamily: Fonts.fontBoldMontserrat,
  },
  btnStyle: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: horizontalScale(186),
    marginTop: verticalScale(20),
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.activeDotColor,
    borderColor: Colors.onBoardHeadingColor,
  },

  calendar: {
    marginTop: verticalScale(20),
  },
  dateBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(36),
    width: horizontalScale(36),
    borderRadius: moderateScale(20),
  },
  selectBtnText: {
    textAlign: "center",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(11),
    fontFamily: Fonts.fontBoldMontserrat,
    color: Colors.deactiveDotBorderColor,
  },
  selectionView: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    marginTop: verticalScale(90),
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(18),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(11),
  },
  renderBtn: {
    width: "45%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(43),
    marginTop: verticalScale(11),
    marginHorizontal: horizontalScale(4),
  },
});

export default CDatePicker;
