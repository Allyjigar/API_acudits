"use strict";
// import { Valoracio } from "./valoracio";
var url = "https://icanhazdadjoke.com/";
var url2 = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&lang=ca&appid=30195643f30889e63585cd5faac75c75";
var url3 = "https://api.chucknorris.io/jokes/random";
var caixaAcudit = document.querySelector('#container_acudit');
var caixaTemp = document.querySelector('#cont_temp');
var caixaIcon = document.querySelector('#cont_icon');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var puntuacio = 0;
var acudit;
var reportJokes = [];
function agregaFuncio() {
    var button = document.querySelector('#btnSeguent');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', generaAcudit);
    mostraMeteo();
}
function generaAcudit() {
    var functions = ['chuck', 'joke'];
    var aleatorio = Math.floor(Math.random() * functions.length);
    if (functions[aleatorio] === 'chuck') {
        return generaAcuditChuck();
    }
    else {
        return generaAcuditJoke();
    }
}
function crearValoracio() {
    button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function () { puntuacio = 1; });
    button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', function () { puntuacio = 2; });
    button3 === null || button3 === void 0 ? void 0 : button3.addEventListener('click', function () { puntuacio = 3; });
    var d = new Date();
    var date = d.toISOString();
    var valoracio = {
        joke: acudit,
        score: puntuacio,
        date: date
    };
    reportJokes.push(valoracio);
    console.log(reportJokes);
}
function generaAcuditJoke() {
    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return imprimirData(data); })
        .catch(function (err) { return console.log(err); });
    var imprimirData = function (data) {
        acudit = data.joke;
        caixaAcudit.innerHTML = "<p class=\"text-light\">\" " + data.joke + " \"</p>";
    };
    crearValoracio();
    canviaFons();
}
function mostraMeteo() {
    fetch(url2)
        .then(function (response) { return response.json(); })
        .then(function (data) { return imprimirMeteo(data); })
        .catch(function (err) { return console.log(err); });
    var imprimirMeteo = function (data) {
        caixaIcon.innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png\">";
        caixaTemp.innerHTML = "<p class=\"fs-5\"><strong> |  " + data.main.temp + "\u00BA</strong></p>";
    };
}
function generaAcuditChuck() {
    fetch(url3, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return mostraChuck(data); })
        .catch(function (err) { return console.log(err); });
    var mostraChuck = function (data) {
        acudit = data.value;
        caixaAcudit.innerHTML = "<p class=\"text-light\">\" " + data.value + " \"</p>";
    };
    crearValoracio();
    canviaFons();
}
function canviaFons() {
    // const fons: string[] = ['blob1', 'blob2', 'blob3', 'blob4'];
    // let containerP: any = document.querySelector('#container_principal');
    // let index: number = Math.floor(Math.random()*fons.length);
    // let fonsAleatori = fons[index];
    // console.log(fonsAleatori);
    // containerP.className = ' '+fonsAleatori+ 'col-8 d-flex flex-column align-items-center vh-100 justify-content-center mt-n5 ';
}
window.addEventListener('load', agregaFuncio);
