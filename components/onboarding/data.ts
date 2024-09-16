export interface OnboardingData {
  id: number;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    text: "What's your major? (select one below)",
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  {
    id: 2,
    text: "Which school do you attend? (select one below)",
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  {
    id: 3,
    text: "What year are you? (select one below)",
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
];

export default data;
