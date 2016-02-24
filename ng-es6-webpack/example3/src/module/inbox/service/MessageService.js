export default class MessageService {
    constructor($q){
        this._q = $q;
        this.messages = [
            {
                id: 0,
                author: 'Dude 1',
                summary: 'Message 1',
                content: 'Message 1 content'
            },
            {
                id: 1,
                author: 'Dudette',
                summary: 'Message 2',
                content: 'Message 2 content'
            },
            {
                id: 2,
                author: 'Dude 2',
                summary: 'Message 3',
                content: 'Message 3 content'
            }
        ];
    }
    create(data){
        data.id = this.messages.length;
        const deferred = this._q.defer();
        this.messages.push(data);
        deferred.resolve(this.messages);
        return deferred.promise;
    }
    update(id, data){
        const deferred = this._q.defer();
        this.messages[id] = data;
        deferred.resolve(this.messages);
        return deferred.promise;
    }
    get(id){
        const deferred = this._q.defer();
        this.messages.forEach((message)=>{
            if(message.id == id){
               deferred.resolve(message);
            }
        });
        deferred.resolve(null);
        return deferred.promise;
    }
    getAll(){
        const deferred = this._q.defer();
        deferred.resolve(this.messages);
        return deferred.promise;
    }
}