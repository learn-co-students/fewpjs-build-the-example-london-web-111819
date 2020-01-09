// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likes(){
  const hearts = document.querySelectorAll('.like-glyph')
  for(const heart of hearts){
    heart.addEventListener('click',function(e){
      mimicServerCall()
      .then( function(){
        e.target.classList.toggle('activated-heart')
        if(e.target.classList.contains('activated-heart')){
          e.target.innerText = FULL_HEART;
        } else{
          e.target.innerText = EMPTY_HEART
        }
      })
      .catch(function(error){
        const modal = document.querySelector('#modal')
        modal.classList.remove('hidden')
        const errorDisplay = document.querySelector('#modal-message')
        errorDisplay.innerText = error
        setTimeout(function(){
          
          modal.classList.add('hidden')
        }, 5000)
      })
    })
  }
}

likes()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
