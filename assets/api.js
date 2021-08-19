function sesion(){
    let concorr= '342596'
    let uscorr= 'angello@hotmail.com'
    let usuario = document.getElementById('idemail').value
	let contrasena = document.getElementById('idcontrasena').value
    if (contrasena === concorr && usuario === uscorr ){window.open("./api.html")}
    else {alert('Revisar contraseña o usuario')}
}

const leerdatos = () =>{
    let num= parseInt(document.getElementById('numcards').value)
    if (isNaN(num)){alert ('debe ser un numero')}
    if (num===0){alert ('debe ser un numero >0')}
   
    else{
   
    for (i=0; i<=num; i++){
      let url = `https://rickandmortyapi.com/api/character/${i}`;
        
      fetch(url)
        .then((res) => res.json()) 
        .then((data) => print(data)) 
        .catch((err) => console.log(err));
    }
   
    
    const print = (data) => {
    const card = `<div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h4>personaje numero: ${data.id}</h4>
        <h4>${data.name}</h4>
        <p><b>Especie:</b> ${data.species}</p>
        <p><b>Origen:</b> ${data.origin.name}</p>
      </div>
    </div>`;
   
    document.getElementById("container").innerHTML += card;}
     
   }
   
     document.getElementById("container").innerHTML = ""
   }
   
   const borrardata = () =>{
    document.getElementById("container").innerHTML = ""
   }

   const espeifico = () =>{
    let num= parseInt(document.getElementById('numcards').value)
    if (isNaN(num)){alert ('debe ser un numero')}
    if (num===0){alert ('debe ser un numero >0')}
   
    else{
      let url = `https://rickandmortyapi.com/api/character/${num}`;
        
      fetch(url)
        .then((res) => res.json()) 
        .then((data) => print(data)) 
        .catch((err) => console.log(err));
    
    const print = (data) => {
    const card = `<div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h4>personaje numero: ${data.id}</h4>
        <h4>${data.name}</h4>
        <p><b>Especie:</b> ${data.species}</p>
        <p><b>Origen:</b> ${data.origin.name}</p>
      </div>
    </div>`;
   
    document.getElementById("container").innerHTML = card;}
     
   }}
