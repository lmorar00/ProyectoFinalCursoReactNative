import {ADD_TRAINER, REMOVE_TRAINER} from '../actions/TrainerActionTypes';

const INITIAL_STATE = {
  selectedTrainers: [],
  allTrainers: [],
};

const TrainerReducer = (state = INITIAL_STATE, action) => {
  const {selectedTrainers, allTrainers} = state;
  let trainerName, newState;

  switch (action.type) {
    case ADD_TRAINER:
      trainerName = action.payload;
      allTrainers.splice(allTrainers.indexOf(trainerName), 1);

      newState = {
        selectedTrainers: [...selectedTrainers, trainerName],
        allTrainers: [...allTrainers],
      };

      return newState;

    case REMOVE_TRAINER:
      trainerName = action.payload;
      selectedTrainers.splice(selectedTrainers.indexOf(trainerName), 1);

      newState = {
        selectedTrainers: [...selectedTrainers],
        allTrainers: [...allTrainers, trainerName],
      };

      return newState;

    default:
      return state;
  }
};

export default TrainerReducer;
