import React from "react";
import { View } from "react-native";
import { CustomText } from "../components/CustomText";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/map";

export const Map = () => {
  const route = useRoute();
  const { campaignId } = route.params;

  return (
    <View style={style.container}>
      <CustomText>Menu Campagnes {campaignId + 1}</CustomText>
      <CustomText>BIG MAP WIP</CustomText>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
