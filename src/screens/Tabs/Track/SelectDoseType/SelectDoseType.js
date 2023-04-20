import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./SelectDoseTypeStyles";
import { useNavigation } from "@react-navigation/native";
import { unCheckbox, checkbox } from "../../../../assets/index";
import CSelectPsyBody from "../../../../components/CSelectPsyBody";

const SelectDoseType = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState();

  const data = [
    {
      id: 1,
      title: "Microdose",
    },
    {
      id: 2,
      title: "Theraputic Hero Dose",
    },
  ];

  const renderCard = (i, e) => {
    return (
      <View key={e} style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(e);
            navigation.navigate("SelectDose", {
              type: i,
              item: item,
            });
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
        headingText={"What kind of  dose did you take? "}
        data={data}
        divider={true}
        renderCard={renderCard}
      />
    </SafeAreaView>
  );
};

export default SelectDoseType;
