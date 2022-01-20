const { expect } = require('chai');

const intersect = require('./intersect');

const testCase1Arr1 = [1, 3, 5, 7, 9];
const testCase1Arr2 = [2, 3, 4, 6, 9];
const testCase1Arr3 = [2, 4, 6, 8, 12];

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const obj4 = { d: 4 };

const testCase2Arr1 = [obj1, obj2, obj3, 'hello', 4, false, null, obj3];
const testCase2Arr2 = [obj1, obj2, 'bye', 5, true, null];
const testCase2Arr3 = [obj4, 'hey', 6];

describe('Test intersect against primitive type array', () => {
    it('should return intersection for primitive types', () => {
        const intersection = intersect(testCase1Arr1, testCase1Arr2);
        expect(intersection).to.have.members([3, 9]);
        expect(intersection.length).to.equal(2);
    });
    it('should return empty array if no intersection found for primitives', () => {
        const intersection = intersect(testCase1Arr1, testCase1Arr3);
        expect(intersection.length).to.equal(0);
    });
});

describe('Test intersect against mixed arrays', () => {
    it('should return intersection for mixed types', () => {
        const intersection = intersect(testCase2Arr1, testCase2Arr2);
        expect(intersection).to.have.members([obj1, obj2, null]);
        expect(intersection.length).to.equal(3);
    });
    it('should return empty array if no intersection found for primitives', () => {
        const intersection = intersect(testCase2Arr1, testCase2Arr3);
        expect(intersection.length).to.equal(0);
    });
});
