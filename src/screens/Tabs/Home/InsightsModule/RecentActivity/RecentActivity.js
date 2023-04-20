import React from "react";
import styles from "./RecentActivityStyles";
import { Colors } from "../../../../../theme";
import { Strings } from "../../../../../constant";
import { useNavigation } from "@react-navigation/native";
import { CButton, CHeader } from "../../../../../components";
import { View, Text, SafeAreaView, Image } from "react-native";
import { userWithBlueBgFrame } from "../../../../../assets/index";

const RecentActivity = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <View style={styles.mainContainerView}>
        <Text style={styles.headingText}>{Strings.myJourney}</Text>
        <Image
          source={userWithBlueBgFrame}
          resizeMode="contain"
          style={styles.bgImg}
        />
        <CButton
          ButtonText={Strings.insights}
          ButtonStyle={styles.btnContainer}
          ButtonTextStyle={styles.signInBtn}
          isTrue={true}
          iconName={"chevron-right"}
          color={Colors.deactiveDotBorderColor}
          wrapperStyle={styles.contentViewStyle}
          onPress={() => navigation.navigate("Insights")}
        />
        <CButton
          ButtonText={Strings.psychedelicActivity}
          ButtonStyle={styles.btnContainer}
          ButtonTextStyle={styles.signInBtn}
          isTrue={true}
          iconName={"chevron-right"}
          color={Colors.deactiveDotBorderColor}
          wrapperStyle={styles.contentViewStyle}
          onPress={() => navigation.navigate("PsychActivity")}
        />
        <CButton
          ButtonText={Strings.journalingHistory}
          ButtonStyle={styles.btnContainer}
          ButtonTextStyle={styles.signInBtn}
          isTrue={true}
          iconName={"chevron-right"}
          color={Colors.deactiveDotBorderColor}
          wrapperStyle={styles.contentViewStyle}
          onPress={() => navigation.navigate("JournalingHistory")}
        />
      </View>
    </SafeAreaView>
  );
};

export default RecentActivity;
