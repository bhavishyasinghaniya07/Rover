let EMAIL = ['bhavishya'];
let PASS = [12345];
 



let button = document.querySelector('#btn');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let login = document.querySelector('#login');


button.addEventListener("click" , saveData);

function saveData(){
    event.preventDefault()
   let mailD = email.value;
   let passD = pass.value;

   function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    for(let i= 0;i<EMAIL.length;i++){

        if(mailD == EMAIL[i] && passD == PASS[i]){
            login.innerHTML = `<h4 style=" color : green "> Loging In </h4> `;
            sleep(1000).then(() => window.open("index.html"));
        
       }
       else{
            login.innerHTML = `<h4 style=" color : red "> Wrong Credentials </h4> `;
       }
    }
   
}





// signup JS



let sfname = document.querySelector('#fname');
let spass2 = document.querySelector('#pass2');
let scPass = document.querySelector('#pass22');
let smail = document.querySelector('#mail');
let sbtn = document.querySelector('.but');
let sphone = document.querySelector('#phone');


sbtn.addEventListener("click" , updateData);

function updateData(){
    console.log("Pushed Sucessfully");
    event.preventDefault()
    EMAIL.push(smail.value);
    PASS.push(scPass.value);
    
}

