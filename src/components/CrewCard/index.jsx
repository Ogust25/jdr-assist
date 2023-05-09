import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { CustomText } from "../CustomText";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export const CrewCard = ({ member, campaignId }) => {
  const navigation = useNavigation();

  const imgSelector = () => {
    let imgProfil = "";
    switch (member.image) {
      case "orcMale":
        imgProfil = require("../../../public/assets/images/orcMale.png");
        break;
      case "elfMale":
        imgProfil = require("../../../public/assets/images/elfMale.png");
        break;
      case "elfFemale":
        imgProfil = require("../../../public/assets/images/elfFemale.png");
        break;
    }
    return imgProfil;
  };

  return (
    <View>
      <TouchableOpacity
        style={style.container}
        onPress={() =>
          navigation.navigate("CharacterPage", {
            campaignId: campaignId,
            character: member,
          })
        }
      >
        <Image source={imgSelector()} style={style.img} />
        <View>
          <CustomText>{member.name}</CustomText>
          <CustomText>
            {member.race}, {member.genre}
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};
