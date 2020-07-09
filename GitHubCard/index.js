//STEP 0: importing Axios
import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const marsData = 'https://api.github.com/users/mmendes24'

function getCard(dataObj){
axios.get(dataObj)
.then( (dataObj) => {
    const cards = document.querySelector('.cards')
    const card = document.createElement('div')
    card.classList.add('card')
    const imgURL = document.createElement('img')
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    const h3El = document.createElement('h3')
    h3El.classList.add('name')
    const userName = document.createElement('p')
    userName.classList.add('username')
    const location = document.createElement('p')
    const profile = document.createElement('p')
    const link = document.createElement('a')
    const followers = document.createElement('p')
    const following = document.createElement('p')
    const bio = document.createElement('p')
  
    cards.appendChild(card)
    card.appendChild(imgURL)
    card.appendChild(cardInfo)
    cardInfo.appendChild(h3El)
    cardInfo.appendChild(userName)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)
    profile.appendChild(link)
  
      h3El.textContent = dataObj.data.name
      imgURL.src = dataObj.data.avatar_url
      userName.textContent = dataObj.data.login
      location.textContent = dataObj.data.location
      link.setAttribute('href', dataObj.data.html_url)
      profile.textContent = `Profile: ${link}`
      followers.textContent = `Followers: ${dataObj.data.followers}`
      following.textContent = `Following ${dataObj.data.following}`
      bio.textContent = dataObj.data.bio
      console.log(dataObj)
      console.log('New Orleans, can you read me?')
    return console.log(card)
})
.catch( () => {
  console.log('Sorry New Orleans, all dark.')
});
}

getCard(marsData)



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
// ok
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const harry = 'https://api.github.com/users/HarryHenryGebel'
const sage = 'https://api.github.com/users/sage-jordan'
const julliann = 'https://api.github.com/users/jdulay91'
const orlando = 'https://api.github.com/users/OrlandoDavila'
const andy = 'https://api.github.com/users/AndyWatts712'

const followersArray = [harry, sage, julliann, orlando, andy];

followersArray.forEach((item) => {
  getCard(item)
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
