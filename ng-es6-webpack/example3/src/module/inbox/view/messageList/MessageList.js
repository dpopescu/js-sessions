import './MessageList.scss';

const MessageListTemplate = require('./MessageList.html');

class MessageListController{
    constructor(messages, $state){
        this._state = $state;
        this.messages = messages;
    }
    viewMessage(messageId){
        this._state.go('Inbox.EditMessage', {
            id: messageId
        });
    }
    new(){
        this._state.go('Inbox.New');
    }
}

export default {
    controller: MessageListController,
    controllerAs: '$ctrl',
    template: MessageListTemplate,
    resolve: {
        messages: function(MessageService){
            return MessageService.getAll().then((data)=>{
                return data;
            })
        }
    }
}