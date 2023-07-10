import React from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "../CustomText";
import { characterPageStyle } from "../../style/characterPage";
export const BtnMinusOne = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText  style={characterPageStyle.statsChange}>-</CustomText>
    </TouchableOpacity>
  );
};
