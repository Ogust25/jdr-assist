import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";

export const About = ({ navigation }) => {
  function goHome() {
    navigation.navigate("Home");
  }

  return (
    <View>
      <Text>About</Text>
      <Text>
        Projet de fin d'année de développeur concepteur d'applications.
        Application qui a pour but d'assister un maître du jeu dans une partie
        de Donjon et Dragon : La porte de Baldur.
      </Text>
      <TouchableOpacity onPress={goHome}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
