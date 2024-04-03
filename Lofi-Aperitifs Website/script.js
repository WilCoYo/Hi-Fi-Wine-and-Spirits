/*This fuction determines if the user is over the age of 21*/

const underageChecker = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let inputDay = document.getElementById('day');
    let inputMonth = document.getElementById('month');
    let inputYear = document.getElementById('year');


    /*Logic to check for non-numeric inputs before parseInt*/

    const onlyContainsNumbers = (str) => /^\d+$/.test(str);
    if(onlyContainsNumbers(inputDay)|| onlyContainsNumbers(inputMonth) || onlyContainsNumbers(inputYear)){
        alert('Please enter valid birthdate values.');
        return;
    }

    /*Convert input strings to integers for logic*/ 

    let inputDayValue = parseInt(inputDay.value);
    let inputMonthValue = parseInt(inputMonth.value);
    let inputYearValue = parseInt(inputYear.value);

    /*Full logic to check if birthdates are valid*/

    if (Number.isNaN(inputDayValue) || Number.isNaN(inputMonthValue) || Number.isNaN(inputYearValue)) {
        alert('Please enter valid birthdate values.');
        return;
    } else if(inputDayValue > 31 || inputDayValue <= 0 || inputMonthValue > 12 || inputMonthValue <= 0){
        alert('Please enter valid birthdate');
        return;
    } else if ((year - inputYearValue) > 21 || ((year - inputYearValue) === 21 && month > inputMonthValue) || ((year - inputYearValue) === 21 && month === inputMonthValue && day >= inputDayValue)) {
        window.location.href = "./Lofi-Aperitifs Website/homepage.html"
    } 
    else {
        alert("I'm sorry but you are not old enough to view this content.");
    }
};


window.onscroll = function() {
  scrollFunction()
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("upperNav").style.display = "none";
    document.querySelector("header").style.height = '7rem';
    document.querySelector("lowerNav").style.margin = "1.5rem";
  } else if (window.screen.width > 1080){
    document.getElementById("upperNav").style.display = "";
    document.querySelector("header").style.height = "16rem";
    document.querySelector("lowerNav").style.margin = "";
  } else {
    document.getElementById("upperNav").style.display = "";
    document.querySelector("header").style.height = "14rem";
    document.querySelector("lowerNav").style.margin = "";
  }

}

















