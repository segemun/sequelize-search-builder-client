module.exports = [
  {
    it: 'lte operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'lte',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          lte: 'value',
        },
      },
    },
  },
];
