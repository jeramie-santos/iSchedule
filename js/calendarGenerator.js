const container = document.querySelector('.calendar-container');
const monthContainer = document.querySelector('.calendar__month');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calendarCell = document.querySelectorAll('.key');
const calendarPrev = document.querySelector('#calendar__prev');
const calendarNext = document.querySelector('#calendar__next');

let nextMonthActive = false;

let date = new Date();
InitialSetup();


calendarNext.addEventListener('click', nextMonthBtn);
calendarPrev.addEventListener('click', prevMonthBtn);

function nextMonthBtn(){
    if(!nextMonthActive){
        let nextMonth = months[date.getMonth()+1];
        let year = date.getFullYear();
        if(nextMonth == 'January') year++;
        date = new Date(`${nextMonth} 1, ${year}`);
        nextMonthActive = true;
        InitialSetup();
        console.log('testing' + ' ' + nextMonthActive);
    }
    else{
        alert('TEMPORARY NOTIF TESTING(gawing modal) Maari lamang mag schedule ng appointment ngayong buwan o sa susunod na buwan.');
    }
}

function prevMonthBtn(){
    if(nextMonthActive){
        let nextMonth = months[date.getMonth()-1];
        let year = date.getFullYear();
        if(nextMonth == 'December') year--;
        date = new Date(`${nextMonth} 1, ${year}`);
        nextMonthActive = false;
        InitialSetup();
        console.log('testing' + ' ' + nextMonthActive);
    }
    else{ 
        alert('TEMPORARY NOTIF TESTING(gawing modal) Hindi maaring mag schedule ng appointment sa nakaraang buwan.');
    }
}


function InitialSetup(){
    let currentMonth = months[date.getMonth()];
    monthContainer.innerHTML = currentMonth;
    let numOfDays = getDaysOfMonth(date.getFullYear(), date.getMonth());
    let firstDayOfMonth = getDayOfFirstDate(date.getFullYear(), months[date.getMonth()]);

    generateDate(numOfDays, firstDayOfMonth);
}
    
function generateDate(days, NameOfDay1st){
    let startingPoint = NameOfDay1st; //kinukuha kung anong araw yung 1st ng month para lam natin san mag start
    let numOfIteration = days + NameOfDay1st; //kaya nag add ng NameOfDay1st kasi if ma move konwari ng +2 yung starting point dapat yung end point din
    let date = 1; //counter ng date kasi di pede yung i kasi yun yung posisyon nung cell
    const sixthRow = document.querySelector('.sixthRow');

    sixthRow.style.display = 'flex';

    // Resetting each calendarCell
    calendarCell.forEach((item)=>{
        item.innerHTML = "";
    });

    for(i = startingPoint; i < numOfIteration; i++ ){
        //gives value of date then increment, di kasama increment sa ibibigay
        calendarCell[i].innerHTML = date++;
        calendarCell[i].classList.add('date');
        calendarCell[i].classList.remove('block');

        if(calendarCell[i].id == 'block'){
            calendarCell[i].classList.add('block');
        }
    }

    calendarCell.forEach((item)=>{
        if(item.innerHTML == "") {
            item.classList.remove('date');
            // item.classList.add('block');
            item.innerHTML = 'X';
        }

        // Checks if the sixth row contains a date if none hide it
        let sixthRowChildren = sixthRow.children;
        let counterOfEmpty = 0

        for(i = 0; i < sixthRowChildren.length; i++){
            if(sixthRowChildren[i].innerHTML == 'X') counterOfEmpty++;
        }

        if(counterOfEmpty == 7) sixthRow.style.display = 'none';
        
    });

}

function getDaysOfMonth(year, month){
    // adds 1 to month kasi yung kinukuha nating month sa getMonth is 0 yung january, 11 december
    return new Date(year, month+1, 0).getDate();
};

function getDayOfFirstDate(year, month){
    let dateString = `${month} 1, ${year}`;
    let tempDate = new Date(dateString);

    return tempDate.getDay();
    // 0 = sunday and 6 = saturday
}
