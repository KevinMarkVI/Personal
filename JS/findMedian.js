var find_deviation = function(v, d) {
    var medians = [];
    var result = 0;
    
    var helper = function(sequence) {
        var max = sequence[0];
        var min = sequence[0];
        for (var j = 1; j < sequence.length; j++) {
            if (sequence[j] < min) {
                min = sequence[j];
            } else if (sequence[j] > max) {
                max = sequence[j];
            }
        }
    };
    for (var i = 0; i < v.length; i++) {
        if (v[i+(d-1)]) {
            medians.push(helper(v.slice(i, i+d)));
        }
    }

    for (var k = 0; k < medians.length; k++) {
        if (medians[k] > result) {
            result = medians[k];
        }
    }
    console.log(result);
};

// var produceArrs = function(v, d) {
//     var finalArrs = [];
//     var arr = [];
//     var mainIndex = 0;
//     var startIndex = 0;
//     while (arr.length <= d) {
//         arr.push(v[index]);
//         index++;
//     }
//     return finalArrs;
// };