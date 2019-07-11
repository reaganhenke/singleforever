export enum resultDate {
  MetroBoy = 'Metro Boy',
  ElevatorBoy = 'Elevator Boy',
  InstagramBoy = 'Instagram Boy',
  BreakroomBoy = 'Breakroom Boy'
}

export interface Answer {
  option: string;
  result: resultDate | null;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export const dateQuestions: Question[] = [{
  question: 'What is your dream date?',
  answers: [{
    option: 'break',
    result: resultDate.BreakroomBoy
  }, {
    option: 'instagram',
    result: resultDate.InstagramBoy
  }, {
    option: 'elevarot',
    result: resultDate.ElevatorBoy
  }, {
    option: 'metro',
    result: resultDate.MetroBoy
  }]
}, {
  question: 'What is your favorite color',
  answers: [{
    option: 'blue',
    result: resultDate.ElevatorBoy
  }, {
    option: 'green',
    result: resultDate.BreakroomBoy
  }]
}];
