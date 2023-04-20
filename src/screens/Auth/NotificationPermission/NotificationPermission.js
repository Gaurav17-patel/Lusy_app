import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  activeUser,
  yellowBgRound,
  notificationPermissionButton,
} from "../../../assets";
import React from "react";
import { Strings } from "../../../constant";
import { Divider } from "react-native-paper";
import { CHeaderSkip } from "../../../components";
import styles from "./NotificationPermissionStyles";
import { useNavigation } from "@react-navigation/native";

const NotificationPermission = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CHeaderSkip skipPress={() => navigation.navigate("SignIn")} />
      <View style={styles.mainView}>
        <Text style={styles.mainHeading}>
          {Strings.notificationHeadingContent}
        </Text>
        <Divider style={styles.dividerStyle} />
        <Text style={styles.subHeading}>
          {Strings.notificationSubContentOne}
        </Text>
        <Text style={styles.subHeading}>
          {Strings.notificationSubContentTwo}
        </Text>
        <TouchableOpacity
          style={styles.notificationBtnStyle}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            source={notificationPermissionButton}
            resizeMode={"contain"}
            style={styles.notificationBtnImg}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={yellowBgRound}
            resizeMode="contain"
            style={styles.yellowBgRoundStyle}
          />
          <Image
            source={activeUser}
            resizeMode="contain"
            style={styles.activeUserStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationPermission;
