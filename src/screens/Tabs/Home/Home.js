import {
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  history,
  poster01,
  astronaut,
  previewButton,
  homeNextButton,
  homeFooterPoster,
  historyUsersImage,
  microDosingAvatar,
  videoContentImage,
} from "../../../assets";
import styles from "./HomeStyles";
import React, { useEffect } from "react";
import { Colors } from "../../../theme/Colors";
import { Strings } from "../../../constant/Strings";
import { verticalScale } from "../../../helper/Metrics";
import { trackUserAvatar } from "../../../assets/index";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
        BackHandler.exitApp();
      }),
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.welcomeText}>{Strings.welcome}</Text>
          <Text style={styles.jaclynText}>{Strings.jaclyn}</Text>

          {/* {/ BoxOne /} */}

          <View
            style={[
              styles.boxMainView,
              {
                marginTop: verticalScale(8),
                backgroundColor: Colors.dividerYellowLine,
              },
            ]}
          >
            <View style={styles.boxFirstView}>
              <Image
                source={astronaut}
                style={styles.boxOneIcon}
                resizeMode="contain"
              />
              <Text style={styles.boxOneHeading}>{Strings.insights}</Text>
            </View>
            <Text style={styles.boxOneMiddleText}>
              {Strings.homeFirstBoxContain}
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              style={{ alignSelf: "flex-end", width: "15%" }}
              onPress={() => navigation.navigate("RecentActivity")}
            >
              <Image
                source={homeNextButton}
                resizeMode="contain"
                style={styles.nextButtonIcon}
              />
            </TouchableOpacity>
          </View>

          {/* {/ BoxTwo /} */}

          <View
            style={[
              styles.boxMainView,
              {
                backgroundColor: Colors.deactiveDotColor,
                marginTop: verticalScale(20),
              },
            ]}
          >
            <View
              style={[styles.boxFirstView, { justifyContent: "space-between" }]}
            >
              <View style={styles.boxFirstView}>
                <Image
                  resizeMode="contain"
                  source={trackUserAvatar}
                  style={styles.TrackUserStyle}
                />
                <View>
                  <Text style={styles.boxTwoHeadingText}>
                    {Strings.trackNow}
                  </Text>
                  <Text style={styles.boxTwoSubHeadingText}>
                    {Strings.recordLastDose}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  source={previewButton}
                  style={styles.previewButtonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* {/ BoxThree /} */}

          <View
            style={[styles.mainBoxWithBorder, { backgroundColor: Colors.blue }]}
          >
            <View style={styles.boxFirstView}>
              <Image
                source={history}
                style={styles.boxHeaderIcon}
                resizeMode={"contain"}
              />
              <Text style={styles.boxHeadingText}>
                {Strings.journalHistory}
              </Text>
            </View>
            <View style={styles.middleImageView}>
              <Image
                source={historyUsersImage}
                style={styles.boxMiddleImage}
                resizeMode={"contain"}
              />
            </View>
            <TouchableOpacity style={styles.boxThreeNextButton}>
              <Image
                source={homeNextButton}
                resizeMode="contain"
                style={styles.boxNextButtonIcon}
              />
            </TouchableOpacity>
          </View>

          {/* {/ BoxFour /} */}

          <View
            style={[
              styles.mainBoxWithBorder,
              { backgroundColor: Colors.orange },
            ]}
          >
            <View style={styles.boxFirstView}>
              <Image
                source={microDosingAvatar}
                style={styles.boxHeaderIcon}
                resizeMode={"contain"}
              />
              <Text style={styles.boxHeadingText}>
                {Strings.newMicroDosing}
              </Text>
            </View>
            <Text style={styles.boxFourHeading}>
              {Strings.HomeFourthBoxContain}
            </Text>
            <TouchableOpacity style={styles.boxFourNextButton}>
              <Image
                source={homeNextButton}
                resizeMode="contain"
                style={styles.boxNextButtonIcon}
              />
            </TouchableOpacity>
          </View>

          {/* {/ Box Five /} */}

          <View
            style={[
              styles.mainBoxWithBorder,
              { backgroundColor: Colors.deactiveDotColor },
            ]}
          >
            <View style={styles.boxFirstView}>
              <Image source={poster01} style={styles.boxFiveHeadingIcon} />
              <Text style={styles.boxFiveHeading}>{Strings.meetLucy}</Text>
            </View>
            <View style={styles.boxFiveMiddleContainView}>
              <Image
                source={videoContentImage}
                style={styles.boxMiddleImage}
                resizeMode={"contain"}
              />
            </View>
          </View>
        </View>

        {/* {/ FooterContent /} */}
        {/* <View style={styles.footerMainView}>
          <View style={{ width: "40%", justifyContent: 'flex-start' }}>
            <Image
              source={homeFooterPoster}
              resizeMode="contain"
              style={styles.footerImage}
            />
          </View>
          <View style={{ width: "5%" }} />
          <View style={styles.footerTextMainVIew}>
            <Text style={styles.footerHeading}>{Strings.thanksFor}</Text>
            <Text style={styles.footerSubHeading}>{Strings.needHelp}</Text>
          </View>
        </View> */}
        <View
          style={{
            width: "95%",
            flexDirection: "row",
            height: verticalScale(232),
            justifyContent: "space-between",
            marginTop: verticalScale(10),
          }}
        >
          <View style={{ width: "40%" }}>
            <Image
              source={homeFooterPoster}
              resizeMode="contain"
              style={styles.footerImage}
            />
          </View>
          <View style={styles.footerTextMainVIew}>
            <Text style={styles.footerHeading}>{Strings.thanksFor}</Text>
            <Text style={styles.footerSubHeading}>{Strings.needHelp}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
