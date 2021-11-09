// import { Valoracio } from "./valoracio";

const url: string = "https://icanhazdadjoke.com/";
const url2: string = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&lang=ca&appid=30195643f30889e63585cd5faac75c75";
const url3: string = "https://api.chucknorris.io/jokes/random"
const caixaAcudit:any = document.querySelector('#container_acudit');
const caixaTemp: any = document.querySelector('#cont_temp');
const caixaIcon: any = document.querySelector('#cont_icon');
let button1: any = document.querySelector('#button1');
let button2: any = document.querySelector('#button2');
let button3: any = document.querySelector('#button3');
let puntuacio: number | null = 0; 
let acudit:string; 
let reportJokes: jokeReport[] = [];


function agregaFuncio():void{

    let button: any = document.querySelector('#btnSeguent');
    button?.addEventListener('click', generaAcudit);
    
    mostraMeteo();
}

function generaAcudit(){
    let functions: string[] = ['chuck', 'joke'];
    let aleatorio: number = Math.floor(Math.random()*functions.length);
    if(functions[aleatorio] === 'chuck'){
        return generaAcuditChuck();
    } else {
        return generaAcuditJoke();
    }
}

function crearValoracio(){

            button1?.addEventListener('click', () => {puntuacio = 1});
            button2?.addEventListener('click', () => {puntuacio = 2}); 
            button3?.addEventListener('click', () => {puntuacio = 3});
        
            const d: Date = new Date();
            let date: string = d.toISOString();

            let valoracio: jokeReport = {
                    joke: acudit,
                    score: puntuacio, 
                    date: date
            };

            reportJokes.push(valoracio);
            console.log(reportJokes);
            
}

async function generaAcuditJoke() {  //funcio que genera un nou acudit, canvia el fons i crea una valoracio
    try{
        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
            Accept: 'application/json'
            },
        });

        const data = await response.json();
        const acudit: string = data.joke;
        caixaAcudit.innerHTML = `<p class="text-light">" ${data.joke} "</p>`;
        crearValoracio();
        canviaFons();  
        return acudit;
           
    } catch (error){
        console.log(error);
    }      
        
}
async function mostraMeteo(){  //funcio que genera un nou acudit, canvia el fons i crea una valoracio
    try{
        const response: Response = await fetch(url2, {
            method: "GET",
            headers: {
            Accept: 'application/json'
            },
        });

        const data = await response.json();
        const weather = data.weather[0].icon;
        const temperatura = data.main.temp;
        caixaIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
        caixaTemp.innerHTML = `<p class="fs-5"><strong> |  ${data.main.temp}º</strong></p>`;
         
        return weather;
           
    } catch (error){
        console.log(error);
    }            
};

async function generaAcuditChuck() {  //funcio que genera un nou acudit, canvia el fons i crea una valoracio
    try{
        const response: Response = await fetch(url3, {
            method: "GET",
            headers: {
            Accept: 'application/json'
            },
        });

        const data = await response.json();
        const acudit: string = data.value;
        caixaAcudit.innerHTML = `<p class="text-light">" ${data.value} "</p>`;
        crearValoracio();
        canviaFons();  
        return acudit;

    } catch (error){
        console.log(error);

};
}


function canviaFons(){ // funcio per canviar el background al canviar d'acudit

    // const fons: string[] = ['blob1', 'blob2', 'blob3', 'blob4'];
    // let containerP: any = document.querySelector('#container_principal');
    // let index: number = Math.floor(Math.random()*fons.length);
    // let fonsAleatori = fons[index];
    // console.log(fonsAleatori);
    // containerP.className = ' '+fonsAleatori+ 'col-8 d-flex flex-column align-items-center vh-100 justify-content-center mt-n5 ';
}

window.addEventListener('load', agregaFuncio); 