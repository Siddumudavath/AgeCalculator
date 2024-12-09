let x = document.getElementById("date");
x.max = new Date().toISOString().split("T")[0];
let birthDate=document.getElementById("a")

function age() {
    let dateOfBirth = new Date(x.value);
    let d = dateOfBirth.getDate();
    let m = dateOfBirth.getMonth() + 1; 
    let y = dateOfBirth.getFullYear();

    let currentdate = new Date();
    let d1 = currentdate.getDate();
    let m1 = currentdate.getMonth() + 1; 
    let y1 = currentdate.getFullYear();

    let d2, m2, y2;
    y2 = y1 - y;

    if (m1 >= m) {
        m2 = m1 - m;
    } else {
        y2--; //  if the current month is less than the birth month
        m2 = 12 + m1 - m;
    }

    if (d1 >= d) {
        d2 = d1 - d;
    } else {
        m2--; //  if the current date is less than the birth date
        d2 = fun(y1, m1 - 1) + d1 - d; // Use the previous month's days
    }

    if (m2 < 0) {
        m2 = 11;
        y2--; // Adjust year when month becomes negative
    }

   let color= birthDate.innerHTML=(`you are : Age: ${y2} years, ${m2} months, and ${d2} days  old`);
    color.style.marginRight="200px"
    color.style.color="white"
}

function fun(year, month) {
    return new Date(year, month, 0).getDate(); 
}
