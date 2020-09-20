module.exports = [
  {
    it: 'gt operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'gt',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          gt: 'value',
        },
      },
    },
  },
];
