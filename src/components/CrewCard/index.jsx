import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { CustomText } from '../CustomText';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';

export const CrewCard = ({ member, campaignId }) => {
	const navigation = useNavigation();

	const imgSelector = () => {
		let imgProfil = '';
		switch (member.image) {
			case 'GnomeMasculin':
				imgProfil = require('../../../public/assets/images/GnomeMasculin.jpg');
				break;
			case 'GnomeFeminin':
				imgProfil = require('../../../public/assets/images/GnomeFeminin.jpg');
				break;
			case 'ElfeMasculin':
				imgProfil = require('../../../public/assets/images/ElfeMasculin.jpg');
				break;
			case 'ElfeFeminin':
				imgProfil = require('../../../public/assets/images/ElfeFeminin.jpg');
				break;
			case 'HumainMasculin':
				imgProfil = require('../../../public/assets/images/HumainMasculin.jpg');
				break;
			case 'HumainFeminin':
				imgProfil = require('../../../public/assets/images/HumainFeminin.jpg');
				break;
			case 'GithyankiFeminin':
				imgProfil = require('../../../public/assets/images/GithyankiFeminin.jpg');
				break;
			case 'GithyankiMasculin':
				imgProfil = require('../../../public/assets/images/GithyankiMasculin.jpg');
				break;
			case 'ElfeNoirMasculin':
				imgProfil = require('../../../public/assets/images/ElfeNoirMasculin.jpg');
				break;
			case 'ElfeNoirFeminin':
				imgProfil = require('../../../public/assets/images/ElfeNoirFeminin.jpg');
				break;
			case 'DemiElfeFeminin':
				imgProfil = require('../../../public/assets/images/DemiElfeFeminin.jpg');
				break;
			case 'DemiElfeMasculin':
				imgProfil = require('../../../public/assets/images/DemiElfeMasculin.jpg');
				break;
			case 'NainMasculin':
				imgProfil = require('../../../public/assets/images/NainMasculin.jpg');
				break;
			case 'NainFeminin':
				imgProfil = require('../../../public/assets/images/NainFeminin.jpg');
				break;
		}
		return imgProfil;
	};

	return (
		<View>
			<TouchableOpacity
				style={style.container}
				onPress={() =>
					navigation.navigate('CharacterPage', {
						campaignId: campaignId,
						character: member,
					})
				}
			>
				<Image source={imgSelector()} style={style.img} />
				<View style={style.blocPersonnage}>
					<CustomText style={style.text}>{member.name}</CustomText>
					<CustomText style={style.text}>
						{member.race}, {member.genre}
					</CustomText>
				</View>
			</TouchableOpacity>
		</View>
	);
};
