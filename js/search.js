let searchInput = document.getElementById("SBN")
let mealll = []
let searchVal = searchInput.value.toLowerCase()


async function getData(searchVal) {
    let Req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchVal}`)
    let data = await Req.json()
    mealll = data.meals
    searchhh()
}
function searchhh() {
    let temp = ""
    mealll.forEach((e) => {
        temp += `<div class="col-md-3">
        <div class="mealimg " >
            <img  src="${e.strMealThumb}"  alt="bb" class="w-100">
            <div class="recipeid d-none ">${e.idMeal}</div>
            

        <div class="layer">
            <div class="title">${e.strMeal}</div>
        </div>
        </div>
        
    </div>`
    }
    )
    document.getElementById("mysearch").innerHTML = temp
}

getData()






