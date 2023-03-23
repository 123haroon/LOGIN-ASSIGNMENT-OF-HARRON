
const clr2=()=>{
    document.getElementById("output").innerHTML=" "
}

let cities = ["faisalabad", "karachi", "Lahore", "islamabad", "kashmir"]
document.getElementById("originalstring").innerHTML=cities
const printcity = () => {
    document.getElementById("output").innerHTML = " "
    for (let x = 0; x < cities.length; x++) {
        let num = x + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[x] + '<br>'
       
    }

}
const addcity = () => {
    document.getElementById("output").innerHTML = " "
    let newv = document.getElementById("inputvalue").value
 
    if (!newv) {
        alert("Enter The City Name")
        return
    }

    for (let x = 0; x < cities.length; x++) {
        if (newv == cities[x]) {
            alert("city exist")
        }
    }
    cities.push(newv)
    document.getElementById("output").innerHTML ='<span style="color: darkred;">'+newv+'</span>'+ " "+"Your city is Added"
}

    document.getElementById("project").innerHTML="Project Of JS"+'<h1>&#128578;</h1>'


