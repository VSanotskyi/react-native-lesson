import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(prev => [...prev, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals(prevState => (
      prevState.filter(goal => goal.id !== id)
    ));
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title={'Add New Goal'}
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onEndGoalHandler={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={item => item.id} // render key
            renderItem={(itemDate) => (
              <GoalItem
                text={itemDate.item.text}
                id={itemDate.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
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
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
