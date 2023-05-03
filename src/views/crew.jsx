import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/crew";
import { CrewCard } from "../components/CrewCard";

export const Crew = () => {
  const route = useRoute();
  const { campaignId } = route.params;

  const crewMembers = [
    { id: 1, name: "Ougabouga", race: "Orc", genre: "Male" },
    { id: 2, name: "Legolas", race: "Elf", genre: "Male" },
    { id: 3, name: "Galadriel", race: "Elf", genre: "Female" },
  ];

  return (
    <View style={style.container}>
      <Text>Crew</Text>
      <View>
        {crewMembers &&
          crewMembers.map((member) => {
            return (
              <CrewCard
                key={member.id}
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
