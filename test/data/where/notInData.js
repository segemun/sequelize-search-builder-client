module.exports = [
  {
    it: 'notIn operator',
    params: {
      data: {
        key: [{
          id: 1,
        }, {
          id: 2,
        }, {
          id: 3,
        }],
      },
      settings: {
        where: {
          key: {
            type: 'notIn',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notIn: [1, 2, 3],
        },
      },
    },
  }, {
    it: 'In operator with by',
    params: {
      data: {
        key: [{
          id: 1,
        }, {
          id: 2,
        }, {
          id: 3,
        }],
      },
      settings: {
        where: {
          key: {
            type: 'notIn',
            itemBy: 'id',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notIn: [1, 2, 3],
        },
      },
    },
  },
];
