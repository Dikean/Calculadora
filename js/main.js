let alertCal = document.getElementById('alertCal');

const sumar = () =>{
    let a = parseInt(document.getElementById('primerNumber').value);
    let b = parseInt(document.getElementById('segundoNumber').value);
    let suma= a+b;
    return alertCal.innerHTML= `
    <div class="alert alert-primary" role="alert" id="alertCal">
    La suma de los dos numeros es:  <strong>${suma} </strong>
    </div> 
    `;
}

const restar = () =>{
    let a = parseInt(document.getElementById('primerNumber').value);
    let b = parseInt(document.getElementById('segundoNumber').value);
    let resta= a-b;
    return alertCal.innerHTML= `
    <div class="alert alert-primary" role="alert" id="alertCal">
    La suma de los dos numeros es:  <strong>${resta} </strong>
    </div> 
    `;
}

const multy = () =>{
    let a = parseInt(document.getElementById('primerNumber').value);
    let b = parseInt(document.getElementById('segundoNumber').value);
    let mul= a*b;
    return alertCal.innerHTML= `
    <div class="alert alert-primary" role="alert" id="alertCal">
    La suma de los dos numeros es:  <strong>${mul} </strong>
    </div> 
    `;
}

const divi = () =>{
    let a = parseInt(document.getElementById('primerNumber').value);
    let b = parseInt(document.getElementById('segundoNumber').value);
    let div= a/b;
    return alertCal.innerHTML= `
    <div class="alert alert-primary" role="alert" id="alertCal">
    La suma de los dos numeros es:  <strong>${div} </strong>
    </div> 
    `;
}