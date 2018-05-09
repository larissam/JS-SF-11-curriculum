// PART 1 (in index.html) - initialize Firebase - see https://firebase.google.com/docs/web/setup

// when the document is ready, read from db and 
// attach update/delete handlers to each post
$(document).ready(function() {
    console.log('ready!')

    let messages;
    firebase.database().ref('messages').on('value', function(snapshot) {
        messages = snapshot.val() || {};

        const $board = $('#message-board');
        $board.empty();

        Object.keys(messages).forEach(function(id) {
            const message = messages[id];

            const template = `
                <li data-id="${id}">
                    ${message.text}
                    ${message.votes}
                    <i class="fas fa-thumbs-up like"></i>
                    <i class="fas fa-thumbs-down dislike"></i>
                    <i class="fas fa-trash delete"></i>
                </li>
            `;
            const $message = $(template);
            $board.append($message);
        });
    });

    $('#message-form').on('submit', function(e){
        e.preventDefault();

        const $message = $('#message');
        firebase.database().ref('messages').push({
            text: $message.val(),
            votes: 0
        });

        $message.val('');
    });

    $('#message-board').on('click', 'li', function(e) {
        const id = $(this).data('id');
        const message = messages[id];

        const $target = $(e.target);
        if($target.is('.like')) {
            firebase.database().ref(`messages/${id}`).update({
                votes: message.votes + 1
            });
        } else if($target.is('.dislike')) {
            firebase.database().ref(`messages/${id}`).update({
                votes: message.votes - 1
            });
        } else if($target.is('.delete')) {
            firebase.database().ref(`messages/${id}`).remove();
        }
    });
});

// create
// read
// update
// delete