// ---- All imports files, and packages ---- //
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  poster01,
  poster02,
  poster03,
  poster04,
  nextButton,
  userWithBlueBgFrame,
} from "../../assets";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../helper/Metrics";
import { Colors } from "../../theme";
import styles from "./OnBoardingStyles";
import { Fonts, Strings } from "../../constant";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoarding = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [postersArr] = useState([poster01, poster02, poster03]);
  const [showRealApp, setShowRealApp] = useState(false);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef(null);

  const slides = [
    {
      key: "one",
      title: Strings.introSliderOneHeaderContent,
      text: Strings.introSliderOneSubContent,
    },
    {
      key: "two",
      title: Strings.introSliderTwoHeaderContent,
      text: Strings.introSliderTwoSubContent,
    },
    {
      key: "three",
      title: Strings.introSliderThreeHeaderContent,
      text: Strings.introSliderThreeSubContent,
    },
  ];

  useEffect(() => {
    // AsyncStorage.getItem("isVisited").then((value) => {
    //   console.log("value", value);
    //   console.log("value1", !!value);
    //   setAlreadyVisited(!!value);
    //   navigation.navigate("SignUp");
    // });
    AsyncStorage.getItem("first_time").then((value) => {
      setShowRealApp(!value);
      setLoading(false);
      // navigation.navigate("SignUp");
    });
  }, []);

  const skipIntroSlider = () => {
    navigation.navigate("SignUp");
  };

  const onDone = async () => {
    // console.log("Execute");
    // await AsyncStorage.setItem("isVisited", JSON.stringify(true));
    // navigation.navigate("SignUp");
    AsyncStorage.setItem("first_time", "true").then(() => {
      setShowRealApp(true);
      navigation.navigate("SignUp");
    });
  };

  const renderPosters = ({ item }) => {
    console.log("item", item);
    return item.key === "one" ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: Colors.onBoardBackground,
        }}
      >
        <View>
          <Image
            source={poster01}
            style={styles.posterOne}
            resizeMode="cover"
          />
          <View style={styles.mainContentView01}>
            <Text style={styles.posterOneHeading}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.subContentView}>
          <Text style={styles.posterOneSubContent}>{item.text}</Text>
        </View>
      </View>
    ) : item.key === "two" ? (
      <View style={{ flex: 1, backgroundColor: Colors.onBoardBackground }}>
        <Image
          source={userWithBlueBgFrame}
          style={[styles.posterTwo]}
          resizeMode="contain"
        />
        <View style={{ marginTop: verticalScale(-30) }}>
          <Text style={styles.posterOneHeading}>{item.title}</Text>
        </View>
        <View style={styles.subContentView}>
          <Text style={styles.posterOneSubContent}>{item.text}</Text>
        </View>
      </View>
    ) : item.key === "three" ? (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.onBoardBackground,
          // backgroundColor: "red",
        }}
      >
        <Image
          source={poster03}
          style={{
            height: verticalScale(484),
            width: horizontalScale(173),
            position: "absolute",
            top: verticalScale(5),
            left: 20,
          }}
          resizeMode="cover"
        />
        <Image
          source={poster04}
          style={{
            height: verticalScale(494),
            width: horizontalScale(203),
            // backgroundColor: "green",
            position: "absolute",
            top: verticalScale(5),
            left: 140,
          }}
          resizeMode="contain"
        />
        <View style={styles.mainContentView}>
          <Text style={[styles.posterOneHeading, { textAlign: "left" }]}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(21),
              color: Colors.onBoardSubContentColor,
              fontFamily: Fonts.fontRegularMontserrat,
            }}
          >{`To advance the understanding of psychedelic cognition.`}</Text>
        </View>
      </View>
    ) : null;
  };

  const renderPagination = () => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: Colors.onBoardBackground,
          // backgroundColor: 'red'
        }}
      >
        <View style={styles.customPaginatorView}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.customDotStyle,
                active === 0
                  ? { backgroundColor: Colors.activeDotColor, borderWidth: 0 }
                  : {
                      backgroundColor: Colors.deactiveDotColor,
                      borderWidth: 2,
                    },
              ]}
            />
            <View
              style={[
                styles.customDotStyle,
                active === 1
                  ? { backgroundColor: Colors.activeDotColor, borderWidth: 0 }
                  : {
                      backgroundColor: Colors.deactiveDotColor,
                      borderWidth: 2,
                    },
              ]}
            />
            <View
              style={[
                styles.customDotStyle,
                active === 2
                  ? { backgroundColor: Colors.activeDotColor, borderWidth: 0 }
                  : {
                      backgroundColor: Colors.deactiveDotColor,
                      borderWidth: 2,
                    },
              ]}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              sliderRef.current.goToSlide(
                active != 2 ? active + 1 : onDone,
                true
              )
            }
          >
            <Image
              source={nextButton}
              resizeMode="contain"
              style={styles.forwardButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderIntroSliders = () => {
    if (!showRealApp) {
      return <Text>Hello world</Text>;
    } else {
      return (
        <AppIntroSlider
          ref={sliderRef}
          data={slides}
          renderItem={renderPosters}
          onSlideChange={(a, b) => {
            setActive(a);
          }}
          renderPagination={renderPagination}
          onDone={onDone}
        />
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* {loading && <CActivityIndicator />}
      {showRealApp ? (
        // skipIntroSlider
        navigation.navigate("SignUp")
      ) : ( */}
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderPosters}
        onSlideChange={(a, b) => {
          setActive(a);
        }}
        renderPagination={renderPagination}
        onDone={onDone}
      />
      {/* )} */}
    </SafeAreaView>
  );
};

export default OnBoarding;
