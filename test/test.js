var chai = require('chai');
var expect = chai.expect;

var getCategories = require('../routes/category');

describe("Routes", function() {
  describe("GET categories", function() {
    it("should respond", function() {
      var req,res,spy;

      req = res = {};
      getUsers(req, res);
      expect(res).to.equal([]);
    });
  });
});
