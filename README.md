# Sequelize Search Builder Client
## About
This is a library for the generation search http request for [Sequelize Search Builder](https://github.com/segemun/sequelize-search-builder) module.

## Installation
```bash
npm install --save sequelize-search-builder-client
```
## Usage
```javascript
import generateSearchRequest from 'sequelize-search-builder-client';
```
### Simple one field example
```javascript
const formData = {
    name: 'John',
};
const settings = {
    where: {
        name: {
            as: 'fname',
            type: 'like',
        },
    },
};
const request = generateSearchRequest(data, settings);
// request data:
{
    filter: {
        fname: {
            like: '%John%',
        },
    },
}
```

### With conditions
```javascript
const formData = {
    name: 'John',
    age: {
        firstValue: 18,
        secondValue: 21,
    },
};
const settings = {
    where: {
        _condition: 'or',
        name: {
            as: 'fname',
            type: 'like',
        },
        age: {
            _condition: 'or',
            types: [{
                type: 'lte',
                by: 'firstValue',
            }, {
                type: 'gte',
                by: 'secondValue'
            }]
        },
    },
};
const request = generateSearchRequest(data, settings);
// request data:
{
    filter: {
        fname: {
            like: '%John%',
        },
        age: {
            lte: 18,
            gte: 21,
            _condition: 'or',
        },
        _condition: 'or',
    },
}
```
### Order, limit and offset params
```javascript
const settings = {
    where: {...},
    order: {
        name: 'desc',
    },
    limit: 10,
    offset: 10;
}
```

### Equal operator example
```javascript
const formData = {
    name: 'John',
};
const settings = {
  where: {
    name: {
        type: 'equal',  
    },
  },
};
```
### Gt, Gte, Lt, Lte, ne, like, iLike, notLike, notILike, regexp, notRegexp, iRegexp, notIRegexp operators examples
```javascript
const formData = {
    age: 18,
};
const settings = {
  where: {
    age: {
        type: 'gt', // (gte, lt, lte, ne, like, iLike, notLike, notILike, regexp, notRegexp, iRegexp, notIRegexp)  
    },
  },
};
```
### In, notIn operator example
```javascript
const formData = {
    authors: [{
        name: 'John',
    }, {
        name: 'Bob',   
    }]
};
const settings = {
  where: {
    authors: {
        type: 'in', // notIn
        itemBy: 'name', // 'id' by default
    },
  },
};
```
### Between, notBetween operator example
```javascript
const formData = {
    author: {
        firstValue: 21,
        secondValue 33:
    },
};
const settings = {
  where: {
    authors: {
        type: 'between', // notBetween
        startBy: 'firstValue', // 'start' by default
        endBy: 'secondValue', // 'end' by default
    },
  },
};
```
## Contribute
You are Welcome =)
Keep in mind:
```sh
npm run test
```