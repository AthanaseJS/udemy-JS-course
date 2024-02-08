const currentYear = new Date().getFullYear();
console.log(currentYear);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array();
const totals = new Array();

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
  console.log(`bill - ${bills[i]}, tip - ${tips[i]}, totals - ${totals[i]}`);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return arr.length == 0 ? 0 : sum / arr.length;
};

console.log(
  `Average bill is ${calcAverage(bills)}, average  tip is ${calcAverage(
    tips
  )}, average total is ${calcAverage(totals)}`
);
