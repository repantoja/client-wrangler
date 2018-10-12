import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return[{
            id: 'user1',
            name:'firstUser',
            message:'first user test'
        }]
    }
});
