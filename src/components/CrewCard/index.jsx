import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export const CrewCard = ({
  name,
  race,
  genre,
  characterId,
  campaignId,
  img,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={style.container}
        onPress={() =>
          navigation.navigate("CharacterPage", {
            campaignId: campaignId,
            characterId: characterId,
          })
        }
      >
        <Image
          source={require("../../../public/assets/images/" + img)}
          style={style.img}
        />
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
