import faker from 'faker';

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const getItems = async (req, res) => {
  await delay();

  res.json({
    items: [
      {
        id: 201,
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        loading: false,
        active: false,
        endOfTree: false,
      },
      {
        id: 202,
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        loading: false,
        active: false,
        endOfTree: false,
      },
      {
        id: 203,
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        loading: false,
        active: false,
        endOfTree: false,
      },
    ],
  });
};
