
getIdeaFromStorage();
var newIdeas = []


$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();
  var id = Date.now();
  var idea = new Idea(title, body, id);

  Idea();
  ideaCard();
  // getKey();
  localStore();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);


function getIdeaFromStorage() {
  if (localStorage.getItem('card')) {
      var storedItem = localStorage.getItem('card');
      var parsedItem = JSON.parse(storedItem);
      console.log('parsed items: ' + parsedItem);

      parsedItem.forEach(function(item) {
        var inputNode = //title and body from card

        $('.idea-stage').append(parsedItem);

      })
  }
}

function Idea(title, body, id) {

  this.title = title
  this.body = body
  this.id = id
  this.quality = 'swill'
}

function ideaCard() {

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();
  var id = Date.now();

  var injection = `
    <div class="delete-div" id="${id}">
      <div class="title-delete">
        <h2 contenteditable="true">${title}</h2>
        <button class="deletebutton">
        </button>
      </div>
      <p class="body-div" contenteditable="true">${body}</p>
      <div class="vote-and-quality">
        <button id="upvote">
        </button>
        <button id="downvote">
        </button>
        <p name="quality" id="quality">Quality: ${quality}</p>
      </div>
      <hr>
    </div>`;

$('.idea-stage').prepend(injection);
};

// function getKey(){
//   JSON.stringify($('#idea-title').val())
// }

function localStore() {
  var newObj = new Object();
    newObj.title = $('#idea-title').val(),
    newObj.body = $('#idea-body').val();
    console.log(newObj);

  newIdeas.push(newObj);

  localStorage.setItem('card', JSON.stringify(newObj));
};

function clearInputs() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}

function deleteCard() {
  $(this).closest('.delete-div').remove();
  localRemove();
};

function localRemove() {

};

function localRetrieve() {

}

function upVote() {

};

function downVote() {

};
