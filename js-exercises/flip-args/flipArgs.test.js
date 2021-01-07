// write your own test cases

import { flipArgs, flipped } from './flipArgs';

describe ('flipArgs', () => {
    test('should return an object', () => {
        expect(typeof flipped(2,3,5)).toEqual('object');
    });

    test('should return a function', () => {
        expect(typeof flipArgs(() => {})).toEqual('function');
    });

    test('should return the correct result for each input', () => {
        expect(flipped(1,2,3,4,5)).toEqual([5,4,3,2,1]);
        expect(flipped('a', 'b', 'c')).toEqual(['c', 'b', 'a']);
        expect(flipped('apple', 'mango', 'banana', 'kiwi')).toEqual(['kiwi', 'banana', 'mango', 'apple']);
        expect(flipped('!', '@', '#', '$', '%')).toEqual(['%', '$', '#', '@', '!']);
    });
});