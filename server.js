const express = require('express')
const app = express();
const PORT = 8000;
const cors = require('cors')

app.use(cors())

const greetings = {
    'hello': {
        'Standard Korean': '안영하세요?',
        'Romanization': 'an-yeong-ha-sae-yo?',
        'When it is used': "When greeting others"
    },
    'goodbye i am going': {
        'Standard Korean': '안녕히 계세요',
        'Romanization': 'an-yeong-hee kay-sae-yo',
        'When it is used': "When a person is somewhere and wants to leave, this is what they said to the person they are leaving behind. It means please stay well"
    },
    
    'goodbye you are going': {
        'Standard Korean': '안녕히 가세요',
        'Romanization': 'an-yeong-hee ka-sae-yo',
        'When it is used': "When a person is somewhere and someone else is about to leave, this is what is said to the person who is leaving. It means please go well"
    },
    'thank you': {
        'Standard Korean': '감사합니다',
        'Romanization': 'kam-sa-ham-ni-da',
        'When it is used': 'To say thank you to someone in a polite way'
    },
    
    'nice to meet you': { 
        'Standard Korean': '반갑습니다',
        'Romanization': 'ban-gap-sum-ni-da',
        'When it is used': 'When meeting someone and saying you are glad to meet them'
    },
    'happy birthday': {
        'Standard Korean': '생일 축하합니다',
        'Romanization': 'seng-il chuk-kam-ni-da',
        'When it is used': 'To congratulate someone on their birthday'
    },
        'welcome': {
            'Standard Korean': '어서 오세요',
            'Romanization': 'eoh-seo oh-sae-yo',
            'When it is used': 'To welcome people into a store usually.'
        
    },

    'how have you been these days': {
        'Standard Korean': '요즘 잘 지내요?',
        'Romanization': 'yo-jeum chal ji-nae-yo?',
        'When it is used': 'To ask someone how they have been doing lately'

    },

    'unknown':{
        'Standard Korean': 'not listed',
        'Romanization': 'unknown',
        'When it is used': 'unknown'
    }

}

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

//greeting can be called anything
app.get('/api/:greeting', (request, response) => {
    const greetingSearch = request.params.greeting.toLowerCase();
  
    if (greetingSearch === 'all') {
        response.json(greetings)
    }
  
   else if (greetings[greetingSearch]) {
        response.json(greetings[greetingSearch]) 
    }
    else {
        response.json(greetings['unknown'])
    }
    
}
)





//needs to be set up to listen.
app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port: ${PORT}.`)
})

