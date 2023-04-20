import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  checkbox,
  searchIcon,
  unCheckbox,
  microDosedImg,
} from "../../../assets";
import { Colors } from "../../../theme";
import { Strings } from "../../../constant";
import { CHeader } from "../../../components";
import styles from "./MicroDosedOptionsStyles";
import React, { useEffect, useState } from "react";
import { moderateScale } from "../../../helper/Metrics";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { searchFilterFunction } from "../../../helper/Search";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CSearch = (props) => {
  const { searchTextOnClick } = props;
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={props.placeholder}
        placeholderTextColor={"black"}
        returnKeyType="search"
        {...props}
      />
      <TouchableOpacity onPress={searchTextOnClick}>
        <Image source={searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

const MicroDosedOptions = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, name: "less then 2 weeks" },
    { id: 2, name: "2 weeks to 2 months" },
    { id: 3, name: "more than 2 months" },
  ];
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectval, setSelectval] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [microDoseValues, setMicroDoseValues] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [getMicroDosesOptions, setMicroDosesOptions] = useState([]);
  const [dropdownData, setDropdownData] = useState([
    {
      id: 1,
      title: "Lysergic Acid (LSD)",
      data: data,
    },
    {
      id: 2,
      title: "Psilocybin Mushrooms",
      data: data,
    },
    {
      id: 3,
      title: "DMT/Ayahuasca",
      data: data,
    },
    {
      id: 4,
      title: "Mescaline/Peyote",
      data: data,
    },
    {
      id: 5,
      title: "MDMA",
      data: data,
    },
    {
      id: 6,
      title: "N/A",
      data: data,
    },
  ]);

  useEffect(() => {
    setMicroDosesOptions(dropdownData);
  }, []);

  const selectDoseValue = (val, question) => {
    const microInputData = [...microDoseValues];
    microInputData[activeIndex] = { name: question, value: val };
    setMicroDoseValues(microInputData);
  };

  const searchMicroDoses = (text, data) => {
    if (text) {
      let searchDoseResult = searchFilterFunction(text, data);
      console.log("searchDoseResult1", searchDoseResult);
      if (searchDoseResult && searchDoseResult.length != 0) {
        console.log("searchDoseResult", searchDoseResult);
        setDropdownData(searchDoseResult);
        setSearchText(text);
      }
    } else {
      setDropdownData(getMicroDosesOptions);
      setSearchText(text);
    }
  };

  console.log("microDoseValues", microDoseValues);

  return (
    <SafeAreaView style={styles.container}>
      <CHeader
        customHeaderStyle={styles.headerStyle}
        dividerStyle={styles.dividerView}
        statusBarBackgroundColor={Colors.yellow}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ position: "absolute", right: 0 }}>
        <Image source={microDosedImg} style={styles.img} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.box}>
          <Text style={styles.headingText}>
            {Strings.microDosedOptionHeadingContent}
          </Text>

          <View style={styles.divider} />
          <CSearch
            placeholder={Strings.searchPsychedelics}
            value={searchText}
            searchTextOnClick={() =>
              searchMicroDoses(searchText, getMicroDosesOptions)
            }
            onChangeText={(text) => setSearchText(text)}
          />
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {dropdownData.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.dropContainer}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={
                          microDoseValues[index]?.value ? checkbox : unCheckbox
                        }
                        style={styles.checkboxStyle}
                      />

                      <Text style={styles.dropdownTxt}>{item.title}</Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        console.log(index, "upper index");
                        setOpen(open && activeIndex === index ? false : true);
                        setActiveIndex(index);
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AntDesign
                        name={open && activeIndex === index ? "up" : "down"}
                        size={moderateScale(15)}
                        color={Colors.deactiveDotBorderColor}
                      />
                    </TouchableOpacity>
                  </View>

                  {activeIndex === index ? (
                    <View
                      style={{
                        display: open ? "flex" : "none",
                        marginTop: 0,
                        marginBottom: 20,
                      }}
                    >
                      <Text style={styles.heading}>average duration?</Text>
                      <View style={styles.dataContainer}>
                        {item.data.map((i, e) => {
                          return (
                            <TouchableOpacity
                              style={styles.itemContainer}
                              onPress={() =>
                                selectDoseValue(i.name, item.title)
                              }
                              key={e}
                            >
                              <Text
                                style={[
                                  styles.itemTxt,
                                  {
                                    backgroundColor:
                                      microDoseValues[index]?.value == i.name
                                        ? "rgba(255, 212, 101, 0.25)"
                                        : Colors.onBoardBackground,
                                  },
                                ]}
                              >
                                {i.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  ) : null}
                </View>
              );
            })}
          </KeyboardAwareScrollView>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("DoseScreen")}
          >
            <Text style={styles.nextTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MicroDosedOptions;
