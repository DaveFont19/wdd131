const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let week = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]
for(j = 0; j < week.length; j++){
    console.log(week[j]);
}
let i = 0
while(i < studentReport.length){
    console.log(studentReport[i]);
    i++;
}
studentReport.forEach((s) => {
    console.log(s)
});

for(let i in studentReport){
    console.log(studentReport[i]);
}