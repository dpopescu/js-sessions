import './MessageForm.scss';

const MessageFormTemplate = require('./MessageForm.html');

class MessageFormController {
    constructor(message, $state, MessageService){
        this._service = MessageService;
        this._state = $state;
        this.message = message;
    }
    save(){
        this._service.update(this.message.id, this.message).then(()=>{
            this._state.go('Inbox');
        });
    }
    create(){
        this._service.create(this.message).then(()=>{
            this._state.go('Inbox');
        });
    }
}

export default {
    controller: MessageFormController,
    controllerAs: '$ctrl',
    template: MessageFormTemplate,
    resolve:{
        message: function($stateParams, MessageService){
            return MessageService.get($stateParams.id).then((data)=>{
                return data;
            })
        }
    }
}