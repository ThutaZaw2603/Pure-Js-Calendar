const output = document.getElementById('output'),
tbody = document.getElementById('tbody'),
forward = document.getElementById('forward'),
backward = document.getElementById('backward'),
monthDisplay = document.getElementById('monthDisplay'),
yearDisplay  = document.getElementById('yearDisplay');

const currentTime = new Date(); console.log(currentTime);

let currentYear = currentTime.getFullYear(),
currentMonth = currentTime.getMonth();

let monthArr = ['Jan','Feb','March','April','May','June','July','August','September','October','Novmenber','December'];

let startCalendar = (year,month) => {
    tbody.innerHTML = '';
    let firstDate = (new Date(year,month)).getDate(),   //this is day like 1st Nov
    firstWeekName  = (new Date(year,month)).getDay(),   //this is date like Mon Wed
    totaldaysInMonth = 32 - new Date(year, month, 32).getDate();  

    monthDisplay.innerHTML = `${monthArr[currentMonth]}`;
    yearDisplay.innerHTML  = `${currentYear}`
    const today = currentTime.getDate(),
    thismonth   = currentTime.getMonth(),
    thisyear    = currentTime.getFullYear();
    for(let i = 0; i<6;i++)
    {
        let row = document.createElement('tr');
            

        for(let j = 0; j<7;j++)
        {
            if(i === 0 && j < firstWeekName)
            {
                const cell = document.createElement('td');
                cell.innerHTML = "";
                row.append(cell);
            }
            else if(firstDate>totaldaysInMonth){
                break;
            }
            else{
                const cell = document.createElement('td');
                cell.innerHTML = firstDate;
                if(firstDate === today && currentMonth === thismonth && currentYear === thisyear)
                {
                    cell.classList.add('today')
                }
                row.append(cell);
        
                firstDate++;
            }
            
        }
        tbody.append(row);    
            
        
    }
    
    console.log(today);

}


startCalendar(currentYear,currentMonth);


forward.addEventListener('click', 
    () => {
        currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        startCalendar(currentYear,currentMonth); console.log(currentYear)
    }
)

backward.addEventListener('click', 
    () => {
        currentYear =  (currentMonth == 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
        startCalendar(currentYear,currentMonth);
    }
)