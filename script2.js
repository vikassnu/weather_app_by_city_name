const timeE1 = document.getElementById('time');
const currentweatheritemsE1 = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1= document.getElementById('country');
const timeE2 = document.getElementById('display_day');
const timeE3 = document.getElementById('display_day');

months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const API_KEY = '6fa6e4a828f2f30f018a8fd4aad8b116';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const year = time.getFullYear();
    const date = time.getDate();
    const day = time.getDay();
    
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >=13 ? hour %12: hour
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hour >=12 ? 'PM' : 'AM'
 
    timeE1.innerHTML = hoursIn12HrFormat+":" +minutes+ ampm +" " +day + "/" +month + "/"+year;
    
    timeE2.innerHTML = "today           " +day +" "+ months[month];

    timeE3.innerHTML = date
    
} ,1000);

getWeatherData()
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((sucsess) => {
        let {latitude, longitude} = sucsess.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => this.showweatherData(data))
    }
    )
}
function showweatherData(){
     
    timeE1.innerHTML = daat.timeE1
    timezone.innerHTML = data.timezone;
    countryE1.innerHTML =data.latitude + 'N' + data.longitude +'E'
    ;

    
        
}