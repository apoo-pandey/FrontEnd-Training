import { Weather,Forecastday } from "./types";
let flag :number=0;
function toGet():void{
    const val:string=(document.querySelector("input") as HTMLInputElement).value;
    const url :string=`http://api.weatherapi.com/v1/forecast.json?key=b155dd7eedf842bd87e102249232208&q=${val}&days=5&aqi=no&alerts=no`;
    fetch(url)
    .then((response)=>{
     return response.json();
    })
    .then((data:Weather)=>{
     console.log("data:", data.forecast.forecastday);
     toDisplaycurr(data.current);
     toDisplay(data.forecast.forecastday);
    })
    .catch((error)=>{
     console.log("error:", error);
    })
 }

 function toDisplay(data:Forecastday[]){
    for(let i=0;i<data.length;i++){
        const el=document.querySelector("#list") as HTMLUListElement;
        const url=data[i].day.condition.icon;
        el.innerHTML+="<li>"+"<img src="+url+">"+"</li>";
        el.innerHTML+="<li>"+"MAX-TEMP:"+data[i].day.maxtemp_c+"℃"+"</li>";
        el.innerHTML+="<li>"+"MIN-TEMP:"+data[i].day.mintemp_c+"℃"+"</li>";
        el.innerHTML+="<li>"+"HUMIDITY:"+data[i].hour[i].humidity+"</li>"+"<br>";
        //data[i].day.condition.icon
    }
 }

 //to add curr
 function toDisplaycurr(data){
    console.log(data);
    const ele=document.querySelector("#list") as HTMLUListElement;
    ele.innerHTML="";
    console.log(data.temp_c);
    ele.innerHTML+="<li>"+"Current temp:" +data.temp_c+"℃"+"</li>";
 }
