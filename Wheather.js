const a = "https://api.openweathermap.org/data/2.5/weather?q=";
const b = "&appid=f63b9e97f16691507029e4103acca06f"
const searchBox = document.querySelector(".secinpt input");
const searchBut = document.querySelector(".secinpt button");
const imgChange = document.querySelector("#cloud");

async function getWheather(city){

    const pro = await fetch(a+city+b);
    // console.log(pro);
    const chane = await pro.json();
    console.log(chane);
    document.querySelector(".city").innerHTML= chane.name;
    document.querySelector(".degree").innerHTML = Math.round((chane.main.temp)-273.15)+ "°C";//-273.15 is a kelvin value
    document.querySelector(".detlspercentage").innerHTML = (chane.main.humidity)+"%";
    document.querySelector(".detlswindspeed").innerHTML = (chane.wind.speed)+"km/h";

    if(chane.weather[0].main == "Clouds"){
        imgChange.src = "Elements/clouds.png";
    }
    else if (chane.weather[0].main == "Clear"){
        imgChange.src = "Elements/clear.png";
    }
    else if(chane.weather[0].main == "Rain"){
        imgChange.src = "Elements/rain.png";
    }
    else if(chane.weather[0].main == "Drizzle"){
        imgChange.src = "Elements/drizzle.png";
    }
    else if(chane.weather[0].main == "Mist"){
        imgChange.src = "Elements/mist.png";
    }

}

searchBut.addEventListener("click",function(){
    getWheather(searchBox.value);
})

// const key =`f63b9e97f16691507029e4103acca06f`;

// fetch(key)  bangalore
// .then(respone=>{
//     if(Response.ok){
//         console.log("done")
//     }
//     else{console.log("not done")}
// })
