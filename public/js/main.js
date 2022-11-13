
 async function apiGreetingCall(){
     try{
         const response = await fetch(`https://korean-greetings-api.herokuapp.com/api/all`)
         const data = await response.json()
         console.log(data)
     } catch (err) {
        console.log('not working')
         console.log(err)
     }
}

apiGreetingCall()