import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

export const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../public/assets/fonts/Mukta/Mukta-SemiBold.ttf"),
      });

      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: "custom-font" }}>
      {props.children}
    </Text>
  );
};
