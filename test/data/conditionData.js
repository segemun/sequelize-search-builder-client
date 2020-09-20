module.exports = [
  {
    it: 'gt or lt condition',
    params: {
      data: {
        key: {
          ltValue: 10,
          gtValue: 100,
        },
      },
      settings: {
        where: {
          key: {
            _condition: 'or',
            types: [{
              type: 'lt',
              by: 'ltValue',
            }, {
              type: 'gt',
              by: 'gtValue',
            }],
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          lt: 10,
          gt: 100,
          _condition: 'or',
        },
      },
    },
  },
  {
    it: 'like and equal condition',
    params: {
      data: {
        key: {
          like: 'likeValue',
          equal: 'equalValue',
        },
      },
      settings: {
        where: {
          key: {
            types: [{
              type: 'like',
              by: 'like',
            }, {
              type: 'equal',
              by: 'equal',
            }],
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          like: '%likeValue%',
          eq: 'equalValue',
          _condition: 'and',
        },
      },
    },
  },
  {
    it: 'in or between condition',
    params: {
      data: {
        key: {
          ids: [{
            value: 1,
          }, {
            value: 2,
          }, {
            value: 3,
          }],
          betweenValues: {
            start: 'value1',
            end: 'value2',
          },
        },
      },
      settings: {
        where: {
          key: {
            types: [{
              type: 'in',
              by: 'ids',
              itemBy: 'value',
            }, {
              type: 'between',
              by: 'betweenValues',
            }],
            _condition: 'or',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          in: [1, 2, 3],
          between: ['value1', 'value2'],
          _condition: 'or',
        },
      },
    },
  },
  {
    it: 'key1 or key2 condition',
    params: {
      data: {
        key1: 'value1',
        key2: 'value2',

      },
      settings: {
        where: {
          key1: {
            type: 'equal',
          },
          key2: {
            type: 'equal',
          },
          _condition: 'or',
        },
      },
    },
    expected: {
      filter: {
        key1: {
          eq: 'value1',
        },
        key2: {
          eq: 'value2',
        },
        _condition: 'or',
      },
    },
  },
];
