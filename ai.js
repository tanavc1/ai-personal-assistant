function execute() {
    var command= document.getElementById('entercommand').value;
    var commandoccurence= command.indexOf('Hello')  // says Hello
    if (commandoccurence >= 0) {
        var sound= new Audio()
        sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Hello Sir!' +"&tl=en&client=tw-ob"
        sound.play()  
    }  
    var commandhello= command.indexOf('hello')  // says Hello
    if (commandoccurence >= 0) {
        var sound= new Audio() 
        sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Hello Sir!' +"&tl=en&client=tw-ob"
        sound.play()  
    }  
    var commandHi= command.indexOf('Hi')  // says Hello
    if (commandHi >= 0) {
        var sound= new Audio()
        sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Hello Sir!' +"&tl=en&client=tw-ob"
        sound.play()  
    }   
    var commandhi= command.indexOf('hi')  // says Hello
    if (commandhi == 0) {
        var sound= new Audio()
        sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Hello Sir!' +"&tl=en&client=tw-ob"
        sound.play()
    }   
        var commandrandom= command.indexOf('random number')  // get random number 1-10
        if (commandrandom >= 0) {
            var sound= new Audio()
            sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + Math.floor(Math.random()*11) +"&tl=en&client=tw-ob"
            sound.play()             
            } 

            var commandmultiply= command.indexOf('*') // multiply
            if (commandmultiply >= 0) {
                commandadjust= (parseInt(commandmultiply))+1
                console.log(commandadjust)
                var firstnumber= command.slice(0,commandmultiply) 
                var secondnumber= command.substr(commandadjust) 
                finalnumberone=parseInt(firstnumber)
                finalnumbertwo=parseInt(secondnumber) 
                console.log(firstnumber)
                console.log(secondnumber) 
                alert(finalnumberone*finalnumbertwo)   
            }
            var commanddivide= command.indexOf('/') // divide
            if (commanddivide >= 0) {
                commandadjust= (parseInt(commanddivide))+1
                console.log(commandadjust)
                var firstnumber= command.slice(0,commanddivide) 
                var secondnumber= command.substr(commandadjust) 
                finalnumberone=parseInt(firstnumber)
                finalnumbertwo=parseInt(secondnumber) 
                console.log(firstnumber)
                console.log(secondnumber) 
                alert(finalnumberone/finalnumbertwo)   
            } 
            var commandadd= command.indexOf('+') // add 
            if (commandadd >= 0) {
                commandadjust= (parseInt(commandadd))+1
                console.log(commandadjust)
                var firstnumber= command.slice(0,commandadd) 
                var secondnumber= command.substr(commandadjust) 
                finalnumberone=parseInt(firstnumber)
                finalnumbertwo=parseInt(secondnumber) 
                console.log(firstnumber)
                console.log(secondnumber) 
                alert(finalnumberone + finalnumbertwo)   
            }  

            var commandsubtract= command.indexOf('-') // subtract 
            if (commandsubtract >= 0) {
                 var commandadjust= (parseInt(commandsubtract))+1
                console.log(commandadjust)
                var firstnumber= command.slice(0,commandsubtract) 
                var secondnumber= command.substr(commandadjust) 
                finalnumberone=parseInt(firstnumber)
                finalnumbertwo=parseInt(secondnumber) 
                console.log(firstnumber)
                console.log(secondnumber) 
                alert(finalnumberone - finalnumbertwo)   
         
           }
 
           function oneThroughSix(min, max) {
               return Math.floor(Math.random()*(max-min)) + min
           }
           var roll= command.indexOf('roll') // rolls a dice 
           var dicenumber=oneThroughSix(1,7)
           if (roll >= 0) { 
            var finaldicenum = 'I rolled a' + dicenumber
            var sound= new Audio()
            sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finaldicenum +"&tl=en&client=tw-ob"
            sound.play()  
           }  
           
           var name= command.indexOf('name') // tells you his name  
           if (name >= 0) {
            var sound= new Audio()
            sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'My name is Gene' +"&tl=en&client=tw-ob"
            sound.play()  
           }
           function coinFlip(min,max) {
             return Math.floor(Math.random()*(max-min)) + min
           }
        var coin= command.indexOf('coin')   // flips a coin
        var coinnumber= coinFlip(1,3)
           if (coin >= 0) {
         if (coinnumber == 2) {
            var sound= new Audio()
            sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Tails!' +"&tl=en&client=tw-ob"
            sound.play()  
         }  
         if (coinnumber== 1) {
            var sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Heads!' +"&tl=en&client=tw-ob"
       sound.play()  
     }
         }
let reminder= command.indexOf('remind')   // reminds user about something, they can set a time
let remindto= command.indexOf('to')+3 
let finalremind= command.substr(remindto)   
let min= command.indexOf('minute')-3 
let second= command.indexOf('second')-3
let secondsnumbervalue= command.substr(3,second)
let minsnumbervalue= command.substr(3,min) 
let secondsinmili= secondsnumbervalue*1000 
let minsinmili= minsnumbervalue*60000
if (reminder >= 0) {
    if(secondsnumbervalue>0) {
 setTimeout(function seconds() {
    var sound= new Audio()
    sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finalremind +"&tl=en&client=tw-ob"
    sound.play()
 } , secondsinmili) 
}
if (minsnumbervalue>0) {
    setTimeout(function seconds() {
        var sound= new Audio()  
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finalremind +"&tl=en&client=tw-ob"
       sound.play()
    } , minsinmili)
    
}
}
let timer= command.indexOf('timer')
let seconds2final= command.indexOf('seconds')-1  
let wordfor= command.indexOf('for')+3    
let minute= command.indexOf('minutes') 
let timenumber= command.slice(wordfor,seconds2final)
let mins= command.indexOf('minute')-1 
let x= command.slice(wordfor,mins)   
let minsinmilitimer= x*60000   
let secondsinmilitimer= timenumber*1000
let seconds2= command.indexOf('seconds')  
if (timer>=0) { 
    if (minute>= 0) {
        setTimeout(function minutes2() {
            alert('Done!') } , minsinmilitimer)    
    } 
    if (seconds2>=0) {
        setTimeout(function seconds2fun() {
            alert('Done!') } , secondsinmilitimer)
    }
    
} 
function extraZero(t) {
    if (t<10) {
        t= '0' + t
    } 
    return t 
}
   
 function regularTime(v) {
    if (v>13) {
     v= v-12
    }
    return v
 }
     
 

 let hourseen= command.indexOf('time')  // time 
 let date= new Date()  
 let hours= regularTime(date.getHours()) 
 let minutes= extraZero(date.getMinutes())  
 let startphrase= 'The time is '
 let finaltime= hours + ':' + minutes 
 let finalphrase= startphrase + finaltime
if (hourseen>=0) {
    var sound= new Audio()
    sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finalphrase +"&tl=en&client=tw-ob"
    sound.play()  
} 
var temperature= command.indexOf('temperature')// gives temperature in certain place
var tempmore= command.indexOf('temperature')+12
let inless= command.indexOf('in')-1
let middlevalue= command.slice(tempmore,inless)
var infinal= command.indexOf('in')+3 
var cityforweather= command.substr(infinal)  
if (temperature>=0) {
   var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let temp= mydata.main.temp
       var finalphrasetemp= 'The temperature in ' + cityforweather + ' is ' + mydata.main.temp + ' degrees Fahrenheit'
       var sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finalphrasetemp +"&tl=en&client=tw-ob"
       sound.play()   
       }
       
   }
     
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + cityforweather + "&appid=9d15c13de2fcaeb2062360600b2b0d1d&units=imperial", true);
    request.send();
} 

