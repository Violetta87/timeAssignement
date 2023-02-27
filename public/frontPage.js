const url = "http://localhost:8080/api/time"
let tis;
    fetch(url).then(response => response.json()).then(result => {
        tis = result.data
    }).then(() => {
        console.log(tis)
    })


function yesItsFriday(){
    const divDay = document.getElementById("divDay");
    divDay.innerText = "";
    const createP = document.createElement("p")
        
        if(tis === 'friday'){
            createP.innerText = `YES! Its ${tis}`
        }else{
            createP.innerText = `No its not friday, its ${tis} stupid`

        }  
        divDay.appendChild(createP);
}




        
        


