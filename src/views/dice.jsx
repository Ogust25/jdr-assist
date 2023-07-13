import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { style } from '../style/modalbox';
import { style as MainStyle } from '../style/MainTheme';
import { CustomText } from '../components/CustomText';
import React, { useState } from 'react';
import {
	ModalContent1,
	ModalContent2,
	ModalContent3,
	ModalContent4,
	ModalContent5,
	ModalContent6,
} from '../components/dice.jsx';

export const DicePage = () => {
	const navigation = useNavigation();
	const [modalVisible1, setModalVisible1] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
	const [modalVisible3, setModalVisible3] = useState(false);
	const [modalVisible4, setModalVisible4] = useState(false);
	const [modalVisible5, setModalVisible5] = useState(false);
	const [modalVisible6, setModalVisible6] = useState(false);

	const openModal1 = () => {
		setModalVisible1(true);
	};
	const openModal2 = () => {
		setModalVisible2(true);
	};
	const openModal3 = () => {
		setModalVisible3(true);
	};
	const openModal4 = () => {
		setModalVisible4(true);
	};
	const openModal5 = () => {
		setModalVisible5(true);
	};
	const openModal6 = () => {
		setModalVisible6(true);
	};

	const closeModal = () => {
		setModalVisible1(false);
		setModalVisible2(false);
		setModalVisible3(false);
		setModalVisible4(false);
		setModalVisible5(false);
		setModalVisible6(false);
	};

	return (
		<View style={style.modalContainer}>
			<View style={style.modalContent}>
				<CustomText style={MainStyle.title}>Jets de dé</CustomText>

				<TouchableOpacity style={style.validateButton} onPress={openModal1}>
					<CustomText style={style.validateButtonLabel}>D4</CustomText>
				</TouchableOpacity>
				<Modal visible={modalVisible1} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent1 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<TouchableOpacity style={style.validateButton} onPress={openModal2}>
					<CustomText style={style.validateButtonLabel}>D6</CustomText>
				</TouchableOpacity>
				<Modal visible={modalVisible2} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent2 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<TouchableOpacity style={style.validateButton} onPress={openModal3}>
					<CustomText style={style.validateButtonLabel}>D8</CustomText>
				</TouchableOpacity>
				<Modal visible={modalVisible3} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent3 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<TouchableOpacity style={style.validateButton} onPress={openModal4}>
					<CustomText style={style.validateButtonLabel}>D10</CustomText>
				</TouchableOpacity>

				<Modal visible={modalVisible4} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent4 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<TouchableOpacity style={style.validateButton} onPress={openModal5}>
					<CustomText style={style.validateButtonLabel}>D12</CustomText>
				</TouchableOpacity>
				<Modal visible={modalVisible5} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent5 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<TouchableOpacity style={style.validateButton} onPress={openModal6}>
					<CustomText style={style.validateButtonLabel}>D20</CustomText>
				</TouchableOpacity>
				<Modal visible={modalVisible6} animationType="slide" transparent>
					<View style={style.modalContainer}>
						<View style={style.modalContent}>
							<ModalContent6 />
							<TouchableOpacity style={style.closeButton} onPress={closeModal}>
								<CustomText style={style.closeButtonLabel}>X</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
};
