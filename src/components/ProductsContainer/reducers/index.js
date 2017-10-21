const mapper = {};

const initialState = {
  list: [
    {
      id: 1,
      name: 'Ludicon',
      defaultImage: '/images/ludicon.jpg',
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
      defaultImage: '/images/ppw.png',
      description: 'Lorem ipsum dolor PPW',
      price: 'FREE',
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 3,
      name: 'Git',
      defaultImage: '/images/git.png',
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
      defaultImage: '/images/ws.png',
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
      defaultImage: '/images/angular.png',
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
      name: 'JS',
      defaultImage: '/images/js.png',
      description: 'Lorem ipsum dolor JS',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 7,
      name: 'HTML',
      defaultImage: '/images/html.png',
      description: 'Lorem ipsum dolor HTML',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 8,
      name: 'NodeJS',
      defaultImage: '/images/node.png',
      description: 'Lorem ipsum dolor NodeJS',
      price: 5,
      images: [
        {
          url: 'image-2'
        }
      ]
    },
    {
      id: 9,
      name: 'CSS',
      defaultImage: '/images/css.png',
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