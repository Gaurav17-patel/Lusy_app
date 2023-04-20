import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Strings } from "../../../constant";
import styles from "./JoiningRegardsStyles";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { candyTree, groupBgIcons, launchLucy } from "../../../assets";

const JoiningRegards = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={groupBgIcons}
          style={styles.groupIconStyle}
          resizeMode="contain"
        />
        <View style={styles.mainHeadindView}>
          <Text style={styles.mainHeadingTxt}>{Strings.thanksForJoining}</Text>
          <Divider style={styles.deviderStyle} />
          <View />
        </View>
        <Text style={styles.subHeading}>{Strings.joiningWelcomeContent}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AllowTrackingData")}
        >
          <Image source={launchLucy} style={styles.LaunchLucyBtn} />
        </TouchableOpacity>
        <Image source={candyTree} style={styles.CandyTreeStyle} />
      </View>
    </SafeAreaView>
  );
};

export default JoiningRegards;
