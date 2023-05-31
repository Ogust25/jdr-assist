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
import { useNavigation } from '@react-navigation/native';
import { BsPlusLg } from 'react-icons/bs';
import { style } from '../style/campaigns';
import { db, collection, addDoc, getDocs } from '../firebase/config';

export const Campaigns = () => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	const [textValue, setTextValue] = useState('');
	const [campaigns, setCampaigns] = useState([]);
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
	};

	useEffect(() => {
		getCampaign();
	}, []);

	return (
		<View style={style.mainContainer}>
			<View style={style.titleContainer}>
				<CustomText style={style.text}>MES</CustomText>
				<CustomText style={style.text}>CAMPAGNES</CustomText>
			</View>
			<View style={style.campaignsContainer}>
				{campaigns.length > 0 ? (
					campaigns.map(campaign => {
						return (
							<TouchableOpacity
								key={campaign.id}
								style={style.btnCampaign}
								onPress={() =>
									navigation.navigate('Map', { campaignId: campaign.id })
								}
							>
								<CustomText style={style.text}>{campaign.name}</CustomText>
							</TouchableOpacity>
						);
					})
				) : (
					<ActivityIndicator />
				)}
			</View>

			<TouchableOpacity
				style={style.btnPlus}
				onPress={() => setModalVisible(true)}
			>
				<BsPlusLg style={style.text} />
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<View style={style.modalContainer}>
					<View style={style.modalContent}>
						<TouchableOpacity onPress={() => setModalVisible(false)}>
							<Text>X</Text>
						</TouchableOpacity>
						<TextInput
							style={style.textInput}
							onChangeText={setTextValue}
							placeholder="Nom de la campagne"
							value={textValue}
							onSubmitEditing={addCampaign}
						/>
						{errorText ? <Text style={style.error}>{errorText}</Text> : null}
						<Button title="Valider" onPress={addCampaign} />
					</View>
				</View>
			</Modal>
		</View>
	);
};