let weather= command.indexOf('weather') // gives weather in certain place 
let infinalz= command.indexOf('in')+3 
let cityforweatherz= command.substr(infinalz) 
if (weather>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let weatherdec= mydata.weather[0].description
          let sound= new Audio()
           sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + weatherdec +"&tl=en&client=tw-ob"
           sound.play()  
       }
}
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + cityforweatherz + "&appid=9d15c13de2fcaeb2062360600b2b0d1d&units=imperial", true);
request.send();
} 
let day= command.indexOf('day') // gives day of week 
if (day>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let dayofweek= mydata.dayOfTheWeek 
           addayofweek= 'Today is ' + dayofweek
           var sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + addayofweek + "&tl=en&client=tw-ob"
       sound.play() 
       }
}
request.open("GET", url= "http://worldclockapi.com/api/json/utc/now", true);
request.send();
} 
let plot= command.indexOf('plot') 
let ofwordz= command.indexOf('of')+3
let movie= command.substr(ofwordz)  
let movieurl= "http://www.omdbapi.com/?t=" + movie + "&plot=full&apikey=56b8190b" 
if (plot>=0) {                                       // gives plot of a movie 
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let plotinfo= mydata.Plot  
           let sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + plotinfo +"&tl=en&client=tw-ob"
        sound.play()    
        if (plotinfo.length >=200) {
            alert(plotinfo)
        } 
        }
       }  
       request.open("GET", movieurl , true);
      request.send(); 
}

  
let datez= command.indexOf('date') // gives date, time, and day 
if (datez>=0) {
    var sound= new Audio()
    sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + Date() +"&tl=en&client=tw-ob"
    sound.play()  
}
let ratings= command.indexOf('rating') // gives and imdb rating of a movie. and example is 5/10 
let fromword= command.indexOf('for')+4
let moviez= command.substr(fromword)  
let movieurlz= "http://www.omdbapi.com/?t=" + moviez + "&plot=full&apikey=56b8190b" 
if (ratings>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let rating= mydata.Ratings[0].Value 
           let speechadjustrating= rating.replace("/", " out of ")
           console.log(rating)
           let sound= new Audio()
           sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + speechadjustrating +"&tl=en&client=tw-ob"
            sound.play()
       }
}
request.open("GET", movieurlz , true);
request.send();
}   
let stock= command.indexOf('stock')
let of= command.indexOf('of')+3 
let companyname= command.substr(of) 
if (stock>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let tickersymbol= mydata.quote.latestPrice
           let finalstockphrase= tickersymbol + " dollars" 
           console.log(tickersymbol) 
           let sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + finalstockphrase +"&tl=en&client=tw-ob"
        sound.play()  
       }
       
}
request.open("GET",url="https://api.iextrading.com/1.0/stock/"+companyname+"/book", true);
request.send();
} 
let thanks= command.indexOf('Thank you') 
if (thanks>=0) {
    var sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'It is my pleasure!' +"&tl=en&client=tw-ob"
       sound.play()  
} 
 let stop= command.indexOf('stop') 
 if (stop>=0) {
    let sound= new Audio()
    sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + 'Okay' +"&tl=en&client=tw-ob"
     sound.play()
 }  
  let netflix= command.indexOf('netflix') 
    if (netflix>=0) {
       window.open(url= "https://www.netflix.com"); 
    } 
    let hulu= command.indexOf('hulu') 
    if (hulu>=0) {
       window.open(url= "https://www.hulu.com"); 
    }  
  let rap= command.indexOf('rap playlist') 
      if (rap>=0) {
          window.open(url="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd")
      }

