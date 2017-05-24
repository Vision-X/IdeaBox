
//NO page reload



$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();
  var id = Date.now();
  var idea = new Idea(title, body, id);

  Idea();
  ideaCard();
  localStore();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);




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
          <img type="image" name="delete" id="delete"  src="assets/delete.svg">
        </button>
      </div>
      <p class="body-div" contenteditable="true">${body}</p>
      <div class="vote-and-quality">
        <button class="upvote">
          <img type="image" name="upvote" id="upvote" src="assets/upvote.svg"></button>
        <button class="downvote">
          <img type="image" name="downvote" id="downvote" src="assets/downvote.svg"></button>
        <p name="quality" id="quality">qualities</p>
      </div>
      <hr>
    </div>`;

$('.idea-stage').prepend(injection);
}

function clearInputs() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}

function deleteCard() {
  $(this).closest('.delete-div').remove();
  localRemove();
};

function upVote() {

};

function downVote() {

};

function localStore() {
  var newObj = new Object();
    newObj.title = $('#idea-title').val(),
    newObj.body = $('#idea-body').val();
    console.log(newObj);

  localStorage.setItem('Card', JSON.stringify(newObj));
};

function localRemove() {

  localStorage.removeItem('Card');
};

function localRetrieve() {
  localStorage.getItem('Card')
}
