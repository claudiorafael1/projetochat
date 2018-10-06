/*importa configuracoes do servidor*/ 
var app = require('./config/server');
/**parametrizar a porta de escuta */
 var server = app.listen(8099,function(){
console.log('Servidor online');

})

 var io = require('socket.io').listen(server);

app.set('io',io);
/*criar a conexão por websocket */
io.on('connection',function(socket){
console.log('Usuario conectou');

socket.on('disconnect',function(){
            console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor',function(data){
        /*dialog */
        socket.emit(
            'msgParaCliente',
        {apelido : data.apelido,
            mensagem:data.mensagem}
            );

            socket.broadcast.emit(
                'msgParaCliente',
            {apelido : data.apelido,
                mensagem:data.mensagem}
                );
                /*participantes */


                if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

                socket.emit(
                    'participantesparaClientes',
                {apelido:data.apelido}
                    );
        
                    socket.broadcast.emit(
                        'participantesparaClientes',
                    {apelido: data.apelido}
                        );
            }
    });
    
});