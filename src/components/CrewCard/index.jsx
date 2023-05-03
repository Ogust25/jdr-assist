import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";

export const CrewCard = ({ name, race, genre }) => {
  return (
    <View style={style.container}>
      <Text>Img</Text>
      <View>
        <Text>{name}</Text>
        <Text>
          {race}, {genre}
        </Text>
      </View>
    </View>
  );
};
