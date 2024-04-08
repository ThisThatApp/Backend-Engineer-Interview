const { longestPalindrome } = require('../index');

describe('longestPalindrome', () => {
    it('should return 1', () => {
        expect(longestPalindrome()).toEqual(1);
    });
});