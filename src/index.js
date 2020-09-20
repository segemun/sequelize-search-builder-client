function equalOperator(data, settings) {
  return {
    eq: settings.by ? data[settings.by] : data,
  };
}

function equalByTypeOperator(data, settings) {
  return {
    [settings.type]: settings.by ? data[settings.by] : data,
  };
}

function betweenOperator(data, settings, not = false) {
  const betweenData = settings.by ? data[settings.by] : data;
  return {
    [not ? 'notBetween' : 'between']: [
      (settings.startBy ? betweenData[settings.startBy] : betweenData.start),
      (settings.endBy ? betweenData[settings.endBy] : betweenData.end),
    ],
  };
}

function notBetweenOperator(data, settings) {
  return betweenOperator(data, settings, true);
}

function inOperator(data, settings, not = false) {
  return {
    [not ? 'notIn' : 'in']: ((settings.by ? data[settings.by] : data) || []).map((item) => item[settings.itemBy || 'value']),
  };
}

function notInOperator(data, settings) {
  return inOperator(data, settings, true);
}

function likeOperator(data, settings) {
  return {
    like: settings.by ? `%${data[settings.by]}%` : `%${data}%`,
  };
}

const OpMapper = {
  equal: equalOperator,
  gt: equalByTypeOperator,
  gte: equalByTypeOperator,
  lt: equalByTypeOperator,
  lte: equalByTypeOperator,
  ne: equalByTypeOperator,
  in: inOperator,
  notIn: notInOperator,
  between: betweenOperator,
  notBetween: notBetweenOperator,
  like: likeOperator,
  notLike: equalByTypeOperator,
  iLike: equalByTypeOperator,
  notILike: equalByTypeOperator,
  regexp: equalByTypeOperator,
  notRegexp: equalByTypeOperator,
  iRegexp: equalByTypeOperator,
  notIRegexp: equalByTypeOperator,
};

export default (data = {}, settings = {}) => {
  const request = {
    filter: {},
  };

  if (settings.where) {
    for (const i in data) {
      if (data[i] && settings.where[i]) {
        const fieldName = settings.where[i].as || i;
        if (settings.where[i].type) {
          if (typeof OpMapper[settings.where[i].type] === 'function') {
            const opValue = OpMapper[settings.where[i].type](data[i], settings.where[i]);
            request.filter[fieldName] = opValue;
          }
        } else if (settings.where[i].types) {
          settings.where[i].types.forEach((setting) => {
            if (typeof OpMapper[setting.type] === 'function' && setting.by) {
              request.filter[fieldName] = {
                ...(request.filter[fieldName] || {}),
                ...OpMapper[setting.type](data[i], setting),
              };
            }
          });

          if (request.filter[fieldName]) {
            request.filter[fieldName]._condition = settings.where[i]._condition || 'and';
          }
        }
      }
    }

    if (settings.where._condition && settings.where._condition === 'or') {
      request.filter._condition = 'or';
    }
  }

  if (settings.order) {
    request.order = settings.order;
  }

  if (settings.limit) {
    request.limit = settings.limit;
  }

  if (settings.offset) {
    request.offset = settings.offset;
  }

  return request;
};
