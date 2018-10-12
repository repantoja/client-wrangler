import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return[{
            id: 'user1',
            filePath:'myFilePath',
            message:'test'
        }]
    }
});

