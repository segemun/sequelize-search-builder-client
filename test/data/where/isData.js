module.exports = [
  {
    it: 'Is operator',
    params: {
      data: {
        key: 'null',
      },
      settings: {
        where: {
          key: {
            type: 'is',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          is: 'null',
        },
      },
    },
  },
];
