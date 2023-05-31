import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
		backgroundColor: '#212121',
		padding: '30px',
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
		borderRadius: '10px',
		width: '43px',
		display: 'Block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		height: '45px',
		textAlign: 'center',
		paddingTop: '12px',
	},
	text: {
		fontSize: '20px',
		color: 'white',
	},
	crew: {
		textAlign: 'center',
		fontSize: '30px',
		fontStyle: 'Bold',
		color: 'white',
		padding: '20px',
	},
});
