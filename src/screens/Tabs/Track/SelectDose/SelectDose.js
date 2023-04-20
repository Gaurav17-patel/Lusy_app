import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./SelectDoseStyles";
import { useNavigation } from "@react-navigation/native";
import { unCheckbox, checkbox } from "../../../../assets/index";
import CSelectPsyBody from "../../../../components/CSelectPsyBody";

const SelectDose = ({ route }) => {
  const { item, type } = route.params;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState();

  const Microdata = [
    { id: 1, title: "Less than 30 micrograms" },
    { id: 2, title: "30 to 50 micrograms" },
    { id: 3, title: "More than 50 micrograms" },
  ];
  const HeroData = [
    { id: 1, title: "Less than 200 micrograms" },
    { id: 2, title: "200 to 1000 micrograms" },
    { id: 3, title: "More than 1000 micrograms" },
  ];
  const renderCard = (i, e) => {
    return (
      <View key={e} style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(e);
            navigation.navigate("ThankYou");
          }}
        >
          <Image
            source={activeIndex == e ? checkbox : unCheckbox}
            resizeMode="contain"
            style={styles.checkIconImg}
          />
        </TouchableOpacity>
        <Text style={styles.btnText}>{i.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CSelectPsyBody
        headingText={"Select your dose"}
        divider={true}
        data={type.title == "Microdose" ? Microdata : HeroData}
        renderCard={renderCard}
      />
    </SafeAreaView>
  );
};

export default SelectDose;
