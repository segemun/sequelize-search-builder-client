/* global describe it */

import isEqual from 'lodash.isequal';
import { expect } from 'chai';
import generateSearchRequest from '../src';

const equalData = require('./data/where/equalData');
const gtData = require('./data/where/gtData');
const gteData = require('./data/where/gteData');
const ltData = require('./data/where/ltData');
const lteData = require('./data/where/lteData');
const neData = require('./data/where/neData');
const betweenData = require('./data/where/betweenData');
const notBetweenData = require('./data/where/notBetweenData');
const inData = require('./data/where/inData');
const notInData = require('./data/where/notInData');
const likeData = require('./data/where/likeData');
const notLikeData = require('./data/where/notLikeData');
const iLikeData = require('./data/where/iLikeData');
const notILikeData = require('./data/where/notILikeData');
const regexpData = require('./data/where/regexpData');
const notRegexpData = require('./data/where/notRegexpData');
const iRegexpData = require('./data/where/iRegexpData');
const notIRegexpData = require('./data/where/notIRegexpData');

const conditionData = require('./data/conditionData');
const orderData = require('./data/orderData');

const compareConditionDataset = ({ it: description, params: { data, settings }, expected }) => {
  it(description, (done) => {
    const request = generateSearchRequest(data, settings);
    console.log(JSON.stringify(request), JSON.stringify(expected));
    expect(isEqual(request, expected)).to.equal(true);
    done();
  });
};

describe('conditions', () => {
  describe('equal', () => {
    equalData.forEach(compareConditionDataset);
  });
  describe('gt', () => {
    gtData.forEach(compareConditionDataset);
  });
  describe('gte', () => {
    gteData.forEach(compareConditionDataset);
  });
  describe('lt', () => {
    ltData.forEach(compareConditionDataset);
  });
  describe('lte', () => {
    lteData.forEach(compareConditionDataset);
  });
  describe('ne', () => {
    neData.forEach(compareConditionDataset);
  });
  describe('betweenData', () => {
    betweenData.forEach(compareConditionDataset);
  });
  describe('notBetweenData', () => {
    notBetweenData.forEach(compareConditionDataset);
  });
  describe('in', () => {
    inData.forEach(compareConditionDataset);
  });
  describe('notIn', () => {
    notInData.forEach(compareConditionDataset);
  });
  describe('like', () => {
    likeData.forEach(compareConditionDataset);
  });
  describe('notLike', () => {
    notLikeData.forEach(compareConditionDataset);
  });
  describe('iLike', () => {
    iLikeData.forEach(compareConditionDataset);
  });
  describe('notILike', () => {
    notILikeData.forEach(compareConditionDataset);
  });
  describe('regexp', () => {
    regexpData.forEach(compareConditionDataset);
  });
  describe('notRegexp', () => {
    notRegexpData.forEach(compareConditionDataset);
  });
  describe('iRegexp', () => {
    iRegexpData.forEach(compareConditionDataset);
  });
  describe('notIRegexp', () => {
    notIRegexpData.forEach(compareConditionDataset);
  });

  describe('conditions', () => {
    conditionData.forEach(compareConditionDataset);
  });
  describe('orders', () => {
    orderData.forEach(compareConditionDataset);
  });
});
