const funcs = [];
for (let i = 0; i < 3; i++) {
funcs.push(function() {
console.log(i);
});
}
for (let j = 0; j < funcs.length; j++) {
funcs[j](); // should output 0, then 1, then 2
}