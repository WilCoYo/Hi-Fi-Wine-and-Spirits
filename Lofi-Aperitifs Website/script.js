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



const loginAlert = () => {
  alert('Without verifying your age, you can try emailing or calling us for more information at:\n \nEmail: hifiwineandspirits@fakeemail.com \nPhone: (555)555-5555');
}











// Functinon to show and hide Recipes on Desktop and Mobile


const manhattanRecipe = () => {
  if(document.getElementById('manhattan-recipe').style.display === "none"){
    document.getElementById('manhattan-recipe').style.display = '';
    document.getElementById('manhattan-caption').style.display = 'none';
  } else {
    document.getElementById('manhattan-recipe').style.display = 'none';
    document.getElementById('manhattan-caption').style.display = '';
  }

}

const manhattanRecipeMobile = () => {
  if(document.getElementById("mobile-manhattan-recipe").style.display === "none"){
    document.getElementById("mobile-manhattan-recipe").style.display = '';
    document.getElementById('manhattan-Recipe-Button').innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-manhattan-recipe").style.display = 'none';
    document.getElementById('manhattan-Recipe-Button').innerHTML = "SHOW RECIPE"
  }
 
}





const martiniRecipe = () => {
  if(document.getElementById('martini-recipe').style.display === "none"){
    document.getElementById('martini-recipe').style.display = '';
    document.getElementById('martini-caption').style.display = 'none';
  } else {
    document.getElementById('martini-recipe').style.display = 'none';
    document.getElementById('martini-caption').style.display = '';
  }

}

