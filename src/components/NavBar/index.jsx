import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BsDice6, BsHourglassSplit, BsMap } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { style } from "./style";

export const NavBar = ({ campaignId }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map", { campaignId: campaignId })}
      >
        <BsMap />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Crew", { campaignId: campaignId })}
      >
        <RiTeamLine />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("dice")}>
        <BsDice6 />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("timer")}>
        <BsHourglassSplit />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("settings")}>
        <AiOutlineSetting />
      </TouchableOpacity>
    </View>
  );
};
