module.exports = [
  {
    it: 'regexp operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'regexp',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          regexp: 'value',
        },
      },
    },
  },
];
