
const clock = document.querySelector('#clock-timer')

function getClock(){
    const date1 = new Date(2022, 12, 25);
    const date2 = new Date();
    var date= date1-date2
    console.log(date)
    date=date/1000

    const d_date = Math.floor(date/86400);
    date=date-d_date*86400;

    const hours = Math.floor(date/3600);
    date=date-hours*3600;

    const minutes = Math.floor(date/60);
    date=date-minutes*60;

    const seconds = Math.floor(date);
    
    const time_limit=`${String(d_date).padStart(2,"0")}d ${String(hours).padStart(2,"0")}h ${String(minutes).padStart(2,"0")}m ${String(seconds).padStart(2,"0")}s`
    clock.innerText = time_limit
    
   
    
}

getClock()
setInterval(getClock, 1000)