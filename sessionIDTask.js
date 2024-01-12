define(['questAPI'], function(Quest){

    let API = new Quest();

    API.addQuestionsSet('sessionIDTask', [{
        type: 'text',
        name: 'sessionID',
        stem: 'Please enter your session ID:',
        required: true
    }]);

    return API.script;
});

