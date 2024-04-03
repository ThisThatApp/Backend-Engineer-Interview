const countFunction = require('../index');

describe('countFunction', () => {
    it('should return 1', () => {
        expect(countFunction()).toEqual(1);
    });
});