// function AddtolocalstoragevideData() {
//   let data = []

//   localStorage.setItem("data", JSON.stringify(data));
// }
// AddtolocalstoragevideData();


let position6 = document.querySelectorAll("#position6");
console.log(position6)
let lkhota = document.getElementById("lkhota");

lkhota.addEventListener("change", () => {
  
  if (lkhota.value === "4-3-3") {
            position6[0].style = " bottom: 60%; right: 10%;"
            position6[1].style = " bottom: 60%; left: 40%;"
            position6[2].style = " bottom: 60%; left: 10%;"
            position6[3].style = " bottom: 80%; left: 10%;"
            position6[4].style = " bottom: 80%; left: 40%;"
            position6[5].style = " bottom: 80%; left: 70%;"
  } else {
            position6[0].style = " bottom: 60%; right: 10%;"
            position6[1].style = " bottom: 60%; right: 30%;"
            position6[2].style = " bottom: 60%; left: 30%;"
            position6[3].style = " bottom: 60%; left: 10%;"
            position6[4].style = " bottom: 80%; right: 30%;"
            position6[5].style = " bottom: 80%; left: 30%;"
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
  modificationPlayer();
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

// function DrageAndDrop() {
//     let divForDrage = document.querySelectorAll(".info");
//     let boxforDrop = document.querySelectorAll(".position");
//     let draggedElement = null;

//     divForDrage.forEach(div => {
//         div.addEventListener('dragstart', () => {
//             div.style.opacity = "0.5";
//             draggedElement = div;
            
//         });
//         div.addEventListener('dragend', () => {
//             div.style.opacity = "1";
//             draggedElement = null;
//         });
//     });

//     boxforDrop.forEach(div => {
//         div.addEventListener("dragover", (e) => {
//             div.style.boxShadow = "0 0 10px black";
//             e.preventDefault(); // Allows dropping
//         });
//         div.addEventListener("dragleave", () => {
//             div.style.boxShadow = "none";
//         });
//         div.addEventListener("drop", () => {
//             if (draggedElement) {
//                 div.append(draggedElement); // Append the dragged element
//                 div.style.boxShadow = "none";
//             }
//         });
//     });
// }

// DrageAndDrop();

function modificationPlayer() {
    const formForModify = document.getElementById("formForModify");
    const players = document.querySelectorAll(".position");
    const cancelModify = document.getElementById("cancelModify");
    const updateInfo = document.getElementById("updateInfo");

    // Check if form and buttons exist
    if (!formForModify || !cancelModify || !updateInfo) {
        console.error("Form or buttons not found.");
        return;
    }

    players.forEach(player => {
        const playerInfo = player.querySelector(".info");
        if (!playerInfo) return; // Skip if .info element doesn't exist

        playerInfo.addEventListener("click", () => {
            const playerName = playerInfo.querySelector(".name p").textContent;
            const dataFromlocalStorage = JSON.parse(localStorage.getItem("data")) || [];
            const playerData = dataFromlocalStorage.find(p => p.name === playerName);

            if (playerData) {
                // Fill the form with player data
                document.getElementById("modifyPlayerName").value = playerData.name;
                document.getElementById("modifyPlayerPhoto").value = playerData.photo;
                document.getElementById("modifyPlayerPosition").value = playerData.position;
                document.getElementById("modifyPlayerNationality").value = playerData.nationality;
                document.getElementById("modifyClubPhoto").value = playerData.flag;
                document.getElementById("modifyPlayerRating").value = playerData.rating;
                document.getElementById("modifyPlayerPace").value = playerData.pace;
                document.getElementById("modifyPlayerShooting").value = playerData.shooting;
                document.getElementById("modifyPlayerPassing").value = playerData.passing;
                document.getElementById("modifyPlayerDribbling").value = playerData.dribbling;
                document.getElementById("modifyPlayerDefending").value = playerData.defending;
                document.getElementById("modifyPlayerPhysical").value = playerData.physical;

                // Show the modify form
                formForModify.classList.remove("displayNone");
            } else {
                console.error("Player data not found for:", playerName);
            }
        });
    });

    // Handle cancel button
    cancelModify.addEventListener("click", () => {
        formForModify.classList.add("displayNone");
    });

    // Handle update button
    updateInfo.addEventListener("click", () => {
        const originalName = document.getElementById("modifyPlayerName").value;
        const dataFromlocalStorage = JSON.parse(localStorage.getItem("data")) || [];
        const index = dataFromlocalStorage.findIndex(p => p.name === originalName);

        if (index !== -1) {
            // Update player data
            dataFromlocalStorage[index] = {
                name: document.getElementById("modifyPlayerName").value,
                photo: document.getElementById("modifyPlayerPhoto").value,
                position: document.getElementById("modifyPlayerPosition").value,
                nationality: document.getElementById("modifyPlayerNationality").value,
                flag: document.getElementById("modifyClubPhoto").value,
                rating: document.getElementById("modifyPlayerRating").value,
                pace: document.getElementById("modifyPlayerPace").value,
                shooting: document.getElementById("modifyPlayerShooting").value,
                passing: document.getElementById("modifyPlayerPassing").value,
                dribbling: document.getElementById("modifyPlayerDribbling").value,
                defending: document.getElementById("modifyPlayerDefending").value,
                physical: document.getElementById("modifyPlayerPhysical").value
            };

            // Save to localStorage and refresh display
            localStorage.setItem("data", JSON.stringify(dataFromlocalStorage));
            playersFromLocalStorage(); // Refresh the player list

            // Hide the form
            formForModify.classList.add("displayNone");
        } else {
            console.error("Player not found in localStorage:", originalName);
        }
    });
}
 


function DeletPlayer() {
    // Get the delete button element
    let deleteButtons = document.querySelectorAll(".deletePlayer");

    // Add event listeners to each delete button
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Confirm deletion
            if (confirm("Are you sure you want to delete this player?")) {
                // Get the current data from localStorage
                let dataFromLocalStorage = JSON.parse(localStorage.getItem("data")) || [];
                
                // Remove the player from the array
                dataFromLocalStorage.splice(index, 1);
                
                // Update localStorage
                localStorage.setItem("data", JSON.stringify(dataFromLocalStorage));
                
                // Refresh the player list
                playersFromLocalStorage();
            }
        });
    });
}