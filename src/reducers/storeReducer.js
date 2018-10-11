import data from '../../resources/data/data.json';

const mockData = { ...data.stores };

export default function storeReducer(state = mockData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
