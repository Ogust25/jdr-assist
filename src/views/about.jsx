import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomText } from "../components/CustomText";

export const About = ({ navigation }) => {
  function goHome() {
    navigation.navigate("Home");
  }

  return (
    <View>
      <CustomText>About</CustomText>
      <CustomText>
        Projet de fin d'année de développeur concepteur d'applications.
        Application qui a pour but d'assister un maître du jeu dans une partie
        de Donjon et Dragon : La porte de Baldur.
      </CustomText>
      <TouchableOpacity onPress={goHome}>
        <CustomText>Back</CustomText>
      </TouchableOpacity>
    </View>
  );
};
