import './App.css';
import { useState } from 'react';
import FormTraining from './components/FormTraining';
import TrainingList from './components/TrainingList/TrainingList';

function App() {
  const [trainingList, setTrainingList] = useState([]);
  const hendleAdd = (training) => {
    const arr = Array.from(trainingList);
    const sameDate = trainingList.find((o) => o.date === training.date);

    if (sameDate) {
      sameDate.distance += training.distance;
    } else {
      arr.push(training);
    }

    setTrainingList(arr);
  };

  return (
    <>
      <FormTraining
        onAdd={hendleAdd}
        trainingList={trainingList}
        setTrainingList={setTrainingList}
      />
      <TrainingList
        trainingList={trainingList}
        setTrainingList={setTrainingList}
      />
    </>
  );
}

export default App;
