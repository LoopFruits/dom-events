//Dom Events Video 


//.addEventListener()
    // "Listens" for events from the browser 
    // Take callback as an argument 
    // Will execute the callback when the event fires and
    // Will pass the callback an event object 

//.removeEventListener()
    // Will remove the eventListener 
    // Must match the event being removed 

//How do you interact with a web app 
    // clicking 
    // hovering 
    // tapping 
    // submitting forms 
    // typing(key events)
    // scrolling
    // copying 
    // pasting


// example of a mouseover event / event listener   
document.querySelector('form').addEventListener
('mouseover', e => console.log(e))


// creating an alert on a button 
document.querySelector('#alert').addEventListener // grabbed the alert button, added an eventListener to it 
('click', () => alert('Hi I was clicked')) // add a click event to it, and a callback function to alert us 
// javaScript won't run the alert if we don't have the anonymous function(empty parenthesis"()")

// we can write it like this as well as
document.querySelector('#alert').addEventListener
('click', function(){ // the function with the empty () is invoking the function 
    return 'Hi I was clicked!'
})


//log something
document.querySelector('#log').addEventListener
('click',() => console.log('I\'ve been logged'))



//Will delete task  // callback function , written after the code on line 56 
function handleDelete(e){
    e.target.parentNode.remove() // we remove not only the parent node, but everything in it 
}



//Grabs button and deletes parent Node 
function addEventListenerToDeleteButtons(){
    let buttons = document.getElementsByClassName
    ('delete_btn')
    for(let btn of buttons){
        btn.addEventListener('click',handleDelete)
    }
}

addEventListenerToDeleteButtons()