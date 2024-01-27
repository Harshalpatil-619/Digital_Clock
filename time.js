setInterval(showTime ,1000);


function showTime(){
   

    let tim =new Date();
    let hour = tim.getHours();
    let min= tim.getMinutes();
    let sec= tim.getSeconds();
    am_pm ="AM";

    if(hour>=12){
        if(hour > 12) hour-=12;
        am_pm="PM";
    }
    else if (hour ==0){
        am_pm="AM";
    }

    hour =hour<10 ? "0"+hour:hour;
    min =min<10 ? "0"+min :min;
    sec =sec<10 ? "0"+sec :sec;

    let CurrentTime= hour+":"+min+":"+sec+ " "+am_pm;
    document.getElementById("clock").innerHTML=CurrentTime;

}
showTime();