import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: '30px',
		fontStyle: 'Bold',
		color: 'white',
		padding: '20px',
	},
	text: {
		fontSize: '20px',
		color: 'white',
		textAlign: 'justify',
		textJustify: 'inter-character',
		width: '100%',
	},
	mainContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
		backgroundColor: '#212121',
		padding: '30px',
	},
	back: {
		backgroundColor: '#721E20',
		paddingHorizontal: '15px',
		paddingVertical: '10px',
		borderRadius: '15px',
		marginBottom: '50px',
		color: 'white',
	},
});
