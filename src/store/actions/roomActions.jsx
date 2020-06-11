import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';
export const setRoom = (userData, history) => {
  console.log(userData, history);
  return dispatch => {
    console.log(userData);
    // Create a reference
    const roomRef = database().ref(`/rooms/`);
    roomRef
      .push({
        sessionName: userData.id,
      })
      .then(data => {
        console.log(data);
        dispatch({type: 'ADD_ROOM_SUCCESS', payload: data});
        history.navigation.navigate('Stream', {roomSessionId: userData.id});
      })
      .catch(err => {
        dispatch({type: 'ADD_ROOM_FAILURE', err: err});
      });
  };
};

const findRoom = () => {
  return dispatch => {
    const roomRef = database().ref('/rooms/');
    roomRef.once('value').then(snapshot => {
      console.log(snapshot._snapshot.childKeys);
    });
  };
};

const setRoomSession = async userData => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem('roomSession', jsonValue);
  } catch (error) {
    console.log(error);
  }
};
