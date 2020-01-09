// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorBox = document.querySelector('#modal')
const errorPara = document.querySelector('#modal-message')
errorBox.classList.add('hidden');

const likeHeart = document.getElementsByClassName('like-glyph')
for(let i = 0; i < likeHeart.length; i++) {
  likeHeart[i].addEventListener('click', function(e) {
      mimicServerCall().then(function(response) {
      console.log(response)
      e.target.innerHTML = FULL_HEART
      likeHeart[i].style.color = 'red'
    })
    .catch((error) => {
      errorBox.classList.remove('hidden')
      errorPara.textContent = error
      console.log(error)
      likeHeart[i].innerText = EMPTY_HEART
      setTimeout(function() {
        errorBox.classList.add('hidden')
      }, 5000)
    })
  })
}



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
