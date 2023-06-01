import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	container: {
		flexDirection: 'row',
		//alignItems: 'center', <-- pq?
	},
	img: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		marginTop: '10%',
		borderRadius: '10%',
		paddingRight: '5%',
	},
	text: {
		fontSize: '18px',
		color: 'white',
	},
	blocPersonnage: {
		padding: '5%',
		margin: '5%',
	},
});
