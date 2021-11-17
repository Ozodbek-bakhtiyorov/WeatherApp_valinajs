const api = {
     key :'6cdb95416d90a7bd3010d699ac8b26ce',
    baseurl:'https://api.openweathermap.org/data/2.5/',

};
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);
function setQuery(e){
    if(e.keyCode == 13 ){
        getResult(searchBox.value);
    }
}
function getResult (query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather=>{return weather.json()})
        .then(displayResults);
}
function displayResults(weather){
    const  city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date() ;
    console.log(weather);
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp )} <span>°C</span> `;

    let weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hight-low');
    hilow.innerHTML = `${weather.main.temp_min}<span>°C</span> / ${weather.main.temp_max}<span>°C</span> `;
}
function dateBuilder(s){
     let months = ['January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December'],
          days = [
             'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        ' Thursday',
        'Friday',
        'Saturday'
        ];
     let day = days[s.getDay()],
         date=s.getDate(),
         month =  months[s.getMonth()],
         year = s.getFullYear();

     return `${day},${date}, ${month}, ${year}`;

}
