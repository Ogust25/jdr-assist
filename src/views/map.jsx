import React, { useState, useEffect } from 'react';
import {
	View,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	isActiveNext
} from 'react-native';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';
import { NavBar } from '../components/NavBar';
import { style } from '../style/map';
import logo from '../../public/assets/images/logo.png';
import { db, collection, doc, getDoc } from '../firebase/config';
import { style as MainStyle } from '../style/MainTheme';

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

	//Gestion de la carte
	const [activeEvents, setActiveEvents] = useState([]);

	const toggleEventActivation = eventId => {
		if (activeEvents.includes(eventId)) {
			setActiveEvents(activeEvents.filter(id => id !== eventId));
		} else {
			setActiveEvents([...activeEvents, eventId]);
		}
	};

	//Ajout des évenements :
	const events = [
		{
			id: 1,
			title: 'Événement 1',
			description: 'Arrivée à la porte de Baldur',
			isActive: false,
		},
		{
			id: 2,
			title: 'Événement 2',
			description: 'Parler à la garde',
			isActive: true,
		},
		{
			id: '2.1',
			title: 'Événement 2.1',
			description: 'Parler à des personnes de la foule',
			isActive: true,
		},
		{
			id: 3,
			title: 'Événement 3',
			description: 'Explorer la place du marché',
			isActive: true,
		},
		{
			id: 4,
			title: 'Événement 4',
			description: 'Trouver un indice dans la taverne',
			isActive: false,
		},
		{
			id: 5,
			title: 'Événement 5',
			description: 'Rencontrer un mystérieux étranger',
			isActive: true,
		},
		{
			id: 6,
			title: 'Événement 6',
			description: 'Résoudre une énigme du temple',
			isActive: true,
		},
		{
			id: 7,
			title: 'Événement 7',
			description: 'Combattre des bandits dans les ruelles',
			isActive: true,
		},
		{
			id: 8,
			title: 'Événement 8',
			description: 'Négocier avec un marchand',
			isActive: false,
		},
		{
			id: 9,
			title: 'Événement 9',
			description: 'Trouver un trésor caché',
			isActive: true,
		},
		{
			id: 10,
			title: 'Événement 10',
			description: 'Assister à un spectacle de magie',
			isActive: true,
		},
		{
			id: 11,
			title: 'Événement 11',
			description: 'Rencontrer le chef des voleurs',
			isActive: true,
		},
		{
			id: '11.1',
			title: 'Événement 11.1',
			description: 'Découvrir un réseau de contrebande',
			isActive: true,
			parentId: 11,
		},
		{
			id: '11.2',
			title: 'Événement 11.2',
			description: 'Infiltrer le repaire des voleurs',
			isActive: false,
			parentId: 11,
		},
		{
			id: 12,
			title: 'Événement 12',
			description: 'Aider un paysan en détresse',
			isActive: true,
		},
		{
			id: '12.1',
			title: 'Événement 12.1',
			description: 'Déjouer un complot dans la cour royale',
			isActive: true,
			parentId: 12,
		},
		{
			id: '12.2',
			title: 'Événement 12.2',
			description: "Participer à un tournoi d'archerie",
			isActive: true,
			parentId: 12,
		},
	];

	return (
		<View style={style.container}>
			<CustomText style={MainStyle.title}>
				Menu Campagnes {campaign.name}
			</CustomText>
			<View style={style.timelineContainer}>
				<ScrollView style={{ flex: 1 }}>
					<View style={{ flexDirection: 'column' }}>
						{events.map(event => (
							<React.Fragment key={event.id}>
								{event.parentId && (
									<View
										style={[
											style.timelineConnector,
											{
/* 												display: isActiveNext ? 'flex' : 'none',
 */												height:
													event.id.endsWith('.2') || event.id.endsWith('.3')
														? 35
														: 50,
												top: 7.5,
											},
										]}
									/>
								)}
								<TouchableOpacity
									key={event.id}
									style={[
										event.id % 1 === 0 ? style.mainEvent : style.subEvent,
										activeEvents.includes(event.id)
											? style.mainEventActive
											: null,
										activeEvents.includes(event.id) && event.id % 1 !== 0
											? style.subEventActive
											: null,
									]}
									onPress={() => toggleEventActivation(event.id)}
									onLongPress={() =>
										console.log(`Texte de l'événement : ${event.title}`)
									}
								>
									<View
										style={[
											style.timelineEventDot,
											activeEvents.includes(event.id) ? style.activeDot : null,
										]}
									/>
								</TouchableOpacity>
							</React.Fragment>
						))}
					</View>
				</ScrollView>
			</View>
			<NavBar campaignId={campaignId} />
		</View>
	);
};
