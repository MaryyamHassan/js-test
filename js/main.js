
$(document).ready(function () {


 

    let myicon = document.getElementById("myiconnn")


    $("#myicon").click(function () {
        
        let width = $(".inside").outerWidth()
        let left = $(".sidebar").css("left")
        if (left == "0px") {
            $(".sidebar").animate({ left: `-${width}px` }, 1000)
            myicon.classList.remove("fa-solid", "fa-x")
            myicon.classList.add("fa-solid", "fa-bars")

        }
        
        else {

            $(".sidebar").animate({ left: "0px" }, 1000)
            myicon.classList.remove("fa-solid", "fa-bars")
            myicon.classList.add("fa-solid", "fa-x")

        }



    }

    )

    













// async function getCatData(){
//     let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
//     let data = await Req.json()
//     Catlist= data.categories
    

  

//     displaycat()
 
// }
// function displaycat(){
//     let temp=""
//     Catlist.forEach((e)=>{
//         temp+= `<div class="col-md-3">
//         <div class="mealimg ">
//             <img src="${e.strCategoryThumb}" alt="" class="w-100">
//         <div class="layer">
//             <div class="distitle">${e.strCategory}</div>
//             <div class="description">      <p>${e.strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
//             </div>
            
//         </div>
//         </div>
        
//     </div>`
//     }
//     )
//     document.getElementById("mycatt").innerHTML = temp
// }

// getCatData()









// async function getArea(){
//     let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
//     let data = await Req.json()
//     Arealist= data.meals
//     displayArea()
//     // console.log(Arealist);
// }
// function displayArea(){
//     let temp=""
//     Arealist.forEach((e)=>{
//         temp+= `<div class="col-md-3 " >
        
//         <i class="areai fa-solid fa-house-laptop fs-1" ></i>
//         <div class="areatitle">
//         <h3>${e.strArea}</h3>
//         </div>
   
        
        
//     </div>`
//     }
//     )
//     document.getElementById("myarea").innerHTML = temp
//     // areaMeal()
// }

// getArea()
  




































// console.log(Arealist);
// async function areaMeal(AreaaMeal){
//     let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaaMeal}`)
//     let data = await Req.json()
//     Areameallist= data.meals
//     displayAreaMeal()
//     // console.log(Arealist);
// }
// function displayAreaMeal(){
//     let temp=""
//     Areameallist.forEach((e)=>{
//         temp+= `<div class="col-md-3">
//         <div class="con ">
//             <img src="${e.strMealThumb}" alt="" class="w-100">
//         <div class="layer">
//             <div class="title">${e.strMeal}</div>
//         </div>
//         </div>
//     </div>`
//     }
//     )
//     document.getElementById("myarea").innerHTML = temp
//     // areaMeal()
// }

// areaMeal()






// async function getIngred(){
//     let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
//     let data = await Req.json()
//     Ingredlist= data.meals
//     displayIngred()
//     // console.log(Ingredlist);
// }
// function displayIngred(){
//     let temp=""
//     Ingredlist.forEach((e)=>{
//         temp+= `<div class="col-md-3">
        
//         <i class="dabos fa-solid fa-drumstick-bite fs-1"></i>
//         <div class="ingredtitle">
//         <h3>${e.strIngredient}</h3>
        
//         <p>${e.strDescription}</p>
       
//         </div>
   
        
        
//     </div>`
//     }
//     )
//     document.getElementById("myingredients").innerHTML = temp
// }

// getIngred()









// async function getSearch(){
//     let Req= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
//     let data = await Req.json()
//     Searchlist= data.meals
    
//     displaysearch()
//     // search()
//     // console.log(Searchlist);
// }
// function displaysearch(){
//     if ($(e.strMealThumb).toLowerCase().includes(searchVal) == true ) {
//          let temp=""
//     Searchlist.forEach((e)=>{

//         temp+= `<div class="col-md-3 ">
       
//         <img src="${e.strMealThumb}" alt="" class="w-100">

        
        
//     </div>`
//     }
//     )
//    console.log(e.strMealThumb);


 
//     document.getElementById("mysearch").innerHTML = temp
    

// } else{
//     document.getElementById("mysearch").innerHTML = " "
// }

// getSearch()


function showContacts() {
    rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    
}

// function search() {
//     var searchVal = searchInput.value.toLowerCase()
//     Searchlist.forEach((e)=>{
//         if ($(e.strMealThumb).toLowerCase().includes(searchVal) == true ) {
//             mysearch.classList.remove("d-none")
//             mysearch.classList.add("d-block")

//         }
//     })
//     // document.getElementById("tableBody").innerHTML = temp

// }


    $(".loading").fadeOut(3000)
})








// async function area(){
//     contain.innerHTML=" "

//     var myHttparea= await fetch(https://www.themealdb.com/api/json/v1/1/list.php?a=list)
//       var areaRsponse = await myHttparea.json()
      
//       areaarr=areaRsponse.meals
      
//       displayarea()
//       let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
//         $(".sideBar ").css({left:-sideBarInnerWidth})
// }


// area()

// function displayarea (){
//     var  areacorner = ''
//     for (let i = 0; i < areaarr.length; i++) {
//         areacorner+= `<div class="col-md-3 text-white area" onclick="areaMeal('${areaarr[i].strArea}')">
//         <i class="fa-solid fa-house-laptop "></i>
//         <p class="fs-2 fw-bold">${areaarr[i].strArea}</p>
//     </div>`
        
//     }
//     contain.innerHTML=areacorner
    
// }

// async function areaMeal(AreaaMeal){
//     contain.innerHTML=" "

//     let req= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaaMeal}`)
//     let data = await req.json()
//     areameallist=data.meals
//     displayAreaMeal()
//     // let sideBarInnerWidth = $(".sideBar-Inner").innerWidth();
//     //     $(".sideBar ").css({left:-sideBarInnerWidth})
// }
// areaMeal()
// function displayAreaMeal(){
//     let temp=""
//    areameallist.forEach((e)=> {
//         temp+= `<div class="col-md-3">
//        <div class="con ">
//            <img src="${e.strMealThumb}" alt="" class="w-100">
//        <div class="layer">
//            <div class="title">${e.strMeal}</div>
//        </div>
//        </div>
//    </div>`
        
//     })
//     document.getElementById("myareameal").innerHTML = temp
    
// }


