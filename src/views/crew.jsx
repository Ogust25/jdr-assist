import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/crew";
import { CrewCard } from "../components/CrewCard";
import { BsPlusLg } from "react-icons/bs";
import { db, collection, addDoc, doc, getDoc } from "../firebase/config";

export const Crew = () => {
  const route = useRoute();
  const { campaignId } = route.params;
  const [crewMembers, setCrewMembers] = useState([]);

  const getCrewMembers = async () => {
    const querySnapshot = await getDoc(
      doc(collection(db, "campaign"), campaignId)
    );
    setCrewMembers(
      querySnapshot.data().crewMembers.map((member) => ({
        ...member,
      }))
    );
  };

  useEffect(() => {
    getCrewMembers();
  }, []);

  return (
    <View style={style.container}>
      <Text>Crew</Text>
      <View>
        {crewMembers.length > 0 ? (
          crewMembers.map((member) => {
            return (
              <CrewCard
                key={member.id}
                campaignId={campaignId}
                member={member}
              />
            );
          })
        ) : (
          <ActivityIndicator />
        )}
        <TouchableOpacity>
          <BsPlusLg />
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
