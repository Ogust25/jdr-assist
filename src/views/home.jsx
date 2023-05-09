import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { CustomText } from "../components/CustomText";
import logo from "../../public/assets/images/logo.png";
import { style } from "../style/home";

export const Home = ({ navigation }) => {
  function goCampaign() {
    navigation.navigate("Campaigns");
  }

  function goAbout() {
    navigation.navigate("About");
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.logoContainer}>
        <Image source={logo} style={style.img} />
        <CustomText style={style.text}>JDR</CustomText>
        <CustomText style={style.text}>COMPAGNON</CustomText>
      </View>
      <TouchableOpacity onPress={goCampaign} style={style.btnStart}>
        <CustomText style={style.text}>COMMENCER</CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={goAbout} style={style.btnAbout}>
        <CustomText style={style.text}>A PROPOS</CustomText>
      </TouchableOpacity>
    </View>
  );
};
