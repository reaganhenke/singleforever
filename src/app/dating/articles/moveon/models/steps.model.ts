export interface Step {
  title?: string;
  imgUrl: string;
  content: string;
}

export const steps = [
  {
    title: '1. Listen to sad music',
    imgUrl: 'assets/moveon/music.svg',
    content: 'You’ll never be able to listen to certain albums again without crying.'
  }, {
    title: '2. Cleanse',
    imgUrl: 'assets/moveon/cleanse.svg',
    content: 'Block him on everything.'
  }, {
    title: '3. Travel',
    imgUrl: 'assets/moveon/travel.svg',
    content: 'Go all the way to Belize, and then only talk about your ex. '
  }
];
