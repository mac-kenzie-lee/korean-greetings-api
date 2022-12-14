
![Korean Greetings API](https://user-images.githubusercontent.com/106789729/201503185-05bc3322-9199-4301-9483-faccec8e046e.png)
# Korean Greetings API
The Korean Greetings API is an api that uses url endpoints to get data back from a JSON object. 
The data in this object is greetings in english and their Korean counterpart, as well as information on when a particular greeting is used.

**Link to project:** https://korean-greetings-api.herokuapp.com/

<p align='center'> 
  <img src="https://user-images.githubusercontent.com/106789729/201503638-58940bcc-af5f-4c21-904d-d4ffd9778f17.gif" alt="video of how the korean greeting api works" width="450px"> 
</p>
<p align='center'>
<a href="https://korean-greetings-api.herokuapp.com/">Click here to see the live Site and API</a>
</p>

### Data Call Example 
![what a data call looks like in postman](https://user-images.githubusercontent.com/106789729/201503424-44651cce-1af5-4023-a4ed-4abcc00e0590.png)

Here's an example of what a call to https://korean-greetings-api.herokuapp.com/api/hello would look like in postman.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node.js

A node server was created using express, and within the application various routes were declared as well as the json data object itself was written out using data inspired by a handful of greetings that elementary Korean students study, these examples were taken from Sogang University's 1A Student Book with personal input on the romanization and usage meaning inspired by my personal experience of learning Korean for over six years. 

A client side website was created using html, js, and css just simply offering a guide on how to use the API and what endputs are valid.
An interesting thing to note, is that the client side list is dynamic and the valid greetings will update as the original json object updates serverside. The fetch web api is used to call upon the Korean greetings api on the main webpage. 

### Valid api end points: https://korean-greetings-api.herokuapp.com/api/
![an image showing valid data endpoints for api](https://user-images.githubusercontent.com/106789729/201503443-ca93881b-15c1-4b08-9eae-1dbd10418359.png)



## Lessons Learned:

I had issues working with the api on a local server, and fetching remote hosted data. This was resolved by using CORS.
Also I had gotten MIME type errors in relation to serving static files, which was resolved by utilizing a public folder and using the app.use(express.static('public') method call.



## My Other Projects

| <a href="https://decycl.com/"><img src="https://mackenziedev.com/decycle2.gif" alt="decycl site preview"></a>  | <a href="https://github.com/mac-kenzie-lee/drinkLib"><img src="https://github.com/mac-kenzie-lee/drinkLib/blob/master/large-small-dlib.gif?raw=true" alt="small mobile gif of drink lib"></a>  | <a href="https://github.com/mac-kenzie-lee/storyCrafter"><img src="https://github.com/mac-kenzie-lee/storyCrafter/blob/main/storyCrafterGif2.gif?raw=true" alt="Screenshot gif for story crafter"></a> | <a href="https://github.com/mac-kenzie-lee/rockPaperScissorsGame"><img src="https://github.com/mac-kenzie-lee/rockPaperScissorsGame/blob/main/rps.gif?raw=true" alt="rock paper scissors website demo"> </a>| 
| :---:  | :---:   | :---:   | :---: |
| **[Decycl](https://decycl.com)** | **[DrinkLib](https://github.com/mac-kenzie-lee/drinkLib)**  | **[Story Crafter](https://github.com/mac-kenzie-lee/storyCrafter)**  | **[Rock Paper Scissors](https://github.com/mac-kenzie-lee/rockPaperScissorsGame)** | 
| Connecting businesses with recyclers to bring value to everyone. |  Find your next cocktail | Remember your wins & grow your career | Bright, simple challenge VS the computer. |
| <a href="https://github.com/mac-kenzie-lee/not-too-boring/"><img src="https://github.com/mac-kenzie-lee/not-too-boring/blob/main/nottooboring.gif?raw=true" alt="Not Too Boring website demonstration"></a> | <a href="https://github.com/mac-kenzie-lee/etch-a-sketch-project"><img src="https://github.com/mac-kenzie-lee/etch-a-sketch-project/blob/main/etchasketch.gif?raw=true" alt="Etch a sketch demo"></a> | <a href="https://github.com/mac-kenzie-lee/prompt-projects"><img src="https://camo.githubusercontent.com/88645933ac6a3ba4f25ef4fc14b8562a27e12d4b909e4aaaa00278a04688059b/68747470733a2f2f66616b6577656c6c2e6d61636b656e7a69656465762e636f6d2f66616b6577656c6c2d3235302d616e696d6174652e676966" alt="fakewell site"></a>  | <a href="https://github.com/mac-kenzie-lee/korean-greetings-api"><img src="https://user-images.githubusercontent.com/106789729/201503638-58940bcc-af5f-4c21-904d-d4ffd9778f17.gif" alt="small mobile gif of korean greeting api"></a>
|  **[Not Too Boring](https://github.com/mac-kenzie-lee/not-too-boring/)**  | **[Etch A Sketch Project](https://github.com/mac-kenzie-lee/etch-a-sketch-project)** | **[Fakewell](https://github.com/mac-kenzie-lee/prompt-projects)** | **[Korean Greetings API](https://github.com/mac-kenzie-lee/korean-greetings-api)**  |
| Rainy, hot, cold days won't stop you from having a good time in these cities... | A retro throwback drawing application allows for pixelated sketching | Calculate, the clunky old style way |  Find greetings in Korean with this API | 
<br>

