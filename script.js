
getIdeaFromStorage();
// altGetIdea();
var newIdea = []


$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();
  var id = Date.now();
  var idea = new Idea(title, body, id);

  Idea();
  ideaCard();
  // getKey();
  // localStore();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);


function getIdeaFromStorage() {

  if (localStorage.getItem($('#idea-title').val())) {
      var storedItem = localStorage.getItem($('#idea-title').val());
      newIdea = JSON.parse(storedItem);
      console.log('parsed items: ' + newIdea);

      newIdea.forEach(function(item) {
        // var inputNode = //title and body from card

        $('.idea-stage').append(inputNode);

      })
  } else {
    console.log('There is nothing locally stored');
  }
}

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
  console.log('id from ideaCard()' + id);

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
localStore(id);
};

// function getKey(){
//   JSON.stringify($('#idea-title').val())
// }

function localStore(id) {
  var newObj = new Object();
    newObj.title = $('#idea-title').val(),
    newObj.body = $('#idea-body').val();
    console.log(newObj);

  newIdea.push(newObj);
  console.log('after push: ' + newIdea);
  console.log('id from localStore()' + id);

  localStorage.setItem(id, JSON.stringify(newObj));
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
