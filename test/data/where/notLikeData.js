module.exports = [
  {
    it: 'notLike operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'notLike',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notLike: 'value',
        },
      },
    },
  },
];
