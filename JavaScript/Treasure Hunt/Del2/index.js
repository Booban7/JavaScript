document.addEventListener('DOMContentLoaded', function () {
  init();
});

var sum = 0;

function init() {
  initGameUI();
}

function initGameUI() {
  initChests();
  initRefreshButton();
  placeTreasure();
  getImage();
  initChestsEventListener();
  initScoreboard();
}

function initChests() {
  chest = document.getElementById('chests');
  chestOne = document.createElement('img');
  chestOne.setAttribute('src', 'images/chest-closed.png');
  chestOne.setAttribute('id', 'chest-one');
  chestOne.style.padding = '10px';
  chest.appendChild(chestOne);

  chest = document.getElementById('chests');
  chesttwo = document.createElement('img');
  chesttwo.setAttribute('src', 'images/chest-closed.png');
  chesttwo.setAttribute('id', 'chest-two');
  chesttwo.style.padding = '10px';
  chest.appendChild(chesttwo);

  chest = document.getElementById('chests');
  chestthree = document.createElement('img');
  chestthree.setAttribute('src', 'images/chest-closed.png');
  chestthree.setAttribute('id', 'chest-three');
  chestthree.style.padding = '10px';
  chest.appendChild(chestthree);


}

function initScoreboard() {
  score = document.createElement('p');
  score.innerText = 'Score: ' + sum;
  document.getElementById('game-wrapper').appendChild(score);
  score.style.textAlign = 'center';
  score.style.color = 'white';
  score.style.fontsize = '30px';
  score.id = 'score';
}

function initRefreshButton() {
  myButton = document.getElementById('refresh-button');

}

function initChestsEventListener() {
  chestOne.addEventListener('click', chestClicked);
  chesttwo.addEventListener('click', chestClicked);
  chestthree.addEventListener('click', chestClicked);
  myButton.addEventListener('click', refresh);
}


function getImage() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1')
  xhr.setRequestHeader('Authorization', '563492ad6f91700001000001e5166d63f342420c9f208813a30e57b3');
  xhr.addEventListener('load', function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this);  // Whole response object
      console.log(this.responseText);  // The response data
      images = JSON.parse(this.responseText); // Parses the JSON to a workable JavaScript object
    }
  })
  xhr.send();
}

function chestClicked(e) {
  removeChestEvents();
  console.log(images)
  e.target.src = 'images/chest-open.png';
  randomImage = Math.round(Math.random() * images.photos.length);
  console.log(randomImage)
  image = images.photos[randomImage].src.small;


  if (e.target == chestOne && randomNumber == 1) {
    sum = sum + 5;
    e.target.src = image;
  }
  if (e.target == chesttwo && randomNumber == 2) {
    e.target.src = image;
    sum = sum + 5;
  }
  if (e.target == chestthree && randomNumber == 3) {
    e.target.src = image;
    sum = sum + 5;
  }

  score.innerText = 'score: ' + sum;
}

function refresh() {
  placeTreasure();
  initChestsEventListener();
  chestOne.src = 'images/chest-closed.png';
  chesttwo.src = 'images/chest-closed.png';
  chestthree.src = 'images/chest-closed.png';
}

function placeTreasure() {
  randomNumber = Math.floor((Math.random() * 3) + 1);
  console.log(randomNumber);
  return randomNumber;

}




function removeChestEvents() {
  chestOne.removeEventListener('click', chestClicked);
  chesttwo.removeEventListener('click', chestClicked);
  chestthree.removeEventListener('click', chestClicked);
}


