import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/crew";
import { CrewCard } from "../components/CrewCard";
import { BsPlusLg } from "react-icons/bs";
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
          <BsPlusLg />
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
