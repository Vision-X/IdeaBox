

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
    // localStore();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);




function Idea(title, body) {

  // this.id = Date.now();
  this.title = title
  this.body = body
  this.quality = 'swill'
}

function ideaCard(title, body) {

  var inputTitle = $('#idea-title').val() || title;
  var inputBody = $('#idea-body').val() || body;
  var newCard = new Idea(inputTitle, inputBody);
  var id = Date.now()

  var injection = `
    <div class="delete-div" id=${id}>
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
console.log(id);
localStore(id);
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
      // console.log('parsed items: ' + storedItem);

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

function localRemove() {
  var grabId = $('.deletebutton').parent().parent().attr('id');
  console.log(grabId);
  localStorage.removeItem(grabId);
};

function upVote() {

};

function downVote() {

};
