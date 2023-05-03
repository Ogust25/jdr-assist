import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import fakeBDD from "../fakeBDD.json";
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
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
