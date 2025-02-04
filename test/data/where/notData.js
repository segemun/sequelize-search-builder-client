module.exports = [
  {
    it: 'Not operator',
    params: {
      data: {
        key: 'null',
      },
      settings: {
        where: {
          key: {
            type: 'not',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          not: 'null',
        },
      },
    },
  },
];
