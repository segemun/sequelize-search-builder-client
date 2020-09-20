module.exports = [
  {
    it: 'notRegexp operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'notRegexp',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notRegexp: 'value',
        },
      },
    },
  },
];
