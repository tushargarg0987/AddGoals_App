
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItems from './components/goalItem'
import Input from './components/goalInput';

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [enteredGoalText, setText] = useState('');
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setText(enteredText)
  }

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  function startAddGoal() {
    setModalVisibility(true)
  }

  function endAddGoal() {
    setModalVisibility(false)
  }

  const addHandler = () => {
    setGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoal();
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoal} />
      {modalVisibility &&
        <Input
          visible={modalVisibility}
          goalInputHandler={goalInputHandler}
          addHandler={addHandler}
          onCancel={endAddGoal} 
        />}
      <View style={styles.goalsContainer}>
        {/* Loads everything at once so not efficient for long data */}
        {/* <ScrollView >
        {goals.map((goal) => 
        //Can work for android only 
        // 
        <View key={goal} style={styles.goalItem}>
          <Text style={{color: 'white'}}>{goal}</Text>
        </View>
        )}
      </ScrollView>*/}
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <GoalItems
              data={itemData}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )
        }}
          keyExtractor={(item, index) => {
            return item.id
            // Or just use key in your js object
          }}
        />
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 4
  }
});