const mapper = {};

const initialState = {
  list: [
    {
      id: 1,
      name: 'Angular',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor Angular',
      price: 5,
      images: [
        {
          url: 'image-1'
        }
      ]
    },
    {
      id: 2,
      name: 'NodeJS',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor NodeJS',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    }
  ]
};

export default function reducers(state = initialState, action) {
  return mapper[action.type] ? mapper[action.type](state, action) : state;
}