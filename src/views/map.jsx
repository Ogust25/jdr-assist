import React, { useState, useEffect } from 'react';
import {
	View,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	isActiveNext,
} from 'react-native';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';
import { NavBar } from '../components/NavBar';
import { style } from '../style/map';
import logo from '../../public/assets/images/logo.png';
import { db, collection, doc, getDoc } from '../firebase/config';
import { style as MainStyle } from '../style/MainTheme';
/* import timelineConnector from '../components/TimelineConnector'; */

export const Map = () => {
	const [isActive, setIsActive] = useState(true);

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
		setActiveEvents((prevActiveEvents) => {
			if (prevActiveEvents.includes(eventId)) {
			  return prevActiveEvents.filter((id) => id !== eventId);
			} else {
			  return [...prevActiveEvents, eventId];
			}
		  });
		  setIsActive((prevIsActive) => !prevIsActive);
		};
		

	//Ajout des évenements :
	const events = [
		{
			id: 1,
			eventId: '1',
			title: 'Événement 1',
			description: 'Arrivée à la porte de Baldur',
			isActive: false,
		},
		{
			id: 2,
			eventId: '2',
			title: 'Événement 2',
			description: 'Parler à la garde',
			isActive: false,
		},
		{
			id: '2.1',
			eventId: '3',
			title: 'Événement 2.1',
			description: 'Parler à des personnes de la foule',
			isActive: false,
		},
		{
			id: 3,
			eventId: '4',
			title: 'Événement 3',
			description: 'Explorer la place du marché',
			isActive: false,
		},
		{
			id: 4,
			eventId: '5',
			title: 'Événement 4',
			description: 'Trouver un indice dans la taverne',
			isActive: false,
		},
		{
			id: 5,
			eventId: '6',
			title: 'Événement 5',
			description: 'Rencontrer un mystérieux étranger',
			isActive: false,
		},
		{
			id: 6,
			eventId: '7',
			title: 'Événement 6',
			description: 'Résoudre une énigme du temple',
			isActive: false,
		},
		{
			id: 7,
			eventId: '8',
			title: 'Événement 7',
			description: 'Combattre des bandits dans les ruelles',
			isActive: false,
		},
		{
			id: 8,
			eventId: '9',
			title: 'Événement 8',
			description: 'Négocier avec un marchand',
			isActive: false,
		},
		{
			id: 9,
			eventId: '10',
			title: 'Événement 9',
			description: 'Trouver un trésor caché',
			isActive: false,
		},
		{
			id: 10,
			eventId: '11',
			title: 'Événement 10',
			description: 'Assister à un spectacle de magie',
			isActive: false,
		},
		{
			id: 11,
			eventId: '12',
			title: 'Événement 11',
			description: 'Rencontrer le chef des voleurs',
			isActive: false,
		},
		{
			id: '11.1',
			eventId: '13',
			title: 'Événement 11.1',
			description: 'Découvrir un réseau de contrebande',
			isActive: false,
			parentId: 11,
		},
		{
			id: '11.2',
			eventId: '14',
			title: 'Événement 11.2',
			description: 'Infiltrer le repaire des voleurs',
			isActive: false,
			parentId: 11,
		},
		{
			id: 12,
			eventId: '15',
			title: 'Événement 12',
			description: 'Aider un paysan en détresse',
			isActive: false,
		},
		{
			id: '12.1',
			eventId: '16',
			title: 'Événement 12.1',
			description: 'Déjouer un complot dans la cour royale',
			isActive: false,
			parentId: 12,
		},
		{
			id: '12.2',
			eventId: '17',
			title: 'Événement 12.2',
			description: "Participer à un tournoi d'archerie",
			isActive: false,
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
									/* onClick={toggleActive} */
									onPress={() => {
										toggleEventActivation(event.isActive);
										console.log(event.isActive);
									}}
									onLongPress={() =>
										console.log(
											"Détails de l'événement",
											`Texte de l'événement : ${event.description}`,
										)
									}
								>
									<View
										style={[
											style.timelineEventDot,
											activeEvents.includes(event.id) ? style.activeDot : null,
										]}
									/>
									{/* {event.parentId && (
								 	<View
										style={[
											style.timelineConnector,
											{
												display: isActiveNext ? 'flex' : 'none',
											},
										]}
									/> 
								)} */}
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
