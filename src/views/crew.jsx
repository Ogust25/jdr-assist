import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { CustomText } from "../components/CustomText";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/crew";
import { CrewCard } from "../components/CrewCard";
import { BsPlusLg } from "react-icons/bs";
import { db, collection, addDoc, doc, getDoc } from "../firebase/config";
import CharacterForm from "../components/CharacterForm";

export const Crew = () => {
  const route = useRoute();
  const { campaignId } = route.params;
  const [crewMembers, setCrewMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
      <CustomText>Crew</CustomText>
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <BsPlusLg />
        </TouchableOpacity>
      </View>
      <NavBar campaignId={campaignId} />
      <CharacterForm
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        campaignId={campaignId}
      />
    </View>
  );
};
