import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/crew";
import { CrewCard } from "../components/CrewCard";
import fakeBDD from "../fakeBDD.json";

export const Crew = () => {
  const route = useRoute();
  const { campaignId } = route.params;

  return (
    <View style={style.container}>
      <Text>Crew</Text>
      <View>
        {fakeBDD[campaignId].crewMembers &&
          fakeBDD[campaignId].crewMembers.map((member) => {
            return (
              <CrewCard
                key={member.id}
                campaignId={campaignId}
                characterId={member.id}
                name={member.name}
                race={member.race}
                genre={member.genre}
              />
            );
          })}
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
