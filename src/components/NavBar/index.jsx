import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export const NavBar = ({ campaignId }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map", { campaignId: campaignId })}
      >
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Crew", { campaignId: campaignId })}
      >
        <Text>Crew</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("dice")}>
        <Text>Dice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("timer")}>
        <Text>Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("settings")}>
        <Text>Options</Text>
      </TouchableOpacity>
    </View>
  );
};
