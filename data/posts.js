let comments = require('./comments')

let posts = {
    lista: [
            {
                id: 1,
                user_id: 5,
                ubicacion: "Lisboa",
                imagen: '/images/surfPost.jpg',
                likes: 634,
                pie: 'Unas olitas para sanar el alma',
                createdAt: '25 de septiembre de 2021',
                categoria: 'Otro',
                usuario: 'alexiamennes',
                user: { id: 5, usuario: 'alexiamennes', firstName: 'Alexia'},

                comentarios: comments.findByPost(1)
            },
            {
                id: 2,
                user_id: 4,
                ubicacion: "Ohio",
                imagen: '/images/rugbyOhio.jpeg',
                likes: 381,
                pie: 'Probando cosas nuevas',
                createdAt: '13 de agosto de 2021',
                categoria: 'Rugby',
                usuario: 'pedritoperez',
                user: { id: 4, usuario: 'pedritoperez', firstName: 'Pedro'},

                comentarios: comments.findByPost(2)
            },
            {
                id: 3,
                user_id: 1,
                ubicacion: "Rosario",
                imagen: '/images/messi.jpeg',
                likes: 781982,
                pie: 'Disfrutando la vuelta a casa! Totalmente agradecido por todo.',
                createdAt: '11 de Julio de 2021',
                categoria: 'Futbol',
                usuario: 'leomessi',
                user: { id: 1, usuario: 'leomessi', firstName: 'Lionel'},

                comentarios: comments.findByPost(3)
            },
            {
                id: 4,
                user_id: 5,
                ubicacion: "Montevideo",
                imagen: '/images/suarez.jpeg',
                likes: 218,
                pie: 'Un grande Lucho!! Ejemplo de grandeza y humildad',
                createdAt: '22 de febrero de 2021',
                categoria: 'Futbol',
                usuario: 'marceloalegri',
                user: { id: 6, usuario: 'marecloalegri', firstName: 'Marcelo'},

                comentarios: comments.findByPost(4)
            },
            {
                id: 5,
                user_id: 5,
                ubicacion: "Buenos Aires",
                imagen: '/images/hotell.jpeg',
                likes: 314,
                pie: 'Ya devuelta en casa! Cuarenteneando :/',
                createdAt: '16 de septiembre de 2021',
                categoria: 'Otro',
                usuario: 'alexiamennes',
                user: { id: 5, usuario: 'alexiamennes', firstName: 'Alexia'},

                comentarios: comments.findByPost(5)
            },
            {
                id: 6,
                user_id: 4,
                ubicacion: "Miami",
                imagen: '/images/miami.jpeg',
                likes: 539,
                pie: 'Volviendo a mi habitat natural!!',
                createdAt: '8 de septiembre de 2021',
                categoria: 'Otro',
                usuario: 'pedritoperez',
                user: { id: 4, usuario: 'pedritoperez', firstName: 'Pedro'},

                comentarios: comments.findByPost(6)
            },
            {
                id: 7,
                user_id: 2,
                ubicacion: "Old Trafford",
                imagen: '/images/dibu.jpeg',
                likes: 314277,
                pie: 'A seguir difrutando con el equipo. @cristiano abrazo grande,',
                createdAt: '26 de septiembre de 2021',
                categoria: 'Futbol',
                usuario: 'eldibu',
                user: { id: 2, usuario: 'eldibu', firstName: 'Emiliano'},

                comentarios: comments.findByPost(7)
            },
            {
                id: 8,
                user_id: 4,
                ubicacion: "Augusta National",
                imagen: '/images/augusta.jpeg',
                likes: 612,
                pie: 'Sueño cumplido! Les manda un saludo a todos Phil!!',
                createdAt: '25 de septiembre de 2021',
                categoria: 'Golf',
                usuario: 'pedritoPerez',
                user: { id: 4, usuario: 'pedritoperez', firstName: 'Pedro'},

                comentarios: comments.findByPost(8)
            },
            {
                id: 9,
                user_id: 1,
                ubicacion: "San Antonio",
                imagen: '/images/spurs.jpeg',
                likes: 781982,
                pie: 'Con el mejor deportista argentino de los ultimos tiempos! Un lujo',
                createdAt: '3 de junio de 2021',
                categoria: 'Basquet',
                usuario: 'leomessi',
                user: { id: 1, usuario: 'leomessi', firstName: 'Lionel'},

                comentarios: comments.findByPost(9)
            },
            {
                id: 10,
                user_id: 3,
                ubicacion: "Ibiza",
                imagen: '/images/cr7.jpeg',
                likes: 1284544,
                pie: 'Disfrute en familia. A volver con todo. Suuu',
                createdAt: '3 de junio de 2021',
                categoria: 'Futbol',
                usuario: 'cristiano',
                user: { id: 3, usuario: 'cristiano', firstName: 'Cristiano'},

                comentarios: comments.findByPost(10)
            },        
           ],
    
    findById: function (id){
        for (let i=0; i < posts.lista.length; i++){
            if (posts.lista[i].id == id){
                return posts.lista[i];
            }
        }
    }, 
    findByUsername: function(username){
        let result = [];
        for (let i = 0; i < posts.lista.length; i++){
            if (posts.lista[i].usuario == username) {
                result.push(posts.lista[i]);
            }
        }
        return result
    }
}

module.exports = posts;