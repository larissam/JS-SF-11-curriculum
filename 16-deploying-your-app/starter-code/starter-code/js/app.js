// MAKE THIS INTO A MODULE

// i like the idea of putting all the CRUD stuff into a module, and then having document.ready take care of the UI updates

const MessageService = (function(){
    let messages;

    function _create(messageText) {
        return firebase.database().ref('messages').push({
            text: messageText,
            votes: 0
        });
    }

    function _read(callback) {
        firebase.database().ref('messages').on('value', function(snapshot) {
            messages = snapshot.val() || {};
            callback(messages);
        });
    }

    function _update(id, updates) {
        const message = messages[id];
        const path = `messages/${id}`;
        firebase.database().ref(path).update(updates);
    }

    function _del(id) {
        const message = messages[id];
        const path = `messages/${id}`;
        firebase.database().ref(path).remove();
    }

    return {
        create: _create,
        read: _read,
        like: function(id) {
            const message = messages[id];
            _update(id, { votes: message.votes + 1 });
        },
        dislike: function(id) {
            const message = messages[id];
            _update(id, { votes: message.votes - 1 });
        },
        delete: _del
    }

})();


// when the document is ready, read from db and 
// attach update/delete handlers to each post
$(document).ready(function() {

    console.log('ready!')
    const $board = $('#message-board');
    // do not use 'once', use 'on' because it'll update for you automatically
    MessageService.read(function(messages) {
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
            $board.append($message);
        });
    });

    // create
    $('#message-form').on('submit', function(e){
        e.preventDefault();
        const $message = $('#message');
        const id = MessageService.create($message.val());

        $message.val('');
    });

    $('#message-board').on('click', 'li', function(e) {
        const id = $(this).data('id');

        const $target = $(e.target);
        if($target.is('.like')) {
            MessageService.like(id);
        } else if($target.is('.dislike')) {
            MessageService.dislike(id);
        } else if($target.is('.delete')) {
            MessageService.delete(id);
        }
    });
});

// create
// read
// update
// delete