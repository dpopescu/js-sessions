import Inbox from './Inbox';

import MessageList from './view/messageList/MessageList';
import MessageService from './service/MessageService';
import MessageForm from './view/messageForm/MessageForm';

const inbox = new Inbox('inbox', [
    'ui.router'
]);

inbox.registerServices([
    MessageService
]);

inbox.registerStates([
    {
        name: 'Inbox',
        url: '/inbox',
        views: {
            'content@': MessageList
        }
    },
    {
        name: 'Inbox.EditMessage',
        url: '/message/edit/:id',
        views: {
            'content@': MessageForm
        }
    },
    {
        name: 'Inbox.New',
        url: '/message/new',
        views: {
            'content@': MessageForm
        }
    }
]);

export default inbox;