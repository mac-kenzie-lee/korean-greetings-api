const greetingUl = document.querySelector("#placeForValidGreetings");





 async function apiGreetingCall(){
     try{
         const response = await fetch(`https://korean-greetings-api.herokuapp.com/api/all`)
         const data = await response.json()
         for (let i in data) {
            if (i !== 'unknown')
            createLi(i, greetingUl)
         }
     } catch (err) {
        console.log('not working, heroku not fetching: ')
         console.log(err)
     }
}

apiGreetingCall()

function createLi(text, parent) {
    let li = document.createElement("li");
    li.textContent = text;
    parent.appendChild(li)
}