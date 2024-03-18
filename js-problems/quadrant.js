// Find the quadrant Given coordinates of a point (x,y) in 2D plane, 
// find in which quadrant does this point lie.

function findQuadrant(x, y) {
    if(x >= 0 && y >= 0){
        return "1";
    } else if(y >= 0 && x <= 0){
        return "2";
    } else if(x <= 0 && y <= 0){
        return "3";
    } else if(y <= 0 && x >= 0){
        return "4";
    };
};

let ans = findQuadrant(-1, -2);
console.log(ans);