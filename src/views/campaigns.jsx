import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import fakeBDD from "../fakeBDD.json";
import { BsPlusLg } from "react-icons/bs";
import { styles } from "../style/campagnes";

export const Campaigns = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Mes Campagnes</Text>
      {fakeBDD &&
        fakeBDD.map((camagne) => {
          return (
            <TouchableOpacity
              key={camagne.id}
              onPress={() =>
                navigation.navigate("Map", { campaignId: camagne.id })
              }
            >
              <Text>{camagne.name}</Text>
            </TouchableOpacity>
          );
        })}
      <TouchableOpacity>
        <BsPlusLg />
      </TouchableOpacity>
    </View>
  );
};
