
document.addEventListener("DOMContentLoaded", function() {
  
  const modal = document.querySelector('#modal')
  modal.hidden = true;

  let likeButtons = document.querySelectorAll('.like-glyph')
    
  for(const element of likeButtons) {
    element.addEventListener("click", function(e){
    mimicServerCall()
    .then(function(response){
      if (e.target.classList.contains("activated-heart")) {
         e.target.classList.remove("activated-heart")
      } else {
        e.target.classList.add("activated-heart")
      }
    })                          
    .catch(function(error){
      modal.hidden = false;
      modal.innerText = error;
      setTimeout(function(){ modal.hidden = true}, 5000);

    });  
    })

  }
  

  
                      


});



// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'









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
