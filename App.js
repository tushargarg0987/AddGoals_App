
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[enteredGoalText, setText] = useState('');
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setText(enteredText)
  }

  const addHandler = () => {
    setGoals(currentGoals => [...currentGoals,enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter The goal' onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    marginBottom: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height: 50
  },
  goalsContainer: {
    flex: 4
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});