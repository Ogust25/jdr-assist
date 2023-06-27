import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CustomText } from '../components/CustomText';
import { style as MainTheme } from '../style/MainTheme';
import { style as AboutStyle } from '../style/about';

export const About = ({ navigation }) => {
	function goHome() {
		navigation.navigate('Home');
	}

	return (

		<View style={MainTheme.mainContainer}>
			<CustomText style={MainTheme.title}>About</CustomText>
			<CustomText style={AboutStyle.presentation}>Créé par</CustomText>
			<CustomText style={AboutStyle.presentation}>August Gros et Elyès Moumit</CustomText>
			<CustomText style={MainTheme.text}>
				Projet de fin d'année de développeur concepteur d'applications.
				Application qui a pour but d'assister un maître du jeu dans une partie
				de Donjon et Dragon : La porte de Baldur.
			</CustomText>
			<TouchableOpacity onPress={goHome}>
				<CustomText style={MainTheme.back}>Back</CustomText>
			</TouchableOpacity>
		</View>
	);
};