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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        nisi? Tempora laudantium tempore inventore. Rerum tenetur nemo pariatur
        maxime ducimus velit quis minus itaque. Aperiam error sunt officiis et
        sint.
      </Text>
      <TouchableOpacity onPress={goHome}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
