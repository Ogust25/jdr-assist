import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CustomText } from '../components/CustomText';
import { style } from '../style/MainTheme.jsx';

export const About = ({ navigation }) => {
	function goHome() {
		navigation.navigate('Home');
	}

	return (
		<View style={style.mainContainer}>
			<CustomText style={style.title}>About</CustomText>
      <CustomText style={style.presentation}>Créé par</CustomText>
      <CustomText style={style.presentation}>August Gros et Elyès Moumit</CustomText>
			<CustomText style={style.text}>
				Projet de fin d'année de développeur concepteur d'applications.
				Application qui a pour but d'assister un maître du jeu dans une partie
				de Donjon et Dragon : La porte de Baldur.
			</CustomText>
			<TouchableOpacity onPress={goHome}>
				<CustomText style={style.back}>Back</CustomText>
			</TouchableOpacity>
		</View>
	);
};
