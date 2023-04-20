import {
  homeTab,
  trackTab,
  trackTree,
  journalTab,
  profileTab,
  trackTabBG,
  myJourneyTab,
  homeFillBGTab,
  trackTreeBlack,
  journalFillBGTab,
  profileFillBGTab,
  myJourneyFillBGTab,
} from "../assets";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../helper/Metrics";
import { Colors } from "../theme";
import { Fonts } from "../constant";
import Home from "../screens/Tabs/Home/Home";
import Track from "../screens/Tabs/Track/Track";
import Journal from "../screens/Tabs/Journal/Journal";
import Profile from "../screens/Tabs/Profile/Profile";
import MyJourney from "../screens/Tabs/Myjourney/MyJourney";
import { Text, Image, StyleSheet, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const TabImage = ({ imgName }) => (
  <Image source={imgName} resizeMode="contain" style={styles.tabIconStyle} />
);

export const TabTitle = ({ tabName, dynamicColorStyle }) => (
  <Text style={[styles.tabBarTextStyle, dynamicColorStyle]}>{tabName}</Text>
);

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: verticalScale(70), paddingBottom: 10 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabTitle
              tabName={"Home"}
              dynamicColorStyle={{
                color: focused
                  ? Colors.activeDotColor
                  : Colors.onBoardHeadingColor,
              }}
            />
          ),
          gestureEnabled: false,
          tabBarIcon: ({ color, size, focused }) => (
            <TabImage imgName={focused ? homeFillBGTab : homeTab} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabTitle
              tabName={"Journal"}
              dynamicColorStyle={{
                color: focused
                  ? Colors.activeDotColor
                  : Colors.onBoardHeadingColor,
              }}
            />
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabImage imgName={focused ? journalFillBGTab : journalTab} />
          ),
          tabBarLabelStyle: [styles.tabBarTextStyle],
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <ImageBackground
                source={focused ? trackTabBG : trackTab}
                resizeMode="contain"
                style={styles.trackTabStyle}
              >
                <Image
                  source={focused ? trackTree : trackTreeBlack}
                  resizeMode="contain"
                  style={styles.trackTreeStyle}
                />
                {/* <TouchableOpacity> */}
                <Text
                  style={[
                    styles.trackTabTitle,
                    {
                      color: focused
                        ? Colors.deactiveDotColor
                        : Colors.onBoardHeadingColor,
                    },
                  ]}
                >
                  Track
                </Text>
                {/* </TouchableOpacity> */}
              </ImageBackground>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Journey"
        component={MyJourney}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabTitle
              tabName={"My Journey"}
              dynamicColorStyle={{
                color: focused
                  ? Colors.activeDotColor
                  : Colors.onBoardHeadingColor,
              }}
            />
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabImage imgName={focused ? myJourneyFillBGTab : myJourneyTab} />
          ),
          tabBarLabelStyle: [styles.tabBarTextStyle],
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabTitle
              tabName={"Profile"}
              dynamicColorStyle={{
                color: focused
                  ? Colors.activeDotColor
                  : Colors.onBoardHeadingColor,
              }}
            />
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <TabImage imgName={focused ? profileFillBGTab : profileTab} />
          ),
          tabBarLabelStyle: [styles.tabBarTextStyle],
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  tabIconStyle: {
    height: verticalScale(27),
    width: horizontalScale(27),
  },
  tabBarTextStyle: {
    fontSize: moderateScale(10),
    color: Colors.onBoardHeadingColor,
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
  trackTabStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(75),
    width: horizontalScale(75),
  },
  trackTreeStyle: {
    height: verticalScale(30),
    width: horizontalScale(30),
  },
  trackTabTitle: {
    marginTop: 4,
    fontSize: moderateScale(10),
    fontFamily: Fonts.fontExtraBoldMontserrat,
  },
});
