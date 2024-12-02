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
    let inputAndselect = document.querySelectorAll(".form-group input , .form-group select")
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataPlayer"))  || [] ;
    console.log(dataFromLocalStorage)
    
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
        if(ele.value === ""){
            ele.style.border = "1px red solid"
            p = true
        } 
        else{
            ele.style.border = "1px black solid"
            
        }
      })
      if(!p){
    
        let newPlayer = {
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
      }     
    })
    
}
AddplayerToLocale()

function AddplayerToBoxOfplayers(){
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataPlayer"))  || [] ;
    if(dataFromLocalStorage.length > 0) {
        dataFromLocalStorage.forEach(ele =>{
            let divplayer = document.getElementById("divplayer") ;
            let newPlyaerDiv = document.createElement("div") ;
            newPlyaerDiv.className = "player dropzone"
            newPlyaerDiv.setAttribute( "draggable" ,"true")
            
            newPlyaerDiv.innerHTML = ` <img src="./img/placeholder-card-normal.webp" alt="" class="imgbg">
                    <div class="info-player">
                        <div class="info_country">
                            <p>89</p>
                            <p>BU</p>
                            <img src="./img/RAJA.jpg" alt="">
                            <img src="./img/RAJA.jpg" alt="">
                        </div>
                        <div class="imgPlayer">
                            <img src="./img/messi img.webp" alt="">
                        </div>
                        <p class="namePlayer">Messi</p>
                        <div class="sta1">
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                            <div>
                                <p>VIT</p>
                                <p>91</p>
                            </div>
                        </div>`
            divplayer.append(newPlyaerDiv)
        })
       
    }
}
AddplayerToBoxOfplayers()




