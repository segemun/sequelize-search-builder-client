module.exports = [
  {
    it: 'notIRegexp operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'notIRegexp',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notIRegexp: 'value',
        },
      },
    },
  },
];
