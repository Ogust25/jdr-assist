import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fakeBDD from "../fakeBDD.json";
import { BsPlusLg } from "react-icons/bs";
import { style } from "../style/campaigns";

export const Campaigns = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleSubmit = () => {
    fakeBDD.push({
      id: Math.random(),
      name: textValue,
      crewMembers: [],
    });
    setModalVisible(false);
  };

  return (
    <View>
      <Text>Mes Campagnes</Text>
      {fakeBDD &&
        fakeBDD.map((camagne) => {
          return (
            <TouchableOpacity
              key={camagne.id}
              onPress={() =>
                navigation.navigate("Map", { campaignId: camagne.id })
              }
            >
              <Text>{camagne.name}</Text>
            </TouchableOpacity>
          );
        })}
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
            />
            <Button title="Valider" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
