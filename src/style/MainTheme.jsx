import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: '30pt',
		fontStyle: 'Bold',
		color: 'white',
		marginTop: '5%',
		marginBottom: '5%',

	},

	text: {
		fontSize: '20pt',
		color: 'white',
		textAlign: 'justify',
		textJustify: 'inter-character',
		width: '80%',
		textDecorationColor: 'white',
		margin: '5%',
	},
	StatsGlobales: {
		//display: 'block!',
	},
	mainContainer: {
		flex: 1,
		fontFamily: 'OpenSans, Arial',
		display: 'flex',
		//justifyContent: 'space-between',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
		backgroundColor: '#212121',
		padding: '30dp',
		color: 'white',
		paddingTop: '5%',
		paddingBottom: '5%',
	},

	back: {
		backgroundColor: '#721E20',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 15,
		marginBottom: 50,
		color: 'white',
	},

	btn: {
		color: 'white',
		backgroundColor: '#721E20',
		padding: 10,
		borderRadius: 10,
		marginBottom: 50,
		textAlign: 'center',
		display: 'inline-block',
		width: 'auto',
		margin: '5%',
	},

	btnPlus: {
		backgroundColor: '#721E20',
		paddingHorizontal: 15,
		paddingVertical: 14,
		borderRadius: 10,
		marginTop: 40,
		width: 55,
	},
});
