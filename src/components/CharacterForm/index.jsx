import React, { useState } from 'react';
import { View, Modal, TextInput, Picker, Button, Text } from 'react-native';
import { db, getDoc, doc, updateDoc } from '../../firebase/config';
import { TouchableOpacity } from 'react-native-web';
import { CustomText } from '../CustomText';
import { style as Modalbox } from '../../style/modalbox';

const CharacterForm = ({ visible, onClose, campaignId }) => {
	const [name, setName] = useState('');
	const [stats, setStats] = useState({
		strength: 0,
		dexterity: 0,
		intelligence: 0,
		charisma: 0,
		constitution: 0,
		wisdom: 0,
	});
	const [gender, setGender] = useState('');
	const [selectedClass, setSelectedClass] = useState('');
	const [selectedRace, setSelectedRace] = useState('');
	const [errorText, setErrorText] = useState('');

	const isTextEmpty = text => {
		return text.trim().length === 0;
	};

	const hasSpecialCharacters = text => {
		const regex = /[!@#$%^&*(),.?":{}|<>]/g;
		return regex.test(text);
	};

	const addMember = async () => {
		if (isTextEmpty(name)) {
			setErrorText('Le nom ne peut pas être vide');
			return;
		}

		if (hasSpecialCharacters(name)) {
			setErrorText('Le nom ne peut pas contenir de caractères spéciaux');
			return;
		}

		if (gender === '') {
			setErrorText('Veuillez sélectionner un genre');
			return;
		}

		if (selectedRace === '') {
			setErrorText('Veuillez sélectionner une race');
			return;
		}

		if (selectedClass === '') {
			setErrorText('Veuillez sélectionner une classe');
			return;
		}

		try {
			const docRef = await getDoc(doc(db, 'campaign', campaignId));
			if (docRef.exists()) {
				const { crewMembers } = docRef.data();
				const newMember = {
					name,
					classe: selectedClass,
					gender,
					race: selectedRace,
					stats,
					image: selectedRace + gender,
					lvl: 0,
					id: crewMembers.length,
				};
				const updatedCrewMembers = [...crewMembers, newMember];
				await updateDoc(doc(db, 'campaign', campaignId), {
					crewMembers: updatedCrewMembers,
				});
				// console.log("Member added to campaign: ", newMember);
			} else {
				console.log('Campaign document does not exist');
			}
		} catch (e) {
			console.error('Error adding member to campaign: ', e);
		}

		setErrorText('');
		onClose();
	};

	return (
		<Modal visible={visible} onRequestClose={onClose}>
			<View style={Modalbox.modalContent}>
				<TouchableOpacity onPress={onClose}>
					<CustomText style={Modalbox.closeButtonLabel}>X</CustomText>
				</TouchableOpacity>

				<TextInput
					style={Modalbox.textInput}
					placeholder="Nom"
					value={name}
					onChangeText={setName}
				/>
				{errorText !== '' && <CustomText>{errorText}</CustomText>}
				<Picker
					style={Modalbox.pickerContainer}
					selectedValue={gender}
					onValueChange={itemValue => setGender(itemValue)}
				>
					<Picker.Item style={Modalbox.picker} label="Genre" value="" />
					<Picker.Item label="Masculin" value="Masculin" />
					<Picker.Item label="Féminin" value="Feminin" />
				</Picker>
				<Picker
					style={Modalbox.pickerContainer}
					selectedValue={selectedRace}
					onValueChange={itemValue => setSelectedRace(itemValue)}
				>
					<Picker.Item label="Race" value="" />
					<Picker.Item label="Humain" value="Humain" />
					<Picker.Item label="Elfe" value="Elfe" />
					<Picker.Item label="Elfe Noir" value="ElfeNoir" />
					<Picker.Item label="Demi-Elfe" value="DemiElfe" />
					<Picker.Item label="Nain" value="Nain" />
					<Picker.Item label="Gnome" value="Gnome" />
					<Picker.Item label="Githyanki" value="Githyanki" />
				</Picker>
				<Picker
					style={Modalbox.pickerContainer}
					selectedValue={selectedClass}
					onValueChange={itemValue => setSelectedClass(itemValue)}
				>
					<Picker.Item label="Classe" value="" />
					<Picker.Item label="Guerrier" value="Guerrier" />
					<Picker.Item label="Mage" value="Mage" />
					<Picker.Item label="Clerc" value="Clerc" />
					<Picker.Item label="Rôdeur" value="Rôdeur" />
					<Picker.Item label="Roublard" value="Roublard" />
					<Picker.Item label="Sorcier" value="Sorcier" />
					<Picker.Item label="Barbare" value="Barbare" />
					<Picker.Item label="Barde" value="Barde" />
					<Picker.Item label="Druide" value="Druide" />
					<Picker.Item label="Démoniste" value="Démoniste" />
				</Picker>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Force :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Force"
						value={stats.strength.toString()}
						onChangeText={value =>
							setStats({ ...stats, strength: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Dexterite :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Dexterite"
						value={stats.dexterity.toString()}
						onChangeText={value =>
							setStats({ ...stats, dexterity: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Constitution :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Constitution"
						value={stats.constitution.toString()}
						onChangeText={value =>
							setStats({ ...stats, constitution: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Intelligence :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Intelligence"
						value={stats.intelligence.toString()}
						onChangeText={value =>
							setStats({ ...stats, intelligence: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Sagesse :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Sagesse"
						value={stats.wisdom.toString()}
						onChangeText={value =>
							setStats({ ...stats, wisdom: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={Modalbox.textInput}>Charisme :</CustomText>
					<TextInput
						style={Modalbox.textInput}
						placeholder="Charisme"
						value={stats.charisma.toString()}
						onChangeText={value =>
							setStats({ ...stats, charisma: parseInt(value) || 0 })
						}
						keyboardType="numeric"
					/>
				</View>
				<Button title="Valider" onPress={addMember} />
			</View>
		</Modal>
	);
};
export default CharacterForm;
