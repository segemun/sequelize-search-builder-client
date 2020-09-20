module.exports = [
  {
    it: 'notBetween operator',
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
            type: 'notBetween',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notBetween: ['value1', 'value2'],
        },
      },
    },
  },
  {
    it: 'notBetween operator',
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
            type: 'notBetween',
            startBy: 'firstValue',
            endBy: 'secondValue',
          },
        },
      },
    },
    expected: {
      filter: {
        key: {
          notBetween: ['value1', 'value2'],
        },
      },
    },
  },
];
