const mapper = {};

const initialState = {
  list: [
    {
      id: 1,
      name: 'Ludicon',
      defaultImage: '/images/banner.jpg',
      description: 'Lorem ipsum dolor Angular',
      price: 'FREE',
      images: [
        {
          url: 'image-1'
        }
      ]
    },
    {
      id: 2,
      name: 'Proiectul Pagini Web',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor PPW',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 3,
      name: 'Git',
      defaultImage: 'image-url',
      description: 'Git stickers',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 4,
      name: 'WebStorm',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor WebStorm',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 5,
      name: 'Angular',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor Angular',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 6,
      name: 'React',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor React',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 7,
      name: 'JS',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor JS',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 8,
      name: 'HTML',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor HTML',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 9,
      name: 'NodeJS',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor NodeJS',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 10,
      name: 'CSS',
      defaultImage: 'image-url',
      description: 'Lorem ipsum dolor CSS',
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