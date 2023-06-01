import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: '30pt',
		fontStyle: 'Bold',
		color: 'white',
		padding: '20dp',
	},

	text: {
		fontSize: '20pt',
		color: 'white',
		textAlign: 'justify',
		textJustify: 'inter-character',
		width: '100%',
		textDecorationColor: 'white',
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
