var shader = null;
var scene = null;
var map = null;

function main() {
     map =          [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,4],
                    [4,2,2,2,2,2,2,2,2,0,2,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,4],
                    [4,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,4],
                    [4,2,2,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,4],
                    [4,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,4],
                    [4,0,0,0,2,2,2,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,2,0,0,2,2,2,0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4],
                    [4,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,2,2,2,2,0,0,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,4], //change the 2 here to 2.01 after
                    [4,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0,0,0,1,0,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,4],
                    [4,0,0,0,2,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2,0,0,2,0,0,2,2,2,2,0,0,4],
                    [4,0,2,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,0,2,0,0,0,0,2,0,0,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,4],
                    [4,0,2,0,0,2,2,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,4],
                    [4,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,4],
                    [4,0,2,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,4],
                    [4,0,0,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,4],
                    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];

    var path =     [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];    //PATH ARRAY

  var water =    [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,4],
                 [4,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
                 [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];    //WATER ARRAY

  var lava =    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]; //LAVA ARRAY

  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");
  var hud = document.getElementById("hud");
  var gameover = document.getElementById("gameover");
  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  var ctx = hud.getContext('2d');
  var end = gameover.getContext('2d');
  if (!gl || !ctx || !end) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  var light = new Light(5, 35 ,5);

  // Initialize the scene
  scene = new Scene();
  scene.setLight(light);
  var camera = new Camera();

  var inputHandler = new InputHandler(canvas,hud,gameover, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");
  shader.addAttribute("a_Normal");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);


  shader.addUniform("u_LightPos", "vec3", new Vector3().elements);
  shader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);
  var idMatrix = new Matrix4();




  // Initialize shader
  newShader = new Shader(gl, ASG5_VSHADER, ASG5_FSHADER);

  // Add attibutes
  newShader.addAttribute("a_Position");
  newShader.addAttribute("a_Color");
  newShader.addAttribute("a_TexCoord");
  newShader.addAttribute("a_Normal");

  newShader.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  newShader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);

  newShader.addUniform("u_ViewMatrix", "mat4", idMatrix.elements);
  newShader.addUniform("u_ProjectionMatrix", "mat4", idMatrix.elements);

  newShader.addUniform("u_LightPos", "vec3", new Vector3().elements);
  newShader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  newShader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  newShader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);
 //  load sky
  inputHandler.readTexture("objs/eyes.jpg", function(image) {
     var sky = new skyCube(shader,0,0,0,64,image,[1,0,0,1]);
     scene.addGeometry(sky);
  })
  // Load ground
  inputHandler.readTexture("objs/wooden5.jpg", function(image) {
    var ground = new Square(shader,0,-1,0,32,image,[1,0,0,1]);
    scene.addGeometry(ground);
})
//load winner ground
inputHandler.readTexture("objs/dirt.jpg", function(image) {
  var ground = new Square(shader,0,-1,0,1,image,[1,0,0,1]);
  scene.addGeometry(ground);
})
// load walls

    inputHandler.readTexture("objs/block.jpg", function(image) {
    for(var i = 0; i < map.length; i++){
      for(var j = 0; j < map[i].length; j++){
          if((map[i][j] != 0)) {
            if((map[i][j]!=2.01)){
              var wallCube = new Walls(shader, -16 + i, -0.5, -16 + j, 0.5, map[i][j], image,[1,0,0,1]);
              scene.addGeometry(wallCube);
            }
          }
        }
      }
    })

//load path
    inputHandler.readTexture("objs/wooden.jpg", function(image) {
    for(var i = 0; i < path.length; i++){
      for(var j = 0; j < path[i].length; j++){
          if((path[i][j] != 0)) {
            if((path[i][j]!=2.01)){
              var pathWall = new Cube(shader, -16 + i, -0.5, -16 + j, 0.5, path[i][j], image,[1,0,0,1]);
              scene.addGeometry(pathWall);
            }
          }
        }
      }
    })

//lava puddles

    inputHandler.readTexture("objs/water.jpg", function(image){
      for(var i = 0; i < lava.length; i++){
        for(var j = 0; j < lava[i].length; j++){
          if((lava[i][j] != 0)) {
            if((lava[i][j]!=2.01)){
              //var puddle = new Walls(shader, -16 + i, -1.47, -16 + j, 0.5, lava[i][j], image,[1,0,0,1]);
              var puddle = new Cube(shader, -16 + i, -1.47, -16 + j, 0.5, lava[i][j], image,[1,0,0,1]);
              scene.addGeometry(puddle);
            }
          }
        }
      }
    })



  inputHandler.readTexture("objs/door.jpg", function(image) {
      var doorCube = new Walls(shader, -16 + 16, -0.5, -16 + 4, 0.5, map[16][4], image,[1,0,0,1]);
      scene.addGeometry(doorCube);
  })

  var sphere1 = new Sphere(newShader, 20,0,20,0); // (shader,segment,x,y,z);
  scene.addGeometry(sphere1);

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl,ctx,end, scene, camera);
  renderer.start();


}
