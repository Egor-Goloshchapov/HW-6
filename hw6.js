let counter = 1;
while (counter < 11) {
    console.log(counter)
    counter +=1;
}

for (let i = 2; i < 22; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


let numbers = 7;
for (let i = 1; i <= 9; i++) {
    console.log(`${numbers} * ${i} = ${numbers * i}`);
}



let number = 1;
while (counter < 6) {
    console.log(number)
    counter +=1;
}


for (let i = 0; i < 11; i++) {
    if (i === 7) {
        continue;
    } else {
        console.log(i);
    }
}  



let nums = [1, 2, 3, 7, 4, 5];
let n = 4;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= n) {
        break;
    }
    console.log(nums[i]);
}



let num = 0;
while (num < 20) {
    num += 1;
    console.log(num)
if (num % 3 !== 0) {
    continue;
} else {
    console.log(num)
}
}


