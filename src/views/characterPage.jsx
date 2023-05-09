import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomText } from "../components/CustomText";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/characterPage";
import { db, collection, addDoc, doc, getDoc } from "../firebase/config";

export const CharacterPage = () => {
  const route = useRoute();
  const { campaignId, character } = route.params;

  return (
    <View style={style.container}>
      <View>
        <CustomText>{character.name}</CustomText>
        <CustomText>
          {character.race}, {character.genre}
        </CustomText>
        <CustomText>{character.classe}</CustomText>
        <CustomText>LVL {character.lvl}</CustomText>
      </View>
      <View>
        <CustomText>Statistique</CustomText>
        <CustomText>Force: {character.stats.strength}</CustomText>
        <CustomText>Dexterité: {character.stats.dexterity}</CustomText>
        <CustomText>Constitution: {character.stats.constitution}</CustomText>
        <CustomText>Intelligence: {character.stats.intelligence}</CustomText>
        <CustomText>Sagesse: {character.stats.wisdom}</CustomText>
        <CustomText>Charisme: {character.stats.charisma}</CustomText>
        <TouchableOpacity onPress={() => console.log("modifier")}>
          <CustomText>Modifier</CustomText>
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
