

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
  localStore();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);


// function altGetIdea() {
//
//   var storedItem = localStorage.getItem('newIdea');
//   newIdea = JSON.parse(storedItem);
//   console.log('parsed items: ' + newIdea);
//
//   if (!newIdea) {
//         newIdea = [];
//       }
// }

function Idea(title, body) {

  this.title = title
  this.body = body
  this.id = Date.now();
  this.quality = 'swill'
}

function ideaCard(title, body) {
  // var title = idea.title;
  // var body = idea.body;
  // var id = idea.id;
  var inputTitle = $('#idea-title').val() || title;
  var inputBody = $('#idea-body').val() || body;
  // var id = Date.now();
  // console.log('id from ideaCard(): ' + id);
  var newCard = new Idea(inputTitle, inputBody);

  var injection = `
    <div class="delete-div">
      <div class="title-delete">
        <h2 contenteditable="true">${inputTitle}</h2>
        <button class="deletebutton">
        </button>
      </div>
      <p class="body-div" contenteditable="true">${inputBody}</p>
      <div class="vote-and-quality">
        <button id="upvote">
        </button>
        <button id="downvote">
        </button>
        <p name="quality" id="quality">Quality: ${Idea.quality}</p>
      </div>
      <hr>
    </div>`;

cardPlace.prepend(injection);
newIdea.push(newCard);
};

function localStore() {

  localStorage.setItem('newIdea', JSON.stringify(newIdea));
};

function clearInputs() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}

function getIdeaFromStorage() {

  if (localStorage.getItem('newIdea')) {
      var storedItem = JSON.parse(localStorage.getItem('newIdea'));
      console.log('parsed items: ' + storedItem);

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
  localRemove();
};

function localRemove(id) {
  var grabId = $(this).closest();
  console.log(grabId)
  localStorage.removeItem(grabId);

};

function upVote() {

};

function downVote() {

};
