// 

const reproductor={
    reproducir: function(id){
        console.log(`Reproducir Cancion Con el ID ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
};

console.log(reproductor);

reproductor.borrarCancion= function(id){
    console.log(`Eliminando la cancion: ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock')