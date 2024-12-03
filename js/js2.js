function changeFormation(){
    let Formation = document.getElementById("Formation");
    let positions = document.querySelectorAll(".position")
   

    Formation.addEventListener('change' , ()=>{
        if( Formation.value === "4_4_2"){
            positions[5].style = "   bottom: 60%; right: 10%;"
            positions[6].style = "     bottom: 50%; right: 30%;"
            positions[7].style = "   bottom: 50%; left: 30%;   " ;
            positions[8].style = "    bottom: 60%; left: 10%;" ;
            positions[9].style = "     bottom: 78%; right : 30%;" ;
            positions[10].style = "    bottom: 78%; left: 30%;" ;
            
        }
        else{
            
            positions[5].style = "   bottom: 55%; right: 10%;"
            positions[6].style = "       bottom: 75%; right: 10%;"
            positions[7].style = "     bottom: 50%; right: 50%; transform: translate(50%); left : auto" ;
            positions[8].style = "        bottom: 55%; left: 10%;" ;
            positions[9].style = "        bottom: 78%; right : 50%; transform: translate(50%); left : auto" ;
            positions[10].style = "     bottom: 75%; left: 10%;" ;
            
           
        }
    })
}
changeFormation() ;

function AddplayerToLocale(){
    let divAddplayer = document.querySelector(".formAddplayer") ;
    let btnAddPlyaer = document.getElementById("Addplayerbtn")
    let btnCancel = document.querySelector(".btn-cancel")
    let btnAdd  = document.querySelector(".btn-add") ;
    let inputAndselect = document.querySelectorAll(".formAddplayer input , .formAddplayer select")
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataPlayer"))  || [] ;
   
    
    btnAddPlyaer.addEventListener("click" , ()=>{
        divAddplayer.classList.toggle("display_none")
    })
    btnCancel.addEventListener("click" , ()=>{
        divAddplayer.classList.toggle("display_none")
    })
    inputAndselect.forEach(ele =>{
        ele.addEventListener("input" , ()=>{
            if(ele.value === ""){
                ele.style.border = "1px red solid"
                
            } 
            else{
                ele.style.border = "1px black solid"
                
            }
        })
    })
    btnAdd.addEventListener("click" , ()=>{
         
        let p = false ;
      inputAndselect.forEach(ele =>{
        if(ele.value === "" || ele.value.trim() === ""){
            ele.style.border = "1px red solid"
            p = true
        } 
        else{
            ele.style.border = "1px black solid"
            
            
        }
      })
      console.log(p)
      if(!p){
    
        let newPlayer = {
            id : dataFromLocalStorage.length + 1 ,
            name: inputAndselect[0].value.trim().split(" ")[0] ,
            photo: inputAndselect[1].value ,
            position: inputAndselect[2].value ,
            nationality: inputAndselect[3].value , 
            flag:  inputAndselect[4].value ,
            club :  inputAndselect[5].value ,
            clubLogo :  inputAndselect[6].value ,
            rating: inputAndselect[7].value ,
            pace:  inputAndselect[8].value,
            shooting:  inputAndselect[9].value,
            passing:  inputAndselect[10].value,
            dribbling:  inputAndselect[11].value ,
            defending:  inputAndselect[12].value,
            physical:  inputAndselect[13].value,
        }
        dataFromLocalStorage.push(newPlayer);
        localStorage.setItem("dataPlayer" , JSON.stringify(dataFromLocalStorage))
        console.log(dataFromLocalStorage)
        divAddplayer.classList.toggle("display_none")
        
        AddplayerToBoxOfplayers()
        modificationPlayer()
        DrageAndDrop() ;
      }     
    })
    
}
AddplayerToLocale()

function AddplayerToBoxOfplayers(){
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataPlayer"))  || [] ;
    let divplayer = document.getElementById("divplayer") ;
    divplayer.textContent = ""
    if(dataFromLocalStorage.length > 0) {
        dataFromLocalStorage.forEach(ele =>{
            
            let newPlyaerDiv = document.createElement("div") ;
            newPlyaerDiv.className = "player dropzone"
           newPlyaerDiv.id = ele.id ;
            newPlyaerDiv.setAttribute( "draggable" ,"true")
            
            newPlyaerDiv.innerHTML = ` <img src="./img/placeholder-card-normal.webp" alt="" class="imgbg">
                    <div class="info-player">
                        <div class="info_country">
                            <p>${ele.rating}</p>
                            <p>${ele.position}</p>
                            <img src="${ele.flag}" alt="">
                            <img src="${ele.clubLogo}" alt="">
                        </div>
                        <div class="imgPlayer">
                            <img src="${ele.photo}" alt="">
                        </div>
                        <p class="namePlayer">${ele.name}</p>
                        <div class="sta1">
                            <div>
                                <p>PAC</p>
                                <p>${ele.pace}</p>
                            </div>
                            <div>
                                <p>SHO</p>
                                <p>${ele.shooting}</p>
                            </div>
                            <div>
                                <p>PAS</p>
                                <p>${ele.passing}</p>
                            </div>
                            <div>
                                <p>DRI</p>
                                <p>${ele.dribbling}</p>
                            </div>
                            <div>
                                <p>DEF</p>
                                <p>${ele.defending}</p>
                            </div>
                            <div>
                                <p>PHY</p>
                                <p>${ele.physical}</p>
                            </div>
                        </div>`
            divplayer.append(newPlyaerDiv)
        })
        
       
    }
}
AddplayerToBoxOfplayers()

