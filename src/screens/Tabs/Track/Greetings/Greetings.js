import {
  Image,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "./GreetingsStyles";
import { Colors } from "../../../../theme";
import { Strings } from "../../../../constant";
import { CButton } from "../../../../components";
import { trackImg } from "../../../../assets/index";
import { useNavigation } from "@react-navigation/native";

const Greetings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.onBoardBackground}
        barStyle="dark-content"
      />
      <Text style={styles.heading}>{Strings.thankyouHeading}</Text>
      <Text style={styles.desc}>{Strings.thankyouDesc}</Text>
      <View style={{ marginTop: 10 }}>
        <CButton
          ButtonText="Add Journal Entry"
          ButtonStyle={styles.btnStyle}
          ButtonTextStyle={styles.btnTxt}
          onPress={() => navigation.navigate("JournalEntry")}
        />
      </View>

      <Image
        source={trackImg}
        style={{
          width: 282,
          height: 317,
          resizeMode: "contain",
          marginTop: 60,
        }}
      />
    </SafeAreaView>
  );
};

export default Greetings;
