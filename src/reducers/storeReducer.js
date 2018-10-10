import data from '../../resources/data/data.json';

const mockData = { ...data };

export default function storeReducer(state = mockData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
