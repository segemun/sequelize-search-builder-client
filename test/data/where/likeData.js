module.exports = [
  {
    it: 'like operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'like',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          like: '%value%',
        },
      },
    },
  },
];
