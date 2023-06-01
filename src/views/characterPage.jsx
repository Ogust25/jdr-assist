import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { CustomText } from "../components/CustomText";
import { useRoute } from "@react-navigation/native";
import { NavBar } from "../components/NavBar";
import { style } from "../style/characterPage";
import {
  db,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "../firebase/config";
import { BtnAddOne } from "../components/BtnAddOne";
import { BtnMinusOne } from "../components/btnMinusOne";

export const CharacterPage = () => {
  const route = useRoute();
  const { campaignId, character } = route.params;
  const [modifierVisible, setModifierVisible] = useState(false);
  const [actualCharacter, setActualCharacter] = useState(character);
  const [tempStats, setTempStats] = useState({
    strength: actualCharacter.stats.strength,
    dexterity: actualCharacter.stats.dexterity,
    intelligence: actualCharacter.stats.intelligence,
    charisma: actualCharacter.stats.charisma,
    constitution: actualCharacter.stats.constitution,
    wisdom: actualCharacter.stats.wisdom,
  });

  const handleCancel = () => {
    setModifierVisible(!modifierVisible);
    setTempStats({
      strength: actualCharacter.stats.strength,
      dexterity: actualCharacter.stats.dexterity,
      intelligence: actualCharacter.stats.intelligence,
      charisma: actualCharacter.stats.charisma,
      constitution: actualCharacter.stats.constitution,
      wisdom: actualCharacter.stats.wisdom,
    });
  };

  const getCrewMembers = async () => {
    const querySnapshot = await getDoc(
      doc(collection(db, "campaign"), campaignId)
    );
    setActualCharacter(querySnapshot.data().crewMembers[actualCharacter.id]);
  };

  const handleValidate = async () => {
    try {
      const characterRef = await getDoc(doc(db, "campaign", campaignId));
      const { crewMembers } = characterRef.data();
      const updatedCrewMembers = [...crewMembers];

      if (updatedCrewMembers[actualCharacter.id]) {
        updatedCrewMembers[actualCharacter.id].stats = tempStats;
      }

      await updateDoc(doc(db, "campaign", campaignId), {
        crewMembers: updatedCrewMembers,
      });
    } catch (e) {
      console.error("Error adding stats to member: ", e);
    }
    getCrewMembers();
    setModifierVisible(!modifierVisible);
  };

  const plusUn = (state, choosenState) => {
    if (choosenState >= 0 && choosenState < 100) {
      setTempStats({ ...tempStats, [state]: (choosenState += 1) });
    }
  };

  const moinsUn = (state, choosenState) => {
    if (choosenState > 0 && choosenState <= 100) {
      setTempStats({ ...tempStats, [state]: (choosenState -= 1) });
    }
  };

  useEffect(() => {
    getCrewMembers();
  }, []);

  return (
    <View style={style.container}>
      <View>
        <CustomText>{actualCharacter.name}</CustomText>
        <CustomText>
          {actualCharacter.race}, {actualCharacter.genre}
        </CustomText>
        <CustomText>{actualCharacter.classe}</CustomText>
        <CustomText>LVL {actualCharacter.lvl}</CustomText>
      </View>
      <View>
        <CustomText>Statistique</CustomText>

        <View style={style.flexRow}>
          <CustomText>Force: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("strength", tempStats.strength)}
              />
              <CustomText>{tempStats.strength}</CustomText>
              <BtnAddOne
                onPress={() => plusUn("strength", tempStats.strength)}
              />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.strength}</CustomText>
          )}
        </View>
        <View style={style.flexRow}>
          <CustomText>Dexterité: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("dexterity", tempStats.dexterity)}
              />
              <CustomText>{tempStats.dexterity}</CustomText>
              <BtnAddOne
                onPress={() => plusUn("dexterity", tempStats.dexterity)}
              />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.dexterity}</CustomText>
          )}
        </View>
        <View style={style.flexRow}>
          <CustomText>Intelligence: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("intelligence", tempStats.intelligence)}
              />
              <CustomText>{tempStats.intelligence}</CustomText>
              <BtnAddOne
                onPress={() => plusUn("intelligence", tempStats.intelligence)}
              />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.intelligence}</CustomText>
          )}
        </View>
        <View style={style.flexRow}>
          <CustomText>Constitution: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("constitution", tempStats.constitution)}
              />
              <CustomText>{tempStats.constitution}</CustomText>
              <BtnAddOne
                onPress={() => plusUn("constitution", tempStats.constitution)}
              />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.constitution}</CustomText>
          )}
        </View>
        <View style={style.flexRow}>
          <CustomText>Sagesse: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("wisdom", tempStats.wisdom)}
              />
              <CustomText>{tempStats.wisdom}</CustomText>
              <BtnAddOne onPress={() => plusUn("wisdom", tempStats.wisdom)} />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.wisdom}</CustomText>
          )}
        </View>
        <View style={style.flexRow}>
          <CustomText>Charisme: </CustomText>
          {modifierVisible ? (
            <View style={style.flexRow}>
              <BtnMinusOne
                onPress={() => moinsUn("charisma", tempStats.charisma)}
              />
              <CustomText>{tempStats.charisma}</CustomText>
              <BtnAddOne
                onPress={() => plusUn("charisma", tempStats.charisma)}
              />
            </View>
          ) : (
            <CustomText>{actualCharacter.stats.charisma}</CustomText>
          )}
        </View>

        {modifierVisible ? (
          <View style={style.flexRow}>
            <TouchableOpacity
              onPress={() => {
                handleValidate();
              }}
            >
              <CustomText>Valider</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleCancel();
              }}
            >
              <CustomText>Annuler</CustomText>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setModifierVisible(!modifierVisible)}
          >
            <CustomText>Modifier</CustomText>
          </TouchableOpacity>
        )}
      </View>
      <NavBar campaignId={campaignId} />
    </View>
  );
};
