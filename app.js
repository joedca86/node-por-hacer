//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);

let commando = argv._[0];
switch (commando) {
    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }
        //console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        //console.log('Actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        //console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}