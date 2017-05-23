
//NO page reload



$('#save_btn').on('click', function() {
    //++++++Check for accuracy+++++++
  // event.preventDefault();
    //++++++++++++++++++++++++++++
  var title = $('#idea-title').val();
  var body = $('#idea-body').val();

  ideaCard();

  title.val('');
  body.val('');

});

function ideaCard() {

  $('.idea-stage').prepend(`
  <div class="delete-div">
    <div class="title-delete">
      <h2>${#idea-title}</h2>
      <button class="deletebutton">
        <img type="image" name="delete" id="delete"  src="assets/delete.svg">
      </button>
    </div>
    <p class="body-div">${idea-body}</p>
    <div class="vote-and-quality">
      <button class="upvote">
        <img type="image" name="upvote" id="upvote" src="assets/upvote.svg"></button>
      <button class="downvote">
        <img type="image" name="downvote" id="downvote" src="assets/downvote.svg"></button>
      <p name="quality" id="quality">${qualities}</p>
    </div>
    <hr>
  </div>
  `);
}
