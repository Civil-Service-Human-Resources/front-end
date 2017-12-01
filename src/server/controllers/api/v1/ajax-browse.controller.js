import faker from 'faker';

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

export const getItems = async (req, res) => {
  await delay();

  res.json({
    items: [
      {
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        endOfTree: false,
      },
      {
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        endOfTree: false,
      },
      {
        href: '#',
        heading: faker.random.words(3),
        description: faker.random.words(15),
        endOfTree: false,
      },
    ],
  });
};
