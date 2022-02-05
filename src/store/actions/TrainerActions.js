import {ADD_TRAINER, REMOVE_TRAINER} from '../actions/TrainerActionTypes';

export const add_trainer = trainerName => ({
  type: ADD_TRAINER,
  payload: trainerName,
});

export const remove_item = trainerName => ({
  type: REMOVE_TRAINER,
  payload: trainerName,
});
