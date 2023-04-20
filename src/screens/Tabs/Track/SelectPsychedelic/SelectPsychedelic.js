import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./SelectPsychedelicStyles";
import { useNavigation } from "@react-navigation/native";
import { unCheckbox, checkbox } from "../../../../assets/index";
import CSelectPsyBody from "../../../../components/CSelectPsyBody";

const SelectPsychedelic = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState();
  const [search, setSearch] = useState("");

  const renderCard = (i, e) => {
    return (
      <View key={e} style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(e);
            navigation.navigate("SelectDoseType", {
              item: i,
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

  const data = [
    { id: 1, title: "Lysergic Acid (LSD)" },
    { id: 1, title: "Psilocybin Mushrooms" },
    { id: 1, title: "DMT/Ayahuasca" },
    { id: 1, title: "Mescaline/Peyote" },
    { id: 1, title: "MDMA" },
    { id: 1, title: "Salvia Divinorum" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CSelectPsyBody
        headingText={"Select your psychedelic"}
        search={true}
        data={data}
        divider={true}
        renderCard={renderCard}
        onChangeText={(txt) => setSearch(txt)}
      />
    </SafeAreaView>
  );
};

export default SelectPsychedelic;
