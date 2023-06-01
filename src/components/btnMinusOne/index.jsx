import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "../CustomText";
export const BtnMinusOne = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText>-</CustomText>
    </TouchableOpacity>
  );
};
