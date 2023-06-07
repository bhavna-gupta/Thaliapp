import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: '',
  products: [
    
    {
      id: 0,
      image:
        'https://th.bing.com/th/id/OIP.IqnQ2zCzUlKmeWc7K6pI7gHaHs?w=193&h=201&c=7&r=0&o=5&pid=1.7',
      name: 'Chapati',
      price: '15',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 1,
      image:
        'https://th.bing.com/th/id/OIP.BN0bt3MPGkc7K9dFcPNcdAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7',
      name: 'Pickle',
      price: '25',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 2,
      image:
        'https://th.bing.com/th/id/OIP.9Y-Y01vP2XOsXwPuAgxu4wHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7',
      name: 'Curd',
      price: '35',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 3,
      image:
        'https://th.bing.com/th/id/OIP.7SngywwxdHEZRi5vRJDTIwHaJ_?w=178&h=240&c=7&r=0&o=5&pid=1.7',
      name: 'Rasogulla',
      price: '120',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 4,
      image:
        'https://th.bing.com/th/id/OIP.86uNSF0ln6cX-FlRQYcSwwHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7',
      name: 'Daal',
      price: '280',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 5,
      image:
        'https://th.bing.com/th/id/OIP.J5qcQSEvB6jP9tfW-d3x_QHaE8?w=272&h=181&c=7&r=0&o=5&pid=1.7',
      name: 'Paneer-Butter-masala',
      price: '340',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ',
    },
  ],
  thali: [],
};

export const ItemSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.thali.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTothali, RemoveItem } = ItemSlice.actions;

export default ItemSlice.reducer;