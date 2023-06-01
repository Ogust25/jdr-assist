import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';
import { NavBar } from '../components/NavBar';
import { style } from '../style/map';
import logo from '../../public/assets/images/logo.png';
import { db, collection, doc, getDoc } from '../firebase/config';

export const Map = () => {
	const route = useRoute();
	const { campaignId } = route.params;
	const [campaign, setCampaign] = useState({ name: '' });

	const getCampaign = async () => {
		const querySnapshot = await getDoc(
			doc(collection(db, 'campaign'), campaignId),
		);
		setCampaign(querySnapshot.data());
	};

	useEffect(() => {
		getCampaign();
	}, []);

	return (
		<View style={style.container}>
			<CustomText>Menu Campagnes {campaign.name}</CustomText>
			<Image source={logo} style={style.img} />
			<NavBar campaignId={campaignId} />
		</View>
	);
};
