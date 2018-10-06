module.exports = function(application){
    application.get('/sobre',function(req,res){
      application.app.controllers.sobre.sobre(application,req,res);
    });
} 