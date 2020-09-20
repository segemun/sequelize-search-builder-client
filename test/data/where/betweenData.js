module.exports = [
  {
    it: 'between operator',
    params: {
      data: {
        key: {
          start: 'value1',
          end: 'value2',
        },
      },
      settings: {
        where: {
          key: {
            type: 'between',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          between: ['value1', 'value2'],
        },
      },
    },
  },
  {
    it: 'between operator',
    params: {
      data: {
        key: {
          firstValue: 'value1',
          secondValue: 'value2',
        },
      },
      settings: {
        where: {
          key: {
            type: 'between',
            startBy: 'firstValue',
            endBy: 'secondValue',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          between: ['value1', 'value2'],
        },
      },
    },
  },
];
