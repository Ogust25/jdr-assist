import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "../CustomText";
export const BtnAddOne = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText>+</CustomText>
    </TouchableOpacity>
  );
};
