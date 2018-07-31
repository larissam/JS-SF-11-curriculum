const MessageService = (function(){
    const db = firebase.database();
    let messages;

    function _create(messageText) {
        db.ref('messages').push({
            text: messageText,
            votes: 0
        });
    }

    function _read(callback) {
        db.ref('messages').on('value', function(snapshot) {
            messages = snapshot.val() || {};
            callback(messages);
        });
    }

    function _update(id, updates) {
        db.ref(`messages/${id}`).update(updates);
    }

    function _del(id) {
        db.ref(`messages/${id}`).remove();
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


$(document).ready(function() {

    // Read from the DB
    MessageService.read(function(messages) {
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
            `
            const $message = $(template);
            $board.append($message);
        });
    });

    // Attach handler for create
    $('#message-form').on('submit', function(e){
        e.preventDefault();

        const $message = $('#message');
        MessageService.create($message.val());

        $message.val('');
    });

    // Attach handler for update and delete
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