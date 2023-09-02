window.onload=()=>{
    const pantalla = document.querySelector(".pantalla");
//WITH QUERYSELECTORALL WE MAKE A LIST WITH ALL ELEMENTS WITH ID ".BTN"
    const botones = document.querySelectorAll(".btn");

//FOREACH WORKS AS FOR FOR ITEMS IN A LIST LIKE RANGE IN PYTHON     
    botones.forEach(boton =>{
        boton.addEventListener("click", () => {
            const btncont = boton.textContent;
            //console.log(btncont);

// HERE I'M MAKING A FUNTIONALITY FOR TE BUTTON WITH ID "C"
            if(boton.textContent === 'C'){
                pantalla.innerHTML = '0';
                return;
            }

//HERE I'M MKAING A FUNTIONALITY FOR ->, HE WORK IS DELETE THE LAST NUMBER INPUT
            if(boton.textContent === "→"){
                //THE FIRST CLAUSULE IS THAT THE LENGTH STRING MUST BE MAJOR THAN ONE 
                if(pantalla.textContent.length > 1){
                    pantalla.textContent = pantalla.textContent.slice(0,-1);
                }else{
                    pantalla.textContent = 0;
                }return
            }

//THIS FUNTIONALITY WILL GETS A RESULT OF THE EQUATION 
            
            if(boton.id === "igual"){
                //THE ESPECIAL THING HERE IS EVAL, THIS METHOD WORKS FOR RESOLVE NUMBER OPERATIONS
                //IN HTML
                try{
                    pantalla.textContent =  eval(pantalla.textContent);
                }catch{
                    pantalla.textContent = "SYNTAX ERROR!"
                }
                return;
            }
//HERE WE INSERT NUMEBRS IN THE SCREEN, AND WE STOP IF THERE IS A SYNTAX ERROR MESSAGE

            if(pantalla.textContent === '0'|| pantalla.innerText==="SYNTAX ERROR!" ){
                pantalla.innerHTML = btncont ;
            }else{
                pantalla.innerHTML += btncont  ;
            }
        })
    })
}