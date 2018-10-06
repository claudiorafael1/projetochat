module.exports = function(application){
    application.get('/',function(req,res){
      application.app.controllers.Index.home(application,req,res);
    });
} 