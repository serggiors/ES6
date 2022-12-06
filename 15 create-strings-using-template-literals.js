const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const [...rest] = arr;
  const failureItems = [];
  for (let i = 0; i < arr.length; i++){
    //failureItems.push('<li class="text-warning">'+rest[cont]+'</li>');
    failureItems.push(`<li class="text-warning">${rest[i]}</li>`);
  }
  //console.log(failureItems)
return failureItems;
  // Only change code above this line
}
const failuresList = makeList(result.failure);