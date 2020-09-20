module.exports = [
  {
    it: 'lt operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'lt',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          lt: 'value',
        },
      },
    },
  },
];
