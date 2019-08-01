export enum resultDate {
  MetroBoy = 'Metro Boy',
  ElevatorBoy = 'Elevator Boy',
  InstagramBoy = 'Instagram Boy',
  BreakroomBoy = 'Breakroom Boy'
}

export interface Answer {
  option: string;
  result: resultDate | boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export const dateQuestions: Question[] = [{
  question: 'How much do looks matter to you?',
  answers: [{
    option: 'He needs to be DREAMY',
    result: resultDate.InstagramBoy
  }, {
    option: 'I can appreciate a cute face ',
    result: resultDate.MetroBoy
  }, {
    option: 'He’s not bad looking',
    result: resultDate.ElevatorBoy
  }, {
    option: 'He’s got a great personality',
    result: resultDate.BreakroomBoy
  }]
}, {
  question: 'Does he know you exist?',
  answers: [{
    option: 'We talk every single day',
    result: resultDate.BreakroomBoy
  }, {
    option: 'I introduced myself once',
    result: resultDate.MetroBoy
  }, {
    option: 'I get a passing nod',
    result: resultDate.ElevatorBoy
  }, {
    option: 'Not a chance',
    result: resultDate.InstagramBoy
  }]
}, {
  question: 'Do you seriously think you’ve got a shot?',
  answers: [{
    option: 'Yes!',
    result: false,
  }, {
    option: 'Definitely',
    result: false
  }, {
    option: 'Maybe',
    result: false
  }, {
    option: 'No',
    result: true
  }]
}, {
  question: 'What’s your dream date?',
  answers: [{
    option: 'Going to a Broadway play',
    result: resultDate.InstagramBoy
  }, {
    option: 'Going out dancing',
    result: resultDate.MetroBoy
  }, {
    option: 'Going to a museum',
    result: resultDate.BreakroomBoy
  }, {
    option: 'Cooking together',
    result: resultDate.ElevatorBoy
  }]
}, {
  question: 'What hobbies are you into?',
  answers: [{
    option: 'Foreign films',
    result: resultDate.MetroBoy
  }, {
    option: 'Studying a foreign language',
    result: resultDate.BreakroomBoy
  }, {
    option: 'Working out',
    result: resultDate.ElevatorBoy
  }, {
    option: 'Singing',
    result: resultDate.InstagramBoy
  }]
}, {
  question: 'What city would you settle down in?',
  answers: [{
    option: 'New York',
    result: resultDate.InstagramBoy
  }, {
    option: 'Seattle',
    result: resultDate.MetroBoy
  }, {
    option: 'DC',
    result: resultDate.ElevatorBoy
  }, {
    option: 'Somewhere abroad',
    result: resultDate.BreakroomBoy
  }]
}];
