"use strict";
// import { jokeReport } from './valoracio';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    button.addEventListener('click', generaAcudit);
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
    button1.addEventListener('click', function () { puntuacio = 1; });
    button2.addEventListener('click', function () { puntuacio = 2; });
    button3.addEventListener('click', function () { puntuacio = 3; });
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
    return __awaiter(this, void 0, void 0, function () {
        var response, data, acudit_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url, {
                            method: "GET",
                            headers: {
                                Accept: 'application/json'
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    acudit_1 = data.joke;
                    caixaAcudit.innerHTML = "<p class=\"text-light col-8 text-center ms-5\">\" " + data.joke + " \"</p>";
                    crearValoracio();
                    canviaFons();
                    return [2 /*return*/, acudit_1];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function mostraMeteo() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, weather, temperatura, tempR, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url2, {
                            method: "GET",
                            headers: {
                                Accept: 'application/json'
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    weather = data.weather[0].icon;
                    temperatura = data.main.temp;
                    tempR = Math.round(data.main.temp);
                    caixaIcon.innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png\">";
                    caixaTemp.innerHTML = "<p class=\"fs-5\"><strong> | " + tempR + " \u00BA</strong></p>";
                    return [2 /*return*/, weather];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
function generaAcuditChuck() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, acudit_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url3, {
                            method: "GET",
                            headers: {
                                Accept: 'application/json'
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    acudit_2 = data.value;
                    caixaAcudit.innerHTML = "<p class=\"text-light col-8 text-center ms-5\">\" " + data.value + " \"</p>";
                    crearValoracio();
                    canviaFons();
                    return [2 /*return*/, acudit_2];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
function canviaFons() {
    var fons = ['img/uno.svg', 'img/dos.svg', 'img/tres.svg'];
    var containerP = document.querySelector('#container_principal');
    var index = Math.floor(Math.random() * fons.length);
    var fonsAleatori = fons[index];
    containerP.style.backgroundImage = 'url(' + fonsAleatori + ')';
}
window.addEventListener('load', agregaFuncio);