const martiniRecipeMobile = () => {
  if(document.getElementById("mobile-martini-recipe").style.display === "none"){
    document.getElementById("mobile-martini-recipe").style.display = '';
    document.getElementById("martini-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-martini-recipe").style.display = 'none';
    document.getElementById("martini-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const amaropinkRecipe = () => {
  if(document.getElementById('amaropink-recipe').style.display === "none"){
    document.getElementById('amaropink-recipe').style.display = '';
    document.getElementById('amaro-pink-caption').style.display = 'none';
  } else {
    document.getElementById('amaropink-recipe').style.display = 'none';
    document.getElementById('amaro-pink-caption').style.display = '';
  }

}

const amaropinkRecipeMobile = () => {
  if(document.getElementById("mobile-amaropink-recipe").style.display === "none"){
    document.getElementById("mobile-amaropink-recipe").style.display = '';
    document.getElementById("amaropink-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-amaropink-recipe").style.display = 'none';
    document.getElementById("amaropink-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}



const highpointRecipe = () => {
  if(document.getElementById('highpoint-recipe').style.display === "none"){
    document.getElementById('highpoint-recipe').style.display = '';
    document.getElementById('highpoint-caption').style.display = 'none';
  } else {
    document.getElementById('highpoint-recipe').style.display = 'none';
    document.getElementById('highpoint-caption').style.display = '';
  }

}

const highpointRecipeMobile = () => {
  if(document.getElementById("mobile-highpoint-recipe").style.display === "none"){
    document.getElementById("mobile-highpoint-recipe").style.display = '';
    document.getElementById("highpoint-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-highpoint-recipe").style.display = 'none';
    document.getElementById("highpoint-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const vtRecipe = () => {
  if(document.getElementById('vt-recipe').style.display === "none"){
    document.getElementById('vt-recipe').style.display = '';
    document.getElementById('vt-caption').style.display = 'none';
  } else {
    document.getElementById('vt-recipe').style.display = 'none';
    document.getElementById('vt-caption').style.display = '';
  }

}

const vtRecipeMobile = () => {
  if(document.getElementById("mobile-vt-recipe").style.display === "none"){
    document.getElementById("mobile-vt-recipe").style.display = '';
    document.getElementById("vt-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-vt-recipe").style.display = 'none';
    document.getElementById("vt-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const pinkhighballRecipe = () => {
  if(document.getElementById('pinkhighball-recipe').style.display === "none"){
    document.getElementById('pinkhighball-recipe').style.display = '';
    document.getElementById('pinkhighball-caption').style.display = 'none';
  } else {
    document.getElementById('pinkhighball-recipe').style.display = 'none';
    document.getElementById('pinkhighball-caption').style.display = '';
  }

}

const pinkhighballRecipeMobile = () => {
  if(document.getElementById("mobile-pinkhighball-recipe").style.display === "none"){
    document.getElementById("mobile-pinkhighball-recipe").style.display = '';
    document.getElementById("pinkhighball-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-pinkhighball-recipe").style.display = 'none';
    document.getElementById("pinkhighball-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const lotusRecipe = () => {
  if(document.getElementById('lotus-recipe').style.display === "none"){
    document.getElementById('lotus-recipe').style.display = '';
    document.getElementById('lotus-caption').style.display = 'none';
  } else {
    document.getElementById('lotus-recipe').style.display = 'none';
    document.getElementById('lotus-caption').style.display = '';
  }

}

const lotusRecipeMobile = () => {
  if(document.getElementById("mobile-lotus-recipe").style.display === "none"){
    document.getElementById("mobile-lotus-recipe").style.display = '';
    document.getElementById("lotus-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-lotus-recipe").style.display = 'none';
    document.getElementById("lotus-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}



const pinkbeerRecipe = () => {
  if(document.getElementById('pinkbeer-recipe').style.display === "none"){
    document.getElementById('pinkbeer-recipe').style.display = '';
    document.getElementById('pinkbeer-caption').style.display = 'none';
  } else {
    document.getElementById('pinkbeer-recipe').style.display = 'none';
    document.getElementById('pinkbeer-caption').style.display = '';
  }

}

const pinkbeerRecipeMobile = () => {
  if(document.getElementById("mobile-pinkbeer-recipe").style.display === "none"){
    document.getElementById("mobile-pinkbeer-recipe").style.display = '';
    document.getElementById("pinkbeer-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-pinkbeer-recipe").style.display = 'none';
    document.getElementById("pinkbeer-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const beesmokerRecipe = () => {
  if(document.getElementById('beesmoker-recipe').style.display === "none"){
    document.getElementById('beesmoker-recipe').style.display = '';
    document.getElementById('beesmoker-caption').style.display = 'none';
  } else {
    document.getElementById('beesmoker-recipe').style.display = 'none';
    document.getElementById('beesmoker-caption').style.display = '';
  }

}

const beesmokerRecipeMobile = () => {
  if(document.getElementById("mobile-beesmoker-recipe").style.display === "none"){
    document.getElementById("mobile-beesmoker-recipe").style.display = '';
    document.getElementById("beesmoker-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-beesmoker-recipe").style.display = 'none';
    document.getElementById("beesmoker-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const whiteElephantRecipe = () => {
  if(document.getElementById('whiteElephant-recipe').style.display === "none"){
    document.getElementById('whiteElephant-recipe').style.display = '';
    document.getElementById('whiteElephant-caption').style.display = 'none';
  } else {
    document.getElementById('whiteElephant-recipe').style.display = 'none';
    document.getElementById('whiteElephant-caption').style.display = '';
  }

}

const whiteElephantRecipeMobile = () => {
  if(document.getElementById("mobile-whiteElephant-recipe").style.display === "none"){
    document.getElementById("mobile-whiteElephant-recipe").style.display = '';
    document.getElementById("whiteElephant-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-whiteElephant-recipe").style.display = 'none';
    document.getElementById("whiteElephant-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const extradryRecipe = () => {
  if(document.getElementById('extradry-recipe').style.display === "none"){
    document.getElementById('extradry-recipe').style.display = '';
    document.getElementById('extradry-caption').style.display = 'none';
  } else {
    document.getElementById('extradry-recipe').style.display = 'none';
    document.getElementById('extradry-caption').style.display = '';
  }

}

const extradryRecipeMobile = () => {
  if(document.getElementById("mobile-extradry-recipe").style.display === "none"){
    document.getElementById("mobile-extradry-recipe").style.display = '';
    document.getElementById("extradry-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-extradry-recipe").style.display = 'none';
    document.getElementById("extradry-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const saturnreturnsRecipe = () => {
  if(document.getElementById('saturnreturns-recipe').style.display === "none"){
    document.getElementById('saturnreturns-recipe').style.display = '';
    document.getElementById('saturnreturns-caption').style.display = 'none';
  } else {
    document.getElementById('saturnreturns-recipe').style.display = 'none';
    document.getElementById('saturnreturns-caption').style.display = '';
  }

}

const saturnreturnsRecipeMobile = () => {
  if(document.getElementById("mobile-saturnreturns-recipe").style.display === "none"){
    document.getElementById("mobile-saturnreturns-recipe").style.display = '';
    document.getElementById("saturnreturns-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-saturnreturns-recipe").style.display = 'none';
    document.getElementById("saturnreturns-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const americanoRecipe = () => {
  if(document.getElementById('americano-recipe').style.display === "none"){
    document.getElementById('americano-recipe').style.display = '';
    document.getElementById('americano-caption').style.display = 'none';
  } else {
    document.getElementById('americano-recipe').style.display = 'none';
    document.getElementById('americano-caption').style.display = '';
  }

}

const americanoRecipeMobile = () => {
  if(document.getElementById("mobile-americano-recipe").style.display === "none"){
    document.getElementById("mobile-americano-recipe").style.display = '';
    document.getElementById("americano-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-americano-recipe").style.display = 'none';
    document.getElementById("americano-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const lofispritzRecipe = () => {
  if(document.getElementById('lofispritz-recipe').style.display === "none"){
    document.getElementById('lofispritz-recipe').style.display = '';
    document.getElementById('lofispritz-caption').style.display = 'none';
  } else {
    document.getElementById('lofispritz-recipe').style.display = 'none';
    document.getElementById('lofispritz-caption').style.display = '';
  }

}

const lofispritzRecipeMobile = () => {
  if(document.getElementById("mobile-lofispritz-recipe").style.display === "none"){
    document.getElementById("mobile-lofispritz-recipe").style.display = '';
    document.getElementById("lofispritz-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-lofispritz-recipe").style.display = 'none';
    document.getElementById("lofispritz-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}




const pinkpalomaRecipe = () => {
  if(document.getElementById('pinkpaloma-recipe').style.display === "none"){
    document.getElementById('pinkpaloma-recipe').style.display = '';
    document.getElementById('pinkpaloma-caption').style.display = 'none';
  } else {
    document.getElementById('pinkpaloma-recipe').style.display = 'none';
    document.getElementById('pinkpaloma-caption').style.display = '';
  }

}

const pinkpalomaRecipeMobile = () => {
  if(document.getElementById("mobile-pinkpaloma-recipe").style.display === "none"){
    document.getElementById("mobile-pinkpaloma-recipe").style.display = '';
    document.getElementById("pinkpaloma-recipe-button").innerHTML = "HIDE RECIPE"
  } else {
    document.getElementById("mobile-pinkpaloma-recipe").style.display = 'none';
    document.getElementById("pinkpaloma-recipe-button").innerHTML = "SHOW RECIPE"
  }
 
}


























