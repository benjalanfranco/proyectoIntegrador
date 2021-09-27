let users = {
    lista: [
            {
                id: 1,
                usuario: 'liomessi',
                nombre: 'Lionel',
                apellido: 'Messi',
                email: 'lapulga@gmail.com',
                contraseña: 'AntonellaTiagoMateoCiro',
                num_telefono: 1138293845,
                nacimiento: 1987-06-24,
                foto_perfil: '/images/perfilM.jpeg',
            },
            {
                id: 2,
                usuario: 'eldibu',
                nombre: 'Emiliano',
                apellido: 'Martinez',
                email: 'dibu@gmail.com',
                contraseña: 'Miraquetecomo',
                num_telefono: 1140732833,
                nacimiento: 1992-09-02,
                foto_perfil: '/images/perfilD.jpg',
            },
            {
                id: 3,
                usuario: 'cristiano',
                nombre: 'Cristiano',
                apellido: 'Ronaldo',
                email: 'cristiano@cr7.com',
                contraseña: 'Elbicho',
                num_telefono: 1183740243,
                nacimiento: 1985-02-05,
                foto_perfil: '/images/perfilC.jpeg',
            },
            {
                id: 4,
                usuario: 'pedritoperez',
                nombre: 'Pedro',
                apellido: 'Perez',
                email: 'pedroperez@gmail.com',
                contraseña: 'ax3929rZYn',
                num_telefono: 1183740243,
                nacimiento: 1992-09-21,
                foto_perfil: '/images/perfilP.jpeg',
            },
            {
                id: 5,
                usuario: 'alexiamennes',
                nombre: 'Alexia',
                apellido: 'Mennes',
                email: 'alexiamennes@gmail.com',
                contraseña: 'jwfcn87fNJD9',
                num_telefono: 1183048473,
                nacimiento: 1998-01-21,
                foto_perfil: '/images/perfilA.jpeg',
            },
            {
                id: 6,
                usuario: 'marceloalegri',
                nombre: 'Marcelo',
                apellido: 'Alegri',
                email: 'marceloalegri@gmail.com',
                contraseña: 'Micuenta123',
                num_telefono: 1153948071,
                nacimiento: 1971-11-25,
                foto_perfil: '/images/suarez.jpeg',
            },         
           ],
           
    
    find: function (id){
        for (let i=0; i < this.lista.length; i++){
            if (this.lista[i].id == id){
                return this.lista[i];
            }
        }
    }, 
    findByUser: function(userId){
        let result = [];
        for (let i = 0; i < this.lista.length; i++){
            if (this.lista[i].user_id == userId) {
                result.push(this.lista[i]);
            }
        }
        return result
    },

        };


module.exports = users;