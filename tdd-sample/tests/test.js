const assert = require('chai').assert;
const myApp= require('../src/main.js');

describe('primeRain', function() {
  describe('handle the right input', function() {
    it('should return plong for 7', function() {
      assert.equal(myApp.primeRain(7),"Plong");
    });
  });

describe('handle the right input', function() {
    it('should return plong for 3', function() {
      assert.equal(myApp.primeRain(3),"Pling");
    });
  });

describe('handle the right input', function() {
    it('should return plang for 5', function() {
      assert.equal(myApp.primeRain(5),"Plang");
    });
  });

describe('handle the right input', function() {
    it('should return plingplang for 1755', function() {
      assert.equal(myApp.primeRain(1755),"PlingPlang");
    });
  });
describe('handle the right input', function() {
    it('should return plingplong for 21', function() {
      assert.equal(myApp.primeRain(21),"PlingPlong");
    });
  });
  
  describe('handle the right input', function() {
    it('should return plingplong for 35', function() {
      assert.equal(myApp.primeRain(35),"PlangPlong");
    });
  });
  describe('handle the right input', function() {
    it('should return plangplang for 2', function() {
      assert.equal(myApp.primeRain(2),2);
    });
  });

describe('handle invalid input', function() {
    it('should return "invalid format" for -7', function() {
      assert.equal(myApp.primeRain(-7),"Invalid format");
    });
  });

describe('handle invalid input', function() {
    it('should return "invalid format" for 7.5', function() {
      assert.equal(myApp.primeRain(7.5),"Invalid format");
    });
  });

describe('handle invalid input', function() {
    it('should return "invalid format" for a string', function() {
      assert.equal(myApp.primeRain("stringvalue"),"Invalid format");
    });
  });


});