function modificationPlayer(){
    let players = document.querySelectorAll(".player")
    let btnCancel = document.querySelector(".btn-cancel-modif") ;
    let btnCDelet = document.querySelector(".btn-delet") ;
    let formModifierPlayer = document.querySelector(".formModifierPlayer") ; 
    let inputandselectForModif = document.querySelectorAll(" .formModifierPlayer input , .formModifierPlayer select ")
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataPlayer"))  || [] ;
    let btnSave = document.querySelector(".btn-seve")
    btnCancel.addEventListener('click' , ()=>{
        formModifierPlayer.classList.add("display_none")
        
    })
    
    for(let player of players) {
        player.addEventListener('click' , ()=>{
            formModifierPlayer.classList.remove("display_none") ;
            let idOfpkyaer = parseInt(player.id)
          
           index = dataFromLocalStorage.findIndex(p => p.id === idOfpkyaer) ; 
        //    console.log(dataFromLocalStorage[index])
           inputandselectForModif[0].value = dataFromLocalStorage[index].name ;
           inputandselectForModif[1].value = dataFromLocalStorage[index].photo ;
           inputandselectForModif[2].value = dataFromLocalStorage[index].position ;
           inputandselectForModif[3].value = dataFromLocalStorage[index].nationality ;
           inputandselectForModif[4].value = dataFromLocalStorage[index].flag ;
           inputandselectForModif[5].value  = dataFromLocalStorage[index].club ;
           inputandselectForModif[6].value  = dataFromLocalStorage[index].clubLogo ;
           inputandselectForModif[7].value  = dataFromLocalStorage[index].rating ;
           inputandselectForModif[8].value  = dataFromLocalStorage[index].pace ;
           inputandselectForModif[9].value  = dataFromLocalStorage[index].shooting ;
           inputandselectForModif[10].value = dataFromLocalStorage[index].passing ;
           inputandselectForModif[11].value = dataFromLocalStorage[index].dribbling ;
           inputandselectForModif[12].value = dataFromLocalStorage[index].defending ;
           inputandselectForModif[13].value = dataFromLocalStorage[index].physical ;
           btnSave.addEventListener("click" , ()=>{
            
            let p = false ;
            inputandselectForModif.forEach(ele =>{
              if(ele.value === "" || ele.value.trim() === ""){
                  ele.style.border = "1px red solid" ;
                  p = true
                  
              } 
              else{
                  ele.style.border = "1px black solid" ;
              }
            })
            if(!p){
                dataFromLocalStorage[index].name = inputandselectForModif[0].value
                dataFromLocalStorage[index].photo = inputandselectForModif[1].value
                dataFromLocalStorage[index].position = inputandselectForModif[2].value
                dataFromLocalStorage[index].nationality = inputandselectForModif[3].value
                dataFromLocalStorage[index].flag = inputandselectForModif[4].value
                dataFromLocalStorage[index].club = inputandselectForModif[5].value
                dataFromLocalStorage[index].clubLogo = inputandselectForModif[6].value
                dataFromLocalStorage[index].rating = inputandselectForModif[7].value
                dataFromLocalStorage[index].pace = inputandselectForModif[8].value
                dataFromLocalStorage[index].shooting = inputandselectForModif[9].value
                dataFromLocalStorage[index].passing = inputandselectForModif[10].value
                dataFromLocalStorage[index].dribbling = inputandselectForModif[11].value
                dataFromLocalStorage[index].defending = inputandselectForModif[12].value
                dataFromLocalStorage[index].physical = inputandselectForModif[13].value
                localStorage.setItem("dataPlayer" , JSON.stringify(dataFromLocalStorage))
                AddplayerToBoxOfplayers()
                
                formModifierPlayer.classList.add("display_none") ;
                modificationPlayer()
                
            }
           
        })
        btnCDelet.addEventListener('click' , ()=>{
            dataFromLocalStorage.splice(index, 1);
            localStorage.setItem("dataPlayer" , JSON.stringify(dataFromLocalStorage))
            AddplayerToBoxOfplayers()
            
            formModifierPlayer.classList.add("display_none") ;
            modificationPlayer()
        })

        })
    }
   
   
 
}
modificationPlayer()

function  DrageAndDrop(){
    let players = document.querySelectorAll(".player")
    let position = document.querySelectorAll(".position")
    let divplayer = document.querySelector(".divplayer")
    let draggedElement = null;
    players.forEach(player =>{
        player.addEventListener('dragstart' , ()=>{
            player.style.opacity = "0.5"
            draggedElement = player;
        })
        player.addEventListener('dragend' , ()=>{
            player.style.opacity = "1"
            draggedElement = null;
        })
    })
    position.forEach(posi =>{
        posi.addEventListener('dragover' , (e)=>{
            posi.style.filter = "drop-shadow(0px 0px 8px white)";
            e.preventDefault();
        })
        posi.addEventListener('dragleave' , ()=>{
            posi.style.filter= "none";
            
        })
        posi.addEventListener('drop' , ()=>{
            posi.style.filter= "none";
            if (draggedElement && posi.children.length === 0 ) {
                    // posi.textContent = ""
                    posi.appendChild(draggedElement); // Append the dragged element
                    posi.style.filter = "none";
                   console.log(posi.children.length) ;
                }
                else console.log("non")
        })
        
        
    })

    divplayer.addEventListener('dragover' , (e)=>{
        // posi.style.filter = "drop-shadow(0px 0px 8px white)";
        e.preventDefault();
    })
    divplayer.addEventListener('dragleave' , ()=>{
        // posi.style.filter= "none";
        
    })
    divplayer.addEventListener('drop' , ()=>{
        // posi.style.filter= "none";
        if (draggedElement ) {
                // posi.textContent = ""
                divplayer.append(draggedElement); // Append the dragged element
                // posi.style.filter = "none";
               }
    })
    console.log(divplayer)
}
DrageAndDrop() ;



