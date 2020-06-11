import React from 'react';
import {RadioButton} from 'react-native-paper';
import {View, Text, StyleSheet, Button} from 'react-native';
import useStoreHooks from '../../store/storeHooks';
import OurButton from '../../common/button';
function SelectGender(props) {
  const {set_gender} = useStoreHooks();
  const {gender} = props.user;
  return (
    <View testID={'test-data-gender'} style={styles.container}>
      <Text testID={'test-data-gender-header'} style={styles.header}>
        Select Gender
      </Text>
      <View style={styles.checkboxContainer}>
        <RadioButton.Group
          onValueChange={val => set_gender(val)}
          value={gender}>
          <View>
            <Text>Male</Text>
            <RadioButton testID={'test-data-gender-radio1'} value="Male" />
          </View>
          <View>
            <Text>Female</Text>
            <RadioButton testID={'test-data-gender-radio2'} value="Female" />
          </View>
        </RadioButton.Group>
      </View>
      <OurButton
        testID={'test-data-gender-button'}
        title={'Continue'}
        disabled={gender !== '' ? false : true}
        onPress={() =>
          props.navigation.navigate('SelectAge', {
            user: props.user,
          })
        }>
        Continue
      </OurButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    padding: 20,
  },
  button: {
    padding: 20,
  },
  textInput: {
    padding: 20,
  },
});
export default SelectGender;
