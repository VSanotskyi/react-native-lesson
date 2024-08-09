import { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal, Image } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (goalText) => {
    setEnteredGoalText(goalText);
  };

  const addGoadHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image style={styles.images} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={'Add Goal'}
              color={'#8a48e3'}
              onPress={addGoadHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={'Cancel'}
              color={'#f31282'}
              onPress={props.onEndGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  images: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    paddingHorizontal: 8,
  },
});

export default GoalInput;
