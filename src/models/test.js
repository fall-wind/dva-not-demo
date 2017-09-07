
export default {
  namespace: 'test',
  state: {
    name: 'test',
    inputValue: '',
  },
  reducers: {
    handleButtonSubmit(state, { name }) {
      return {
        ...state,
        name
      }
    },
    changeInputValue(state, { value }) {
      return {
        ...state,
        inputValue: value,
      }
    }
  },
  effects: {},
  subscriptions: {},
};
