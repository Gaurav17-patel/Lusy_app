import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../../../theme";
import styles from "./GetMembershipStyles";
import { Strings } from "../../../constant";
import { CButton } from "../../../components";
import { maskGroup } from "../../../assets/index";
import { useNavigation } from "@react-navigation/native";

const GetMembership = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors.blue} />
      <View style={styles.sectionOne}>
        <ScrollView>
          <Text style={[styles.headerText, styles.commonTextStyle]}>
            {Strings.membershipHeadingContent}
          </Text>
          <ImageBackground
            source={maskGroup}
            resizeMode="contain"
            style={styles.bgImage}
          >
            <Text style={[styles.overlayText, styles.commonTextStyle]}>
              {Strings.joinMembershipContent}
            </Text>
          </ImageBackground>
        </ScrollView>
      </View>
      <View style={styles.sectionTwo}>
        <CButton
          ButtonText={Strings.startMembership}
          ButtonStyle={styles.btnContainer}
          ButtonTextStyle={styles.memberShipBtn}
          onPress={() => navigation.navigate("JoiningRegards")}
        />
        <Text style={styles.infoText}>
          {Strings.memberShipFooterContentOne}
        </Text>
        <Text style={styles.infoText}>
          {Strings.memberShipFooterContentTwo}
        </Text>
        <View style={styles.bottomSection}>
          <TouchableOpacity>
            <Text style={styles.bottomSectionTexts}>
              {Strings.termsCondition}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomSectionTexts}>
              {Strings.privacyPolicy}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetMembership;
