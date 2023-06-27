import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	container: {
		position: 'relative',
		height: '100vh',
		backgroundColor: '#212121',
	},
	img: {
		margin: 'auto',
		width: '80%',
		height: '80%',
	},
	timelineContainer: {
    marginLeft: '5%',
		width: '90%',
		height: '85%',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		overflow: 'hidden',
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
    flexDirection: 'row',
	},
	timelineMarker: {
		width: 10,
		height: 10,
		backgroundColor: 'red',
		borderRadius: 5,
		marginRight: 10,
	},
	timelineEventDot: {
		display: 'none',
	},
  timelineConnector: {
    position: 'absolute',
    backgroundColor: 'gray',
    width: 5,
    zIndex: -1,
    left: 24,
    top: 0,
    bottom: 0,
    height: '85%',
    overflow: 'hidden',
    flexDirection: 'column', 
  },
  
  mainEvent: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    marginLeft: '40%',
  },

  subEvent: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: '70%',
    marginTop: 10,

  },

  mainEventActive: {
    backgroundColor: 'darkgray',
  },

  subEventActive: {
    backgroundColor: 'darkgray',
  },
});
