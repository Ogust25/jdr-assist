import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';
import { NavBar } from '../components/NavBar';
import { style as crewStyle} from '../style/crew';
import { style as MainStyle } from '../style/MainTheme';
import { CrewCard } from '../components/CrewCard';
import { BsPlusLg } from 'react-icons/bs';
import { db, doc, getDoc } from '../firebase/config';
import CharacterForm from '../components/CharacterForm';

export const Crew = () => {
	const route = useRoute();
	const { campaignId } = route.params;
	const [crewMembers, setCrewMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);

	const getCrewMembers = async () => {
		const campaignRef = doc(db, 'campaign', campaignId);
		const campaignSnapshot = await getDoc(campaignRef);
		const { crewMembers } = campaignSnapshot.data();

		setCrewMembers(crewMembers.map(member => ({ ...member })));
		setLoading(false);
	};

	useEffect(() => {
		getCrewMembers();
	}, []);

	return (
		<View style={crewStyle.container}>
			<CustomText style={crewStyle.crew}>Crew</CustomText>
			<View style={crewStyle.text}>
				{crewMembers.length > 0 ? (
					crewMembers.map(member => (
						<CrewCard key={member.id} campaignId={campaignId} member={member} />
					))
				) : (
					<>
						{loading ? (
							<ActivityIndicator />
						) : (
							<CustomText>Aucun membre trouvé.</CustomText>
						)}
					</>
				)}
				<TouchableOpacity
					style={MainStyle.btnPlus}
					onPress={() => setModalVisible(true)}
				>
					<BsPlusLg style={crewStyle.text} />
				</TouchableOpacity>
			</View>
			<NavBar campaignId={campaignId} />
			<CharacterForm
				visible={modalVisible}
				onClose={() => {
					getCrewMembers();
					setModalVisible(false);
				}}
				campaignId={campaignId}
			/>
		</View>
	);
};
