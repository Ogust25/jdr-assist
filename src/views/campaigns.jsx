import React, { useState, useEffect } from 'react';
import {
	View,
	TouchableOpacity,
	Modal,
	TextInput,
	Text,
	Button,
	ActivityIndicator,
} from 'react-native';
import { CustomText } from '../components/CustomText';
import { style as MainStyle } from '../style/MainTheme';
import { useNavigation } from '@react-navigation/native';
import { BsPlusLg } from 'react-icons/bs';
import { style as campaignStyle } from '../style/campaigns';
import { db, collection, addDoc, getDocs } from '../firebase/config';
import { style as Modalbox } from '../style/modalbox';
export const Campaigns = () => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	const [textValue, setTextValue] = useState('');
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorText, setErrorText] = useState('');

	const isTextEmpty = text => {
		return text.trim().length === 0;
	};

	const filterSpecialCharacters = text => {
		return text.replace(/[^a-zA-Z0-9 ]/g, '');
	};

	const addCampaign = async () => {
		if (isTextEmpty(textValue)) {
			setErrorText('Le nom de la campagne ne peut pas être vide');
			return;
		}

		const filteredText = filterSpecialCharacters(textValue);

		try {
			const docRef = await addDoc(collection(db, 'campaign'), {
				name: filteredText,
				crewMembers: [],
			});
			setTextValue('');
			setErrorText('');
		} catch (e) {
			console.error('error: ' + e);
		}

		getCampaign();
		setModalVisible(false);
	};

	const getCampaign = async () => {
		const querySnapshot = await getDocs(collection(db, 'campaign'));
		setCampaigns(
			querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })),
		);
		setLoading(false);
	};

	
	useEffect(() => {
		getCampaign();
	}, []);

	return (
		<View style={campaignStyle.mainContainer}>
			<View style={campaignStyle.titleContainer}>
				<CustomText style={campaignStyle.text}>MES</CustomText>
				<CustomText style={campaignStyle.text}>CAMPAGNES</CustomText>
			</View>
			<View style={campaignStyle.campaignsContainer}>
				{campaigns.length > 0 ? (
					campaigns.map(campaign => (
						<TouchableOpacity
							key={campaign.id}
							style={campaignStyle.btnCampaign}
							onPress={() =>
								navigation.navigate('Map', { campaignId: campaign.id })
							}
						>
							<CustomText style={campaignStyle.text}>
								{campaign.name}
							</CustomText>
						</TouchableOpacity>
					))
				) : (
					<>
						{loading ? (
							<ActivityIndicator />
						) : (
							<Text>Aucune campagne trouvée.</Text>
						)}
					</>
				)}
			</View>

			<TouchableOpacity
				style={MainStyle.btnPlus}
				onPress={() => setModalVisible(true)}
			>
				<BsPlusLg style={campaignStyle.text} />
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<View style={Modalbox.modalContainer}>
					<View style={Modalbox.modalContent}>
						<TouchableOpacity onPress={() => setModalVisible(false)}>
							<Text style={Modalbox.closeButtonLabel}>X</Text>
						</TouchableOpacity>
						<TextInput
							style={Modalbox.textInput}
							onChangeText={setTextValue}
							placeholder="Nom de la campagne"
							value={textValue}
							onSubmitEditing={addCampaign}
						/>
						{errorText ? (
							<Text style={campaignStyle.error}>{errorText}</Text>
						) : null}
						<Button
							title="Valider"
							onPress={addCampaign}
							buttonStyle={Modalbox.validateButton}
							titleStyle={Modalbox.validateButtonLabel}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};
