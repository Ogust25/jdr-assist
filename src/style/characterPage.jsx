import { StyleSheet } from 'react-native';

export const characterPageStyle = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	  },
	  statsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	  },
	  statsText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white',
		textDecorationColor: 'white',
		marginRight: '25%',
	  },
	  statsChangeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 30,
	  },
	  statsChangeText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white',
		textDecorationColor: 'white',
		marginRight: '100%',
		marginLeft: '100%',
	  },

	identifiants: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		textDecorationColor: 'white',
	},

	stats: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white',
		textDecorationColor: 'white',
		paddingBottom: '10%',
	},
	statsChange: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white',
		textDecorationColor: 'white',
	},

});
