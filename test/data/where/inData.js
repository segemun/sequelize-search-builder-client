module.exports = [
  {
    it: 'in operator',
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
            type: 'in',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          in: [1, 2, 3],
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
            type: 'in',
            itemBy: 'id',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          in: [1, 2, 3],
        },
      },
    },
  },
];