let chinesefood= command.indexOf('chinese food') 

if (chinesefood>=0) {
    window.location.href= 'https://www.beyondmenu.com/21768/westborough/three-gorges-three-westborough-01581.aspx?utm_source=satellite&utm_medium=menu_group#group_1754230'
} 
let tomorrow = command.indexOf(' temperature tomorrow')
var inval= command.indexOf('in')+3 
var cityfortomorrow= command.substr(inval)
if (tomorrow>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let fax= mydata.list[0].main.temp  
           let adjfax=  'It will be '+ fax + 'degrees Farenheit' + 'in '  + cityfortomorrow + 'tomorrow'
           let sound= new Audio()
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + adjfax +"&tl=en&client=tw-ob"
        sound.play()
       }
} 
request.open("GET", url= "http://api.openweathermap.org/data/2.5/forecast?q=" + cityfortomorrow +"&units=imperial&appid=9d15c13de2fcaeb2062360600b2b0d1d", true);
request.send();
} 
let ingred =command.indexOf('ingredients')
let forzz= command.indexOf('for')+3
let fooditem= command.slice(forzz) 
if (ingred>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let faxzz= mydata.hits[0].recipe.ingredientLines
           let sound= new Audio()
           console.log(faxzz)
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + faxzz +"&tl=en&client=tw-ob"
        sound.play()
       }
    }
request.open("GET", url= "https://api.edamam.com/search?q=" + fooditem + "&app_id=75f6f999&app_key=e56bfa244610f406531ce3a4b50c8698", true);
request.send();
}  
var jokes= command.indexOf('joke')
if (jokes>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let thejoke= mydata.attachments[0].text
           let sound= new Audio()
           console.log(thejoke)
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + thejoke  +"&tl=en&client=tw-ob"
        sound.play()
       }
    }
request.open("GET", url= "https://icanhazdadjoke.com/slack", true);
request.send();
}  
 let about= command.indexOf('about')    
 let aboutadj= command.indexOf('about')+6 
 let rawcommand = command.substr(aboutadj)  
if (about>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let theinfo= mydata.RelatedTopics[0].Text
           let sound= new Audio()
           console.log(theinfo)
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + theinfo  +"&tl=en&client=tw-ob"
        sound.play()
       }
    }
request.open("GET", url= "https://api.duckduckgo.com/?q="+rawcommand+"&format=json", true);
request.send();
}  
let whoissboom= command.indexOf('who is')
let iszz= command.indexOf('is')    
 let iszzadj= command.indexOf('is')+3 
 let issraw = command.substr(iszzadj)  
if (whoissboom>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let theinfo= mydata.RelatedTopics[0].Text
           let sound= new Audio()
           console.log(theinfo)
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + theinfo  +"&tl=en&client=tw-ob"
        sound.play()
       }
    }
request.open("GET", url= "https://api.duckduckgo.com/?q="+issraw+"&format=json", true);
request.send();
} 
let news= command.indexOf('news')
if (news>=0) {
    var request= new XMLHttpRequest() 
   request.onreadystatechange= function() {
       if (request.readyState == 4 && request.status == 200) {
           let mydata= JSON.parse(request.responseText) 
           let theinfo= mydata.articles[0].title
           let sound= new Audio()
           console.log(theinfo)
       sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + theinfo  +"&tl=en&client=tw-ob"
        sound.play()
     }
     let sound= new Audio()
        console.log(desc)
    sound.src= "https://translate.google.com/translate_tts?ie=UTF-8&q=" + desc  +"&tl=en&client=tw-ob"
     sound.play()
    }
request.open("GET", url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd0a135d268c47b5b3305d751c91d750", true);
request.send();
}     
}
