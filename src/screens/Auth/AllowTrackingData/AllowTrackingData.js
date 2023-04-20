import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  rectangle,
  trackUser1,
  trackUser2,
  allowButton,
} from "../../../assets";
import React from "react";
import { Divider } from "react-native-paper";
import styles from "./AllowTrackingDataStyle";
import { Strings, Fonts } from "../../../constant";
import { useNavigation } from "@react-navigation/native";

const AllowTrackingData = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerMainView}>
        <Image
          source={rectangle}
          style={styles.rectangleBg}
          resizeMode="contain"
        />
        <Image
          source={trackUser1}
          style={styles.tracUser1Style}
          resizeMode="contain"
        />
        <Image
          source={trackUser2}
          style={styles.tracUser2Style}
          resizeMode="contain"
        />
      </View>
      <View style={styles.middleView}>
        <Text style={styles.headingText}>
          <Text style={{ fontFamily: Fonts.fontBoldMontserrat }}>
            {Strings.trackDataBoldHeadingContent}
          </Text>
          {Strings.trackDataHeadingContent}
        </Text>
        <Divider style={styles.dividerStyle} />
        <TouchableOpacity
          style={styles.allowButtonStyle}
          onPress={() => navigation.navigate("NotificationPermission")}
        >
          <Image source={allowButton} style={styles.allowButtonImgStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationPermission")}
        >
          <Text style={styles.notNowButton}>{Strings.notNow}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>{Strings.PrivacyFooterContent}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AllowTrackingData;
