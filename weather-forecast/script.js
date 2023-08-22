"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flag = 0;
function toGet() {
    var val = document.querySelector("input").value;
    var url = "http://api.weatherapi.com/v1/forecast.json?key=b155dd7eedf842bd87e102249232208&q=".concat(val, "&days=5&aqi=no&alerts=no");
    fetch(url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log("data:", data.forecast.forecastday);
        toDisplaycurr(data.current);
        toDisplay(data.forecast.forecastday);
    })
        .catch(function (error) {
        console.log("error:", error);
    });
}
function toDisplay(data) {
    for (var i = 0; i < data.length; i++) {
        var el = document.querySelector("#list");
        var url = data[i].day.condition.icon;
        el.innerHTML += "<li>" + "<img src=" + url + ">" + "</li>";
        el.innerHTML += "<li>" + "MAX-TEMP:" + data[i].day.maxtemp_c + "℃" + "</li>";
        el.innerHTML += "<li>" + "MIN-TEMP:" + data[i].day.mintemp_c + "℃" + "</li>";
        el.innerHTML += "<li>" + "HUMIDITY:" + data[i].hour[i].humidity + "</li>" + "<br>";
        //data[i].day.condition.icon
    }
}
//to add curr
function toDisplaycurr(data) {
    console.log(data);
    var ele = document.querySelector("#list");
    ele.innerHTML = "";
    console.log(data.temp_c);
    ele.innerHTML += "<li>" + "Current temp:" + data.temp_c + "℃" + "</li>";
}
