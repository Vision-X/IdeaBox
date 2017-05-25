

var cardPlace = $('.idea-stage');
var newIdea = [];

getIdeaFromStorage();

$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var inputTitle = $('#idea-title').val();
  var inputBody = $('#idea-body').val();
  // var id = Date.now();
  var idea = new Idea(inputTitle, inputBody);

  Idea();
  ideaCard();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', function(){
  var id = $(this).parents('.delete-div')[0].id;
  console.log(id);
  newIdea.forEach(function(idea, index) {
    if (id == idea.id) {
      newIdea.splice(index, 1);
      console.log('spliced array:' + newIdea);
    }
  })
  localStorage.setItem('arrayIs', JSON.stringify(newIdea));
  console.log('stringified idea:' + newIdea);
  $(this).closest('.delete-div').remove();
  localStore();
  deleteCard();
});

$('.idea-stage').on('click', '#upvote', function() {
  var qualityInput = $('#vote');
  var id = $(this).parents('.delete-div')[0].id;
  arrayVoteUp(id, qualityInput.text());

  if (qualityInput.text() === 'swill') {
    qualityInput.text('plausible')
  } else if (qualityInput.text() === 'plausible') {
    qualityInput.text('genius')
  }
});

$('.idea-stage').on('click', '#downvote', downVote);




function Idea(title, body, id) {

  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

function ideaCard(title, body, id) {

  var inputTitle = $('#idea-title').val() || title;
  var inputBody = $('#idea-body').val() || body;
  var newCard = new Idea(inputTitle, inputBody);
  var id = Date.now();
  var quality = 'swill';
  console.log(quality);

  var injection = `
    <div class="delete-div" id=${id}>
      <div class="title-delete">
        <h2 contenteditable="true">${inputTitle}</h2>
        <button class="deletebutton">
        </button>
      </div>
      <p class="body-div" contenteditable="true">${inputBody}</p>
      <div class="vote-and-quality">
        <div class="vote-buttons">
          <button id="upvote">
          </button>
          <button id="downvote">
          </button>
          <p name="quality" id="quality">Quality: <span id="vote">${quality}</span></p>
        </div>
      </div>
      <hr>
    </div>`;

  cardPlace.prepend(injection);
  newIdea.push(newCard);
  console.log(id);
  localStore();
};

function localStore() {
  localStorage.setItem('arrayIs', JSON.stringify(newIdea));
};

function clearInputs() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}

function getIdeaFromStorage() {

  if (localStorage.getItem('arrayIs')) {
      var storedItem = JSON.parse(localStorage.getItem('arrayIs'));

      storedItem.forEach(function(item) {
        var inputNode = ideaCard(item.title, item.body);
        cardPlace.append(inputNode);
      });
  } else {
    console.log('There is nothing locally stored');
  }
}

function deleteCard() {
  $(this).closest('.delete-div').remove();
};

function upVote() {
//   var qualityInput = $('#vote');
//   //
//   // var id = $(this).parents('.delete-div')[0].id;
//   if (qualityInput.text() === 'swill') {
//     qualityInput.text('plausible')
//   } else if (qualityInput.text() === 'plausible') {
//     qualityInput.text('genius')
//   }
// arrayVoteUp(id);
};

function downVote() {
  var qualityInput = $('#vote');

  var id = $(this).parents('.delete-div')[0].id;
  if (qualityInput.text() === 'genius') {
    qualityInput.text('plausible')
  } else if (qualityInput.text() === 'plausible') {
    qualityInput.text('swill')
  }
arrayVoteDown(id);
};

function arrayVoteUp(id, quality) {
  // var id = $(this).parents('.delete-div')[0].id;
  console.log('id from arrayVoteUp(): ' + id);
  console.log(quality);
  newIdea.forEach(function(idea){
    if (id == idea.id) {
      if (quality === 'swill') {
        quality = 'plausible'
      } else if (quality === 'plausible') {
        quality = 'genius'
      }
    }
  })
  localStore();
}

function arrayVoteDown(id, quality) {
  // var id = $(this).parents('.delete-div')[0].id;
  console.log('id from arrayVoteDown(): ' + id);

  newIdea.forEach(function(id){
    if (id == Idea.id) {
      if (quality.text() === 'genius') {
        quality.text('plausible')
      } else if (quality.text() === 'plausible') {
        quality.text('swill') }
      }
  })
  localStore();
};
