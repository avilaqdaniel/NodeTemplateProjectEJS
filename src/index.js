const app = require('./app');

app.set('port', process.env.PORT || 3000);

//Arranca la aplicación
async function init(){
    await app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });
}

init();