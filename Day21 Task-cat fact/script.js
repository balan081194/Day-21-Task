fetch("https://meowfacts.herokuapp.com/")
.then((response)=>response.json())
.then((data)=> {
    catcharacter(data)
})



function catcharacter(data){
    let catcharacter = document.getElementById("catInfo")
    catcharacter.innerText = data.data[0]
}

function refreshPage(){
    window.location.reload();
}