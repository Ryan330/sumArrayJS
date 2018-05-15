//Create Array
var numList = [41, 20, 33, 69];


//Sum Numbers
function sumNumbers() {
    var sum = 0;

    for (var i = 0; i < numList.length; i++) {
        sum += numList[i];
    }
    console.log(sum);
    return sum;
}


sumNumbers();