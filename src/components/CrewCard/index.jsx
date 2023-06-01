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
			case 'elfeMasculin':
				imgProfil = require('../../../public/assets/images/ElfeMasculin.jpg');
				break;
			case 'elfeFeminin':
				imgProfil = require('../../../public/assets/images/ElfeFeminin.jpg');
				break;
			case 'humainMasculin':
				imgProfil = require('../../../public/assets/images/humainMasculin.jpg');
				break;
			case 'humainFeminin':
				imgProfil = require('../../../public/assets/images/humainFeminin.jpg');
				break;
			case 'GithyankiFeminin':
				imgProfil = require('../../../public/assets/images/GithyankiFeminin.jpg');
				break;
			case 'GithyankiMasculin':
				imgProfil = require('../../../public/assets/images/GithyankiFeminin.jpg');
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
				<View>
					<CustomText>{member.name}</CustomText>
					<CustomText>
						{member.race}, {member.genre}
					</CustomText>
				</View>
			</TouchableOpacity>
		</View>
	);
};
