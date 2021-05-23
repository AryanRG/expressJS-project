const path = require('path');

function getMessages(req, res){
    res.render('messages',{
        title: 'MEssages to my friends',
        friend : 'Elon Musk'
    });
    // res.sendFile(path.join(__dirname,'..','public','images', 'ski.png'));
   
}

function postMessages(req, res){
    console.log('Updating Messages...');
}

module.exports = {
    getMessages,
    postMessages,
};