var name;
function changeValue(){
    name = document.getElementById("country").value;
fn(name);
}
//  fn function definition
function fn(name){
    const container =document.querySelector('#container');


const request = new XMLHttpRequest();
var x=name;
// request.open('GET', `https://restcountries.eu/rest/v2/name/${x}`);
 request.open('GET', `https://restcountries.eu/rest/v2/name/${x}`);
request.send();


request.addEventListener('load', function(){
    
    const [data] = JSON.parse(this.responseText);
   
    const htmlData = `
    <div class="box">
    <div class="container-grid">
        
            <div class ="card card-body">
                <img src="${data.flag}" alt="" class = "card-body-img"/>
                </div>
                <div class ="card card-title">
                <h1 class ="card card-body-title">
                    ${data.name}<span></span>
                </h1>
                   <p class ='card card-body-text'> capital : ${data.capital}</p>
            </div>
                <div class ="card card-footer-social">
                    <h3>${data.nativeName}</h3>
                    <p>Native Language</p>
                </div>    
                <div  class ="card card-footer-social">
                    <h3>${data.population}</h3>
                    <p>Population</p>
                </div>
                <div class ="card card-footer-social">
                    <h3>${data.demonym}</h3>
                    <p>Demonym</p>
                </div>
                <div class ="card ">
                    <h3>${data.region}</h3>
                    <p>Region</p>
                </div>
                <div class ="card ">
                    <h3>${data.area}</h3>
                    <p>Area</p>
                </div>
                <div class ="card ">
                    <h3>${data.callingCodes}</h3>
                    <p>CallingCodes</p>
                </div>
                

            
        
    </div></box>`
    container.insertAdjacentHTML("afterbegin",htmlData)

})
}