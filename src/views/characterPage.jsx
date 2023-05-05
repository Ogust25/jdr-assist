import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
        <Text>{character.name}</Text>
        <Text>
          {character.race}, {character.genre}
        </Text>
        <Text>{character.classe}</Text>
        <Text>LVL {character.lvl}</Text>
      </View>
      <View>
        <Text>Statistique</Text>
        <Text>Force: {character.stats.strength}</Text>
        <Text>Dexterité: {character.stats.dexterity}</Text>
        <Text>Constitution: {character.stats.constitution}</Text>
        <Text>Intelligence: {character.stats.intelligence}</Text>
        <Text>Sagesse: {character.stats.wisdom}</Text>
        <Text>Charisme: {character.stats.charisma}</Text>
        <TouchableOpacity onPress={() => console.log("modifier")}>
          <Text>Modifier</Text>
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
