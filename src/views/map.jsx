import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { CustomText } from "../components/CustomText";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/map";
import logo from "../../public/assets/images/logo.png";

export const Map = () => {
  const route = useRoute();
  const { campaignId } = route.params;

  return (
    <View style={style.container}>
      <CustomText>Menu Campagnes {campaignId + 1}</CustomText>

      <Image
        source={logo}
        style={style.img}
        onPress={() => console.log("ougabouga")}
      />

      <NavBar campaignId={campaignId} />
    </View>
  );
};
