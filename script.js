
var cardPlace = $('.idea-stage');
var newIdea = [];

getIdeaFromStorage();




$('#save_btn').on('click', function(event) {
  event.preventDefault();

  var inputTitle = $('#idea-title').val();
  var inputBody = $('#idea-body').val();
  var idea = new Idea(inputTitle, inputBody);

  Idea();
  ideaCard();
  clearInputs();
  enableEnterBtn();
});

$('#idea-title').on('keydown', function() {
  enableEnterBtn();
});

$('#card-title').on('input keydown', function() {
  var id = $(this).parents('.delete-div')[0].id;
  var titleTxt = $('#card-title').text();
    newIdea.forEach(function(item){
      if (item.id == id) {
        item.title = titleTxt;
      }
      })
      localStore();
    });

$('.body-div').on('input keydown', function() {
  var id = $(this).parents('.delete-div')[0].id;
  var bodyTxt = $('.body-div').text();
    newIdea.forEach(function(item){
      if (item.id == id) {
        item.body = bodyTxt;
      }
      })
      localStore();
    });

$('.filter-cards').on('keyup', function() {
    var filter = $(this).val();
    if (filter) {
    $('.delete-div').find("h2:not(:contains(" + filter + "))").closest('.delete-div').slideUp();
    $('.delete-div').find("h2:contains(" + filter + ")").slideDown();
  } else {
    $('.delete-div').slideDown()
  }
});

$('.idea-stage').on('click', '.deletebutton', function() {
  var id = $(this).parents('.delete-div')[0].id;
  console.log(id);
  newIdea.forEach(function(idea, index) {
    if (id == idea.id) {
      newIdea.splice(index, 1);
    }
  })
  localStorage.setItem('arrayIs', JSON.stringify(newIdea));
  $(this).closest('.delete-div').remove();
  localStore();
});

$('.delete-div').on('click', '#upvote', function() {
  var qualityInput = $(this).parent().find('#vote');
  var id = $(this).parents('.delete-div')[0].id;
  arrayVoteUp(id, qualityInput.text());

  if (qualityInput.text() === 'swill') {
    qualityInput.text('plausible')
  } else if (qualityInput.text() === 'plausible') {
    qualityInput.text('genius')
  }
});

$('.delete-div').on('click', '#downvote', function() {
  var qualityInput = $(this).parent().find('#vote');
  var id = $(this).parents('.delete-div')[0].id;
  arrayVoteDown(id, qualityInput.text());

  if (qualityInput.text() === 'genius') {
    qualityInput.text('plausible')
  } else if (qualityInput.text() === 'plausible') {
    qualityInput.text('swill')
  }
});




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

  var injection = `
    <div class="delete-div" id=${id}>
      <div class="title-delete">
        <h2 id="card-title" class="title-and-body" contenteditable="true">${inputTitle}</h2>
        <button class="deletebutton">
        </button>
      </div>
      <p class="body-div title-and-body" contenteditable="true">${inputBody}</p>
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
  console.log("new card ID: " + id);
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

function arrayVoteUp(id, quality) {
  console.log('id from arrayVoteUp(): ' + id);
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
  console.log('id from arrayVoteDown(): ' + id);

  newIdea.forEach(function(idea){
    if (id == Idea.id) {
      if (quality.text() === 'genius') {
        quality.text('plausible')
      } else if (quality.text() === 'plausible') {
        quality.text('swill') }
      }
  })
  localStore();
};

function enableEnterBtn() {
  if ($('#idea-title').val() !== '' && $('#idea.body').val() !== '') {
    $('#save_btn').prop('disabled', false);
  } else {
      $('#save_btn').prop('disabled', true);
  }
}
