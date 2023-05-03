import React from "react";
import { View, Text } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/map";

export const Map = () => {
  const route = useRoute();
  const { campaignId } = route.params;

  return (
    <View style={style.container}>
      <Text>Menu Campagnes {campaignId}</Text>
      <Text>BIG MAP WIP</Text>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
