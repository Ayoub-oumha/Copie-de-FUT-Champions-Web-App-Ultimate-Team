// function AddtolocalstoragevideData() {
//   let data = []

//   localStorage.setItem("data", JSON.stringify(data));
// }
// AddtolocalstoragevideData();

let lkhota = document.getElementById("lkhota");

lkhota.addEventListener("change", () => {
  let divP4_4_2 = document.getElementById("P4_4_2");
  let divP4_3_3 = document.getElementById("P4_3_3");
  if (lkhota.value === "4-3-3") {
    divP4_3_3.style.display = "block";
    divP4_4_2.style.display = "none";
  } else {
    divP4_3_3.style.display = "none";
    divP4_4_2.style.display = "block";
  }
});
function addPlayer() {
  let btnForAddPlayer = document.getElementById("btnForAddPlayer");
  let annuleBtn = document.getElementById("annule");
  let formForAdd = document.getElementById("formForAdd");
  btnForAddPlayer.addEventListener("click", () => {
    formForAdd.classList.toggle("displayNone");
    formForAdd.classList.toggle("formForAdd");
  });
  annuleBtn.addEventListener("click", () => {
    formForAdd.classList.toggle("displayNone");
    formForAdd.classList.toggle("formForAdd");
  });
}
addPlayer();

function AddplayerTolocalStorage() {
  let saveInfo = document.getElementById("saveInfo");
  const playerName = document.getElementById("playerName");
  const playerPhoto = document.getElementById("playerPhoto");
  const playerPosition = document.getElementById("playerPosition");
  const playerNationality = document.getElementById("playerNationality");
  const clubPhoto = document.getElementById("clubPhoto");
  const playerPace = document.getElementById("playerPace");
  const playerShooting = document.getElementById("playerShooting");
  const playerPassing = document.getElementById("playerPassing");
  const playerDribbling = document.getElementById("playerDribbling");
  const playerDefending = document.getElementById("playerDefending");
  const playerPhysical = document.getElementById("playerPhysical");
  const playerRating = document.getElementById("playerRating");

  const formInputs = document.querySelectorAll("#formForAdd input, #formForAdd select");
  formInputs.forEach(inpt =>{
    inpt.addEventListener('input' , ()=>{
        if(inpt.value === "") {
            inpt.style.border = "solid red 1px"
        }
        else{
            inpt.style.border = "solid black 1px"
            
        }
    })
})
  

  saveInfo.addEventListener("click", () => {
    let a = false
    formInputs.forEach(inpt =>{
        if(inpt.value === "") {
            inpt.style.border = "solid red 1px" ;
            a = true
        }
        else{
            inpt.style.border = "solid black 1px"
            
        }
    })
    let dataFromlocalStorage = JSON.parse(localStorage.getItem("data")) || [];
    if(!a){
        
        let newPlaye = {
            name:  playerName.value ,
            photo: playerPhoto.value ,
            position: playerPosition.value,
            nationality:  playerNationality.value,
            flag: clubPhoto.value,
            rating: playerRating.value,
            pace: playerPace.value,
            shooting: playerShooting.value,
            passing: playerPassing.value,
            dribbling: playerDribbling.value,
            defending: playerDefending.value,
            physical: playerPhysical.value,

        }
        
        dataFromlocalStorage.push(newPlaye)
        localStorage.setItem("data", JSON.stringify(dataFromlocalStorage));

        playersFromLocalStorage()
    }
  });
}
AddplayerTolocalStorage();
function playersFromLocalStorage() {
  let players = document.getElementById("players");
  players.textContent = "" ;
  let dataFromlocalStorage = JSON.parse(localStorage.getItem("data"));
  dataFromlocalStorage.forEach((element) => {
    let posi = document.createElement("div");
    posi.classList = "position";
    let content = `<div class="info"  draggable="true" >
                        <div class="rating">
                            <p>${element.rating}</p>
                            <p>${element.position}</p>
                           </div>
                           <div class="img">
                            <img src="${element.photo}" alt="">
                           </div>
                           <div class="name">
                            <p>${element.name}</p>
                           </div>
                           <div class="other-info">
                           
                               <div class="pace">
                               <p>PAC</p>
                                <p>${element.pace}</p>
                                
                               </div>
                               <div class="shooting">
                                <p>SHO</p>
                                <p>${element.shooting}</p>
                               
                               </div>
                               <div class="passing">
                               <p>PAS</p>
                                <p>${element.passing}</p>
                                
                               </div>
                               <div class="dribbling">
                               <p>DRI</p>
                                <p>${element.dribbling}</p>
                                
                               </div>
                               <div class="defending">
                               <p>DEF</p>
                                <p>${element.defending}</p>
                                
                               </div>
                               <div class="physical">
                               <p>PHY</p>
                                <p>${element.physical}</p>
                                
                               </div>
                              
                               
                           </div>
                           
                            <div class="flagPhoto">
                               <img src="${element.flag}" alt="">
                                
                               </div>
                           <div class="flag">
                            <p>${element.nationality}</p>
                            
                           </div>
                            
                    </div>`;
    
    posi.innerHTML = content;
    players.append(posi);
  });
}
playersFromLocalStorage();


// function DrageAndDrop(){
//     let divForDrage = document.querySelectorAll(".info")
//     let boxforDrop = document.querySelectorAll(".position")
//     let data = null ;
//     divForDrage.forEach(div =>{
//         div.addEventListener('dragstart' , ()=>{
//             div.style.opacity = "0.5"
//             data = divForDrage.textContent ;
//             console.log(data)
//             console.log(div)
            
//         })
//         div.addEventListener('dragend' , ()=>{
//             div.style.opacity = "1"
//             data = null
//         })
       
//     })
//     boxforDrop.forEach(div =>{
      
//         div.addEventListener("dragover" , (e)=>{
//             div.style.boxShadow = "0 0 10px black"
//            e.preventDefault()
//         })
//         div.addEventListener("dragleave" , (e)=>{
//             div.style.boxShadow = "none"
//            e.preventDefault()
//         })
//         div.addEventListener("drop" , ()=>{
//             div.append(data) 
//             div.style.boxShadow = "none"
//             })
//     })
   
   
// }
// DrageAndDrop()

function DrageAndDrop() {
    let divForDrage = document.querySelectorAll(".info");
    let boxforDrop = document.querySelectorAll(".position");
    let draggedElement = null;

    divForDrage.forEach(div => {
        div.addEventListener('dragstart', () => {
            div.style.opacity = "0.5";
            draggedElement = div;
            
        });
        div.addEventListener('dragend', () => {
            div.style.opacity = "1";
            draggedElement = null;
        });
    });

    boxforDrop.forEach(div => {
        div.addEventListener("dragover", (e) => {
            div.style.boxShadow = "0 0 10px black";
            e.preventDefault(); // Allows dropping
        });
        div.addEventListener("dragleave", () => {
            div.style.boxShadow = "none";
        });
        div.addEventListener("drop", () => {
            if (draggedElement) {
                div.append(draggedElement); // Append the dragged element
                div.style.boxShadow = "none";
            }
        });
    });
}

DrageAndDrop();
