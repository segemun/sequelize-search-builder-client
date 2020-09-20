module.exports = [
  {
    it: 'iRegexp operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'iRegexp',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          iRegexp: 'value',
        },
      },
    },
  },
];
