import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import {styles} from "../style/campagne"

export const Campaign = () => {
  const navigation = useNavigation();

  const campaigns = [{id: 1, name: "Camagne 1"}, {id: 2, name: "Camagne 2"}, {id: 3, name: "Camagne 3"}]

  const goMap = (campaignId) => {
    navigation.navigate('Map', { campaignId: campaignId });
  }

  return (
    <View>
      <Text>Mes Campagnes</Text>
      {campaigns && campaigns.map((camagne)=>{
        return(
          <TouchableOpacity key={camagne.id} onPress={() => goMap(campaigns.id)}>
            <Text>{camagne.name}</Text>
          </TouchableOpacity>
        )
      })}
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
