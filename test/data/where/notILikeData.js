module.exports = [
  {
    it: 'notILike operator',
    params: {
      data: {
        key: 'value',
      },
      settings: {
        where: {
          key: {
            type: 'notILike',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notILike: 'value',
        },
      },
    },
  },
];
