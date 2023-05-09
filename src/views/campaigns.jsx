import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { CustomText } from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { BsPlusLg } from "react-icons/bs";
import { style } from "../style/campaigns";
import { db, collection, addDoc, getDocs } from "../firebase/config";

export const Campaigns = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = async () => {
    try {
      const docRef = await addDoc(collection(db, "campaign"), {
        name: textValue,
        crewMembers: [],
      });
      setTextValue("");
    } catch (e) {
      console.error("error: " + e);
    }
    getCampaign();
    setModalVisible(false);
  };

  const getCampaign = async () => {
    const querySnapshot = await getDocs(collection(db, "campaign"));
    setCampaigns(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getCampaign();
  }, []);

  return (
    <View>
      <CustomText>Mes Campagnes</CustomText>
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => {
          return (
            <TouchableOpacity
              key={campaign.id}
              onPress={() =>
                navigation.navigate("Map", { campaignId: campaign.id })
              }
            >
              <CustomText>{campaign.name}</CustomText>
            </TouchableOpacity>
          );
        })
      ) : (
        <ActivityIndicator />
      )}

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <BsPlusLg />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <TextInput
              style={style.textInput}
              onChangeText={setTextValue}
              placeholder="Nom de la campagne"
              value={textValue}
              onSubmitEditing={addCampaign}
            />
            <Button title="Valider" onPress={addCampaign} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
