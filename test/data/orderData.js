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
        order: {
          key: 'desc',
        },
      },
    },
    expected: {
      filter: {
        key: {
          eq: 'value',
        },
      },
      order: {
        key: 'desc',
      },
    },
  },
];
