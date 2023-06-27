import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';
import { NavBar } from '../components/NavBar';
import { style as style } from '../style/characterPage';
import { style as MainStyle } from '../style/MainTheme';
import {
	db,
	collection,
	addDoc,
	doc,
	getDoc,
	updateDoc,
} from '../firebase/config';
import { style as characterPageStyle } from '../style/characterPage';
import { BtnAddOne } from '../components/BtnAddOne';
import { BtnMinusOne } from '../components/btnMinusOne';

export const CharacterPage = () => {
	const route = useRoute();
	const { campaignId, character } = route.params;
	const [modifierVisible, setModifierVisible] = useState(false);
	const [actualCharacter, setActualCharacter] = useState(character);
	const [tempStats, setTempStats] = useState({
		strength: actualCharacter.stats.strength,
		dexterity: actualCharacter.stats.dexterity,
		intelligence: actualCharacter.stats.intelligence,
		charisma: actualCharacter.stats.charisma,
		constitution: actualCharacter.stats.constitution,
		wisdom: actualCharacter.stats.wisdom,
	});

	const handleCancel = () => {
		setModifierVisible(!modifierVisible);
		setTempStats({
			strength: actualCharacter.stats.strength,
			dexterity: actualCharacter.stats.dexterity,
			intelligence: actualCharacter.stats.intelligence,
			charisma: actualCharacter.stats.charisma,
			constitution: actualCharacter.stats.constitution,
			wisdom: actualCharacter.stats.wisdom,
		});
	};

	const getCrewMembers = async () => {
		const querySnapshot = await getDoc(
			doc(collection(db, 'campaign'), campaignId),
		);
		setActualCharacter(querySnapshot.data().crewMembers[actualCharacter.id]);
	};

	const handleValidate = async () => {
		try {
			const characterRef = await getDoc(doc(db, 'campaign', campaignId));
			const { crewMembers } = characterRef.data();
			const updatedCrewMembers = [...crewMembers];

			if (updatedCrewMembers[actualCharacter.id]) {
				updatedCrewMembers[actualCharacter.id].stats = tempStats;
			}

			await updateDoc(doc(db, 'campaign', campaignId), {
				crewMembers: updatedCrewMembers,
			});
		} catch (e) {
			console.error('Error adding stats to member: ', e);
		}
		getCrewMembers();
		setModifierVisible(!modifierVisible);
	};

	const plusUn = (state, choosenState) => {
		if (choosenState >= 0 && choosenState < 100) {
			setTempStats({ ...tempStats, [state]: (choosenState += 1) });
		}
	};

	const moinsUn = (state, choosenState) => {
		if (choosenState > 0 && choosenState <= 100) {
			setTempStats({ ...tempStats, [state]: (choosenState -= 1) });
		}
	};

	useEffect(() => {
		getCrewMembers();
	}, []);

	return (
		<View style={MainStyle.mainContainer}>
			<View style={characterPageStyle.container}>
				<CustomText style={characterPageStyle.identifiants}>
					{actualCharacter.name}
				</CustomText>
				<CustomText style={characterPageStyle.identifiants}>
					{actualCharacter.race}, {actualCharacter.genre}
				</CustomText>
				<CustomText style={characterPageStyle.identifiants}>
					{actualCharacter.classe}
				</CustomText>
				<CustomText style={characterPageStyle.identifiants}>
					LVL {actualCharacter.lvl}
				</CustomText>
			</View>
			<View style={MainStyle.StatsGlobales}>
				<CustomText style={MainStyle.title}>Statistique</CustomText>

				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>Force: </CustomText>
					{modifierVisible ? (
						<View>
							<BtnMinusOne
								onPress={() => moinsUn('strength', tempStats.strength)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.strength}
							</CustomText>
							<BtnAddOne
								onPress={() => plusUn('strength', tempStats.strength)}
							/>
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.strength}
						</CustomText>
					)}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>Dexterité: </CustomText>
					{modifierVisible ? (
						<View style={style.flexRow}>
							<BtnMinusOne
								onPress={() => moinsUn('dexterity', tempStats.dexterity)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.dexterity}
							</CustomText>
							<BtnAddOne
								onPress={() => plusUn('dexterity', tempStats.dexterity)}
							/>
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.dexterity}
						</CustomText>
					)}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>
						Intelligence:{' '}
					</CustomText>
					{modifierVisible ? (
						<View>
							<BtnMinusOne
								onPress={() => moinsUn('intelligence', tempStats.intelligence)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.intelligence}
							</CustomText>
							<BtnAddOne
								onPress={() => plusUn('intelligence', tempStats.intelligence)}
							/>
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.intelligence}
						</CustomText>
					)}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>
						Constitution:{' '}
					</CustomText>
					{modifierVisible ? (
						<View>
							<BtnMinusOne
								onPress={() => moinsUn('constitution', tempStats.constitution)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.constitution}
							</CustomText>
							<BtnAddOne
								onPress={() => plusUn('constitution', tempStats.constitution)}
							/>
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.constitution}
						</CustomText>
					)}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>Sagesse: </CustomText>
					{modifierVisible ? (
						<View>
							<BtnMinusOne
								onPress={() => moinsUn('wisdom', tempStats.wisdom)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.wisdom}
							</CustomText>
							<BtnAddOne onPress={() => plusUn('wisdom', tempStats.wisdom)} />
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.wisdom}
						</CustomText>
					)}
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomText style={characterPageStyle.stats}>Charisme: </CustomText>
					{modifierVisible ? (
						<View style={style.flexRow}>
							<BtnMinusOne
								onPress={() => moinsUn('charisma', tempStats.charisma)}
							/>
							<CustomText style={characterPageStyle.stats}>
								{tempStats.charisma}
							</CustomText>
							<BtnAddOne
								onPress={() => plusUn('charisma', tempStats.charisma)}
							/>
						</View>
					) : (
						<CustomText style={characterPageStyle.stats}>
							{actualCharacter.stats.charisma}
						</CustomText>
					)}
				</View>

				{modifierVisible ? (
					<View>
						<TouchableOpacity
							onPress={() => {
								handleValidate();
							}}
						>
							<CustomText style={MainStyle.btn}>Valider</CustomText>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								handleCancel();
							}}
						>
							<CustomText style={MainStyle.btn}>Annuler</CustomText>
						</TouchableOpacity>
					</View>
				) : (
					<TouchableOpacity
						onPress={() => setModifierVisible(!modifierVisible)}
					>
						<CustomText style={MainStyle.btn}>Modifier</CustomText>
					</TouchableOpacity>
				)}
			</View>
			<NavBar campaignId={campaignId} />
		</View>
	);
};
