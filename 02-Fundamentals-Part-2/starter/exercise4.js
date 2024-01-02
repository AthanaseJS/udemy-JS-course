const years = [1991, 2007, 1968, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(years);
console.log(ages);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`--Starting repetition ${rep} XXX`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`--Starting rep ${rep} XXX`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled ${dice}`);
