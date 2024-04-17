document.getElementById("ageCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var dob = new Date(document.getElementById("dob").value);
    var now = new Date();
    
    var age = now.getFullYear() - dob.getFullYear();
    var monthDiff = now.getMonth() - dob.getMonth();
    var dayDiff = now.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerText = "Your age is: " + age;
});
