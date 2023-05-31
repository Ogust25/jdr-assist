import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
		backgroundColor: '#212121',
		padding: '30dp',
	},

	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},

	modalContent: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
	},

	error: {
		color: 'red',
	},

	btnPlus: {
		backgroundColor: '#721E20',
		borderRadius: '10dp',
		width: '43dp',
		display: 'Block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '15%',
		marginBottom: 'auto',
		height: '45dp',
		textAlign: 'center',
		paddingTop: '12dp',
	},

	text: {
		fontSize: '20pt',
		color: 'white',
	},

	crew: {
		textAlign: 'center',
		fontSize: '30pt',
		fontStyle: 'Bold',
		color: 'white',
		padding: '20dp',
	},
});
