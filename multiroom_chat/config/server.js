/* importar modulo do framework express*/
var express = require('express');
/*importar o modulo do consign*/

var consign = require('consign');

/*..... body-parser*/
var bodyParser = require('body-parser');

/*.......express-Validator */

var expressValidator = require('express-validator');

/*Inicair o objeto do express */
var app = express();

/*setar as variaveis 'viewengine' e ' views' no express  */
app.set('view engine','ejs'); 
app.set('views','./app/views');


/* configurar o middleware express.static */

app.use(express.static('./app/public'));

/*configurar o middlware body-parser */

app.use(bodyParser.urlencoded({extended:true}));


/*configurar o middlware express-validation_ */
app.use(expressValidator());

/*Efetua o autolead das rotas, dos models e dos controllers para o objeto app */

consign().
include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);
/*exportar o objeto app */
module.exports = app;