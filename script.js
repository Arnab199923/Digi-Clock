const hrele=document.getElementById("hour")
const miele=document.getElementById("minute")
const seele = document.getElementById("second")
const apele = document.getElementById("am")

function timeClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let a = "AM"

    if(h>12){
        h = h-12
        a = "PM"
        
    }

    h = h<10 ? "0"+ h : h;
    m = m<10 ? "0"+ m : m;
    s = s<10 ? "0"+ s : s;

    hrele.innerText=h;
    miele.innerText=m;
    seele.innerText=s;
    apele, (innerText=a)

    setTimeout(() => {
        timeClock();
    }, 1000);
}

timeClock()