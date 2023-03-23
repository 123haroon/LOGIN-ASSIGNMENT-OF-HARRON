const nextpage=()=>{
    event.preventDefault()
let username= ""
username=document.getElementById("fullname").value 
let email=""
email=document.getElementById("fullemail").value
let password=""
password=document.getElementById("enterpass").value 

    if (email=="saylani@1234"&& password=="123456"){
        // document.write("<a href='./page.html'>cdfsf</a>");
        window.location.href="page.html"
    }
    else{
        alert("Wrong input!")
    }
}
