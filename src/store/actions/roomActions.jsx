import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';
export const setRoom = (userData, history) => {
  console.log(userData, history);
  return dispatch => {
    console.log(userData);
    // Create a reference
    saveUserData(userData);
    history.navigation.navigate('StartStream');
  };
};

const saveUserData = async userData => {
  try {
    const jsonValue = JSON.stringify(userData);
    console.log(jsonValue);
    await AsyncStorage.setItem('userSession', jsonValue);
  } catch (error) {
    console.log(error);
  }
};
