import { nanoid } from 'nanoid';

export class TrainingModel {
  constructor(date, distance) {
    this.id = nanoid();
    this.date = date;
    this.distance = Number(distance);
  }
}

export default TrainingModel;
