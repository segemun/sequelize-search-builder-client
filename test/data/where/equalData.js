module.exports = [
  {
    it: 'equal operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'equal',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          eq: 'value',
        },
      },
    },
  },
];
