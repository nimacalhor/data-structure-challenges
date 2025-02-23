var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var people = [
    {
        id: 1,
        name: "Ali",
        score: 1,
    },
    {
        id: 3,
        name: "John",
        score: 3,
    },
    {
        id: 4,
        name: "Fred",
        score: 4,
    },
    {
        id: 2,
        name: "Mohammad",
        score: 2,
    },
];
function scoreNamesWithA(list) {
    var newList = list.map(function (person) {
        if (person.name.toLowerCase().includes("a")) {
            return __assign(__assign({}, person), { score: 20 });
        }
        else
            return __assign({}, person);
    });
    return newList;
}
var newList = scoreNamesWithA(people);
console.log(JSON.stringify(people));
console.log(JSON.stringify(newList));
console.log("updating newList ________________________________________________________________________________");
newList[0].name = "new new new new name";
console.log(people[0].name);
console.log(newList[0].name);
