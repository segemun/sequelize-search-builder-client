module.exports = [
  {
    it: 'iLike operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'iLike',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          iLike: 'value',
        },
      },
    },
  },
];
