import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";

export const Home = ({ navigation }) => {
  function goCampaign() {
    navigation.navigate("Campaigns");
  }

  function goAbout() {
    navigation.navigate("About");
  }

  return (
    <View>
      <Text>Jdr Assist</Text>
      <TouchableOpacity onPress={goCampaign}>
        <Text>Jouer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goAbout}>
        <Text>A propos</Text>
      </TouchableOpacity>
    </View>
  );
};
