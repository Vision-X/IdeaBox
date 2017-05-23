
//NO page reload



$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();

  ideaCard();
  clearInputs();
});

$('.idea-stage').on('click', '.deletebutton', deleteCard);

$('.idea-stage').on('click', '.upvote', upVote);

$('.idea-stage').on('click', '.downvote', downVote);



function ideaCard() {

  var title = $('#idea-title').val();
  var body = $('#idea-body').val();

  var injection = `
    <div class="delete-div">
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
  $(this).parent().parent().remove();
};

function upVote() {

};

function downVote() {

};
