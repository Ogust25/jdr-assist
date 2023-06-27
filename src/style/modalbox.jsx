import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	modalContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: '#212121',
		padding: 30,
		borderRadius: 8,
	},
	textInput: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 8,
		marginBottom: 16,
		color: '#fff',
		flexDirection: 'row',
	},
	error: {
		color: 'red',
		marginBottom: 16,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
	closeButtonLabel: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	validateButton: {
		color: 'white',
		backgroundColor: '#721E20',
		padding: 10,
		borderRadius: 10,
		marginBottom: 50,
		textAlign: 'center',
		display: 'inline-block',
		width: 'auto',
	},
	validateButtonLabel: {
		color: '#212121',
		fontSize: 16,
		fontWeight: 'bold',
	},

	pickerContainer: {
    width: '100%',
    marginTop: 16,
    backgroundColor: '#212121',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'white',
	},
	picker: {
		height: 40,
		color: 'white',
	},
});
