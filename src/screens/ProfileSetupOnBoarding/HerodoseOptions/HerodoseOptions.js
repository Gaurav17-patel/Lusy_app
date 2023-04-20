import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../theme";
import { Strings } from "../../../constant";
import styles from "./HerodoseOptionsStyles";
import { CHeader } from "../../../components";
import { moderateScale } from "../../../helper/Metrics";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { searchFilterFunction } from "../../../helper/Search";
import { checkbox, heroDoseImg, searchIcon, unCheckbox } from "../../../assets";
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

const HerodoseOptions = () => {
  const navigation = useNavigation();
  const inputRef = useRef(null);
  // const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputValues, setInputValues] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [removeText, setRemoveText] = useState(false);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [dropdownData, setDropdownData] = useState([
    {
      id: 1,
      title: "Lysergic Acid (LSD)",
    },
    {
      id: 2,
      title: "Psilocybin Mushrooms",
    },
    {
      id: 3,
      title: "DMT/Ayahuasca",
    },
    {
      id: 4,
      title: "Mescaline/Peyote",
    },
    {
      id: 5,
      title: "MDMA",
    },
    {
      id: 6,
      title: "N/A",
    },
  ]);

  useEffect(() => {
    setMasterDataSource(dropdownData);
  }, []);

  // const searchFilterFunction = (text) => {
  //   // Check if searched text is not blank
  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource and update FilteredDataSource
  //     let newData = masterDataSource?.filter((item) => {
  //       console.log("item", item);
  //       // Applying filter for the inserted text in search bar

  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : "".toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });

  //     // return newData;
  //     setDropdownData(newData);
  //     setSearchText(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setDropdownData(masterDataSource);
  //     setSearchText(text);
  //   }
  // };

  const searchHeroDoses = (text, data) => {
    if (text) {
      let searchDoseResult = searchFilterFunction(text, data);
      console.log("searchDoseResult1", searchDoseResult);
      if (searchDoseResult && searchDoseResult.length != 0) {
        console.log("searchDoseResult", searchDoseResult);
        setDropdownData(searchDoseResult);
        setSearchText(text);
      }
    } else {
      setDropdownData(masterDataSource);
      setSearchText(text);
    }
  };

  useEffect(() => {
    if (removeText) {
    }
  }, [removeText]);

  const onChangeTextComp = (value, index, question, nativeE) => {
    console.log("inputRef", inputRef.current.value);
    const inputData = [...inputValues];
    inputData[index] = {
      name: question,
      value: removeText ? (value = "") : value + " times",
    };
    setInputValues(inputData);
  };

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
        <Image source={heroDoseImg} style={styles.img} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.box}>
          <Text style={styles.headingText}>
            {Strings.heroDoseOptionHeadingContent}
          </Text>
          <View style={styles.divider} />
          <CSearch
            value={searchText}
            searchTextOnClick={() =>
              searchHeroDoses(searchText, masterDataSource)
            }
            placeholder={Strings.searchPsychedelics}
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
                          inputValues[index]?.value ? checkbox : unCheckbox
                        }
                        style={styles.checkboxStyle}
                      />

                      <Text style={styles.dropdownTxt}>{item.title}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setOpenD(openD && activeIndex === index ? false : true);
                        setActiveIndex(index);
                      }}
                    >
                      <AntDesign
                        name={openD && activeIndex === index ? "up" : "down"}
                        size={moderateScale(15)}
                        color={Colors.deactiveDotBorderColor}
                      />
                    </TouchableOpacity>
                  </View>

                  {activeIndex === index ? (
                    <TextInput
                      ref={inputRef}
                      placeholder="# of times?"
                      keyboardType="numeric"
                      style={{
                        borderBottomWidth: 2,
                        width: "60%",
                        alignSelf: "center",
                        textAlign: "center",
                        paddingBottom: 5,
                        fontSize: moderateScale(18),
                        color: Colors.deactiveDotBorderColor,
                        display: openD ? "flex" : "none",
                      }}
                      onChangeText={(txt) =>
                        onChangeTextComp(txt, index, item.title)
                      }
                      value={
                        inputValues[index]?.value
                          ? `${inputValues[index]?.value}`
                          : null
                      }
                      onKeyPress={({ nativeEvent }) => {
                        nativeEvent.key === "Backspace"
                          ? setRemoveText(true)
                          : setRemoveText(false);
                      }}
                      editable={inputValues[index]?.value ? false : true}
                    />
                  ) : null}
                </View>
              );
            })}
          </KeyboardAwareScrollView>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("MicroDosedOptions")}
          >
            <Text style={styles.nextTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HerodoseOptions;
