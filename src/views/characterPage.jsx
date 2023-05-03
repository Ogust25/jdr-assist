import React from "react";
import { View, Text, Touchable } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/characterPage";
import fakeBDD from "../fakeBDD.json";
import { TouchableOpacity } from "react-native";

export const CharacterPage = () => {
  const route = useRoute();
  const { campaignId, characterId } = route.params;

  return (
    <View style={style.container}>
      <View>
        <Text>{fakeBDD[campaignId].crewMembers[characterId].name}</Text>
        <Text>
          {fakeBDD[campaignId].crewMembers[characterId].race}{" "}
          {fakeBDD[campaignId].crewMembers[characterId].genre}
        </Text>
        <Text>{fakeBDD[campaignId].crewMembers[characterId].classe}</Text>
        <Text>LVL {fakeBDD[campaignId].crewMembers[characterId].lvl}</Text>
      </View>
      <View>
        <Text>Statistique</Text>
        <Text>
          Force: {fakeBDD[campaignId].crewMembers[characterId].stats.strength}
        </Text>
        <Text>
          Dexterité:{" "}
          {fakeBDD[campaignId].crewMembers[characterId].stats.dexterity}
        </Text>
        <Text>
          Constitution:{" "}
          {fakeBDD[campaignId].crewMembers[characterId].stats.constitution}
        </Text>
        <Text>
          Intelligence:{" "}
          {fakeBDD[campaignId].crewMembers[characterId].stats.intelligence}
        </Text>
        <Text>
          Sagesse: {fakeBDD[campaignId].crewMembers[characterId].stats.wisdom}
        </Text>
        <Text>
          Charisme:{" "}
          {fakeBDD[campaignId].crewMembers[characterId].stats.charisma}
        </Text>
        <TouchableOpacity onPress={() => console.log("modifier")}>
          <Text>Modifier</Text>
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
