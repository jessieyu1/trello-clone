const generateRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const dummyData = {
  todo: {
    id: "todo",
    list: [
      { text: "card 1", color: generateRandomColor() },
      { text: "card 2", color: generateRandomColor() },
      { text: "card 3", color: generateRandomColor() },
    ],
  },
  doing: {
    id: "doing",
    list: [],
  },
  done: {
    id: "done",
    list: [],
  },
};
export default dummyData