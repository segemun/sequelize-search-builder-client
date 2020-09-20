module.exports = [
  {
    it: 'ne operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'ne',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          ne: 'value',
        },
      },
    },
  },
];
