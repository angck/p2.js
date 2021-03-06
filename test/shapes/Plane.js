var Plane = require(__dirname + '/../../src/shapes/Plane');
var AABB = require(__dirname + '/../../src/collision/AABB');

exports.construct = function(test){
    var plane = new Plane();
    test.done();
};

exports.computeAABB = function(test){
	var plane = new Plane();
	var aabb = new AABB();
    plane.computeAABB(aabb, [0,0], 0);
    test.done();
};

exports.computeMomentOfInertia = function(test){
    test.equal((new Plane()).computeMomentOfInertia(), 0);
    test.done();
};

exports.updateBoundingRadius = function(test){
	var plane = new Plane();
    plane.updateBoundingRadius();
    test.ok(plane.boundingRadius > 0);
    test.done();
};

