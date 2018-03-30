var assert = require('assert');
describe('six', function() {
    describe('#module', function() {
        it('should return 6', function() {
            assert.equal(require('../index'), 6);
        });
    });
});