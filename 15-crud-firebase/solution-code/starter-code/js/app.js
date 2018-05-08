// PART 1 (in index.html) - initialize Firebase - see https://firebase.google.com/docs/web/setup

// when the document is ready, read from db and 
// attach update/delete handlers to each post
$(document).ready(function() {
    let messages;

    console.log('ready!')
    const $board = $('#message-board');
    // do not use 'once', use 'on' because it'll update for you automatically
    firebase.database().ref('messages').on('value', function(snapshot) {
        messages = snapshot.val() || {};
        $board.empty();

        Object.keys(messages).forEach(function(id) {
            const message = messages[id];
            // note - they use font awesome icons for the stuff
            const template = `
                <li data-id="${id}">
                    ${message.text}
                    ${message.votes}
                    <i class="fas fa-thumbs-up like"></i>
                    <i class="fas fa-thumbs-down dislike"></i>
                    <i class="fas fa-trash delete"></i>
                </li>
            `
            const $message = $(template);
            $message.on('click', function(e){
                console.log('e: ', e)
                console.log('this: ', $(this))

            })
            $board.append($message);
        });
    });

    // create
    $('#message-form').on('submit', function(e){
        e.preventDefault();
        const $message = $('#message');
        const id = firebase.database().ref('messages').push({
            text: $message.val(),
            votes: 0
        });

        $message.val('');
    });

    // $('#message-board').on('click', '.like', function() {
    //     const id = $(this).parent().data('id');
    //     const message = messages[id];
    //     const path = `messages/${id}`;

    //     firebase.database().ref(path).update({
    //         votes: message.votes + 1
    //     });
    // })

    // $('#message-board').on('click', '.dislike', function() {
    //     const id = $(this).parent().data('id');
    //     const message = messages[id];
    //     const path = `messages/${id}`;

    //     firebase.database().ref(path).update({
    //         votes: message.votes - 1
    //     });
    // })

    // delete - way to do without the parent?
    // $('#message-board').on('click', '.delete', function() {
    //     const path = `messages/${$(this).parent().data('id')}`;
    //     firebase.database().ref(path).remove();
    // });
});

// create
// read
// update
// delete