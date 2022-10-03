let weather1 = {
    "apiKey":"6fa6e4a828f2f30f018a8fd4aad8b116",
     fetchWeather1: function(latitude,longitude){
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="
        +latitude +
        "&lon=" 
        +longitude+
        "&exclude=hourly,daily&appid="
        +this.apiKey)
         .then((response) => response.json())
         .then((data) => this.displayWeather(data))
         
         ;
     },

     displayWeather: function(data){
        const { name } = data;
        const {icon, description } = data.weather1[0];
        const {temp, humidity } = data.main;
        const {speed} = data.wind;
        
         
    },
    search: function(){ 
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    }; 
       
   
 

document.querySelector(".search button").addEventListener("click", function(){
   weather.search();
});

document
.querySelector(".search-bar").
addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
 

