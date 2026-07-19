let k = new Date();

console.log(k.toLocaleDateString('en-GB'));   //  18/07/2026

console.log(k.toDateString());    // Sat Jul 18 2026


console.log(`${k.getHours()}:${k.getMinutes()}:${k.getMilliseconds()}`);   //21:46:433