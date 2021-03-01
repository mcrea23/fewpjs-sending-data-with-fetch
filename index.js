function submitData(name, email){
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          name: name,
          email: email
      })
  }).then(function(response){
      return response.json();
  }).then(function(object){
      appendToDOM(object)
  }).catch(function(error){
      let errorP = document.createElement("p")
      errorP.innerHTML = "Unauthorized Access"
      document.querySelector("body").prepend(errorP)
      alert("Unathorized Access")
      console.log(error.message)
  })
}
function appendToDOM(obj){
  let pEl = document.createElement("p")
  pEl.innerHTML += `${obj.name} ${obj.email} ${obj.id}`

  document.querySelector("body").prepend(pEl)
  console.log(obj.id)
}

window.addEventListener("DOMContentLoaded", function(){

  submitData("Jim", "jim@jim.com")
})