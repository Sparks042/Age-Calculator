let image = document.getElementById('image');
let yearDash = document.querySelector(".year")
let monthDash = document.querySelector(".month")
let dayDash = document.querySelector(".day")
let dayLabel = document.getElementById("dayLabel")
let monthLabel = document.getElementById("monthLabel")
let yearLabel = document.getElementById("yearLabel")



    image.addEventListener("click", function() {
    let today =  new Date();
    console.log(today)
    let yearInput = document.getElementById("year").value
    let monthInput = document.getElementById('month').value;
    let dayInput = document.getElementById("day").value;
    

    // Check if any of the input fields are empty
    let isDayEmpty = dayInput.value.trim() === "";
    let isMonthEmpty = monthInput.value.trim() === "";
    let isYearEmpty = yearInput.value.trim() === "";

    // If any field is empty, set border to red and label font color to red
    if (isDayEmpty) {
        dayInput.style.border = "2px solid red";
        dayLabel.style.color = "red";
    } else {
        dayInput.style.border = "";
        dayLabel.style.color = "";
    }

    if (isMonthEmpty) {
        monthInput.style.border = "2px solid red";
        monthLabel.style.color = "red";
    } else {
        monthInput.style.border = "";
        monthLabel.style.color = "";
    }

    if (isYearEmpty) {
        yearInput.style.border = "2px solid red";
        yearLabel.style.color = "red";
    } else {
        yearInput.style.border = "";
        yearLabel.style.color = "";
    }

    // check if inputs are empty
    if (yearInput.trim() === "" || monthInput.trim() === "" || dayInput.trim() === "") {
        alert("Please enter your date of birth.");
        return; 
    }
    let userYear = new Date(yearInput)
    let year = today.getFullYear() - userYear.getFullYear();
    let userMonth = new Date(monthInput)
    let userDay = new Date(dayInput);
    let monthDiff = today.getMonth() - userMonth.getMonth();
    const data = yearInput +"-" + monthInput + "-" +dayInput 
    let userDob = new Date(data)
    // for the day
    let day = today.getDate() - userDob.getDate();
    // month logic
    if (today.getDate() < userDob.getDate()) {
        monthDiff--;
        day += 30;
    }
    // year logic
    if (monthDiff < 0) {
        year--;
        monthDiff += 12;
    }
    let month = monthDiff;
    yearDash.textContent = year;
    monthDash.textContent = month;
    dayDash.textContent = day;
    // if(dayInput === ""){
    //     dayInput.style.border = "5px solid red"
    //     dayLabel.color = "red"
    // }
    // else if(monthInput === ""){
    //     monthLabel.style.color = "red"
    // }
    // else if(yearInput === ""){
    //     yearLabel.style.color = "red"
    // }
    // else if (dayInput!== "" && monthInput!== "" && yearInput!== ""){
    //     dayLabel.style.color = "hsl(0, 3%, 45%);"
    //     monthLabel.style.color = "hsl(0, 3%, 45%);"
    //     yearLabel.style.color = "hsl(0, 3%, 45%);"
    // }
})
// omoh javascript just no say i be ur mate
// image.addEventListener("click", function() {
//     if(dayInput.trim() ===""){
//         dayLabel.style.color = "red"
//     }
//     if(monthInput.trim() ===""){
//         monthLabel.style.color = "red"
//     }
//     if(yearInput.trim() ===""){
//         yearLabel.style.color = "red"
//     }
//     else if (dayInput.trim()!== "" || monthInput.trim()!== "" || yearInput.trim()!== ""){
//         dayLabel.style.color = "hsl(0, 3%, 45%);"
//         monthLabel.style.color = "hsl(0, 3%, 45%);"
//         yearLabel.style.color = "hsl(0, 3%, 45%);"
//     }
// })

