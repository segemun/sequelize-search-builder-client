module.exports = [
  {
    it: 'gte operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'gte',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          gte: 'value',
        },
      },
    },
  },
];
