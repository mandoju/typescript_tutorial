var message = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode" + 4);
episode = episode + 1;
console.log("The next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcum? " + (isEnoughtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));