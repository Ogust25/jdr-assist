import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export const CrewCard = ({ name, race, genre, characterId, campaignId }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CharacterPage", {
            campaignId: campaignId,
            characterId: characterId,
          })
        }
      >
        <Text>Img</Text>
        <View>
          <Text>{name}</Text>
          <Text>
            {race}, {genre}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
