const mapper = {};

const initialState = {
  list: [
    {
      id: 1,
      name: 'Ludicon',
      defaultImage: '/images/ludicon.jpg',
      description: 'The official logo of Ludicon App is here.',
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
      description: 'Old school \'Proiectul Pagini Web\' logo.',
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
      description: 'Git stickers for Git fans.',
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
      description: 'Best Web IDE named \'WebStorm\' logo.',
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
      description: 'Classic Angular logo.',
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
      description: 'JavaScript default unaltered logo.',
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
      description: 'HTML5 logo untouched.',
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
      description: 'NodeJS official logo is also here.',
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
      description: 'CSS logo but in PNG format.',
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