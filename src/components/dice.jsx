import { View, TouchableOpacity, Image } from 'react-native';
import { CustomText } from './CustomText';
import { useNavigation } from '@react-navigation/native';
import { style as MainStyle } from '../style/MainTheme';
import { style } from '../style/modalbox';
import React, { useState } from 'react';

export const ModalContent1 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 5); // Génère un nombre aléatoire entre 0 et 4
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D4</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
export const ModalContent2 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 7); // Génère un nombre aléatoire entre 0 et 6
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D6</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
export const ModalContent3 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 9); // Génère un nombre aléatoire entre 0 et 8
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D8</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
export const ModalContent4 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 11); // Génère un nombre aléatoire entre 0 et 10
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D10</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
export const ModalContent5 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 13); // Génère un nombre aléatoire entre 0 et 12
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D12</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
export const ModalContent6 = ({ closeModal }) => {
	const [number, setNumber] = useState(0);

	const handleButtonClick = () => {
		const randomNumber = Math.floor(Math.random() * 21); // Génère un nombre aléatoire entre 0 et 200
		setNumber(randomNumber);
	};
	return (
		<View style={style.modalContainer}>
			<TouchableOpacity style={style.closeButton} onPress={closeModal}>
				<CustomText style={style.closeButtonLabel}>X</CustomText>
			</TouchableOpacity>
			<View style={style.modalContent}>
				<CustomText style={style.textInput}>Jet de D20</CustomText>
				<TouchableOpacity
					style={style.validateButton}
					onPress={handleButtonClick}
				>
					<CustomText style={style.validateButtonLabel}>
						Jetter le dé
					</CustomText>
				</TouchableOpacity>
				<CustomText style={style.dices}>{number}</CustomText>
			</View>
		</View>
	);
};
