let posts = {
    lista: [
            {
                id: 1,
                pie: 'Unas olitas para sanar el alma',
                imagen: '/images/surfPost.jpg',
                createdAt: '25 de septiembre',
                categoria: 'Surf',
                user_id: 1,
                user: { id: 1, username: 'fabianaruiz', firstName: 'Fabiana'},
                likes: 32,
                comentarios: [
                    {contenido: 'Disfrutee amiga!', fecha: '25 de septiembre', likes: 3},
                    {contenido: 'Surfeando la vida.', fecha: '25 de septiembre', likes: 1},
                    {contenido: 'Que lujooo', fecha: '25 de septiembre', likes: 0},
                    {contenido: 'Que flow tenes... sos lo mas.', fecha: '25 de septiembre', likes: 5},
                    {contenido: 'Que buena izquierda la de atras!', fecha: '25 de septiembre', likes: 1},
                ]
            },
            {
                id: 2,
                pie: 'Unas olitas para sanar el alma',
                imagen: '/images/surfPost.jpg',
                createdAt: '25 de septiembre',
                categoria: 'Surf',
                user_id: 1,
                user: { id: 1, username: 'fabianaruiz', firstName: 'Fabiana'},
                likes: 32,
                comentarios: [
                    {contenido: 'Disfrutee amiga!', fecha: '25 de septiembre', likes: 3},
                    {contenido: 'Surfeando la vida.', fecha: '25 de septiembre', likes: 1},
                    {contenido: 'Que lujooo', fecha: '25 de septiembre', likes: 0},
                    {contenido: 'Que flow tenes... sos lo mas.', fecha: '25 de septiembre', likes: 5},
                    {contenido: 'Que buena izquierda la de atras!', fecha: '25 de septiembre', likes: 1},
                ]
            },
            {
                id: 3,
                pie: 'Unas olitas para sanar el alma',
                imagen: '/images/surfPost.jpg',
                createdAt: '25 de septiembre',
                categoria: 'Surf',
                user_id: 1,
                user: { id: 1, username: 'fabianaruiz', firstName: 'Fabiana'},
                likes: 32,
                comentarios: [
                    {contenido: 'Disfrutee amiga!', fecha: '25 de septiembre', likes: 3},
                    {contenido: 'Surfeando la vida.', fecha: '25 de septiembre', likes: 1},
                    {contenido: 'Que lujooo', fecha: '25 de septiembre', likes: 0},
                    {contenido: 'Que flow tenes... sos lo mas.', fecha: '25 de septiembre', likes: 5},
                    {contenido: 'Que buena izquierda la de atras!', fecha: '25 de septiembre', likes: 1},
                ]
            },
            {
                id: 4,
                pie: 'Unas olitas para sanar el alma',
                imagen: '/images/surfPost.jpg',
                createdAt: '25 de septiembre',
                categoria: 'Surf',
                user_id: 1,
                user: { id: 1, username: 'fabianaruiz', firstName: 'Fabiana'},
                likes: 32,
                comentarios: [
                    {contenido: 'Disfrutee amiga!', fecha: '25 de septiembre', likes: 3},
                    {contenido: 'Surfeando la vida.', fecha: '25 de septiembre', likes: 1},
                    {contenido: 'Que lujooo', fecha: '25 de septiembre', likes: 0},
                    {contenido: 'Que flow tenes... sos lo mas.', fecha: '25 de septiembre', likes: 5},
                    {contenido: 'Que buena izquierda la de atras!', fecha: '25 de septiembre', likes: 1},
                ]
            },
            {
                id: 5,
                pie: 'Unas olitas para sanar el alma',
                imagen: '/images/surfPost.jpg',
                createdAt: '25 de septiembre',
                categoria: 'Surf',
                user_id: 1,
                user: { id: 1, username: 'fabianaruiz', firstName: 'Fabiana'},
                likes: 32,
                comentarios: [
                    {contenido: 'Disfrutee amiga!', fecha: '25 de septiembre', likes: 3},
                    {contenido: 'Surfeando la vida.', fecha: '25 de septiembre', likes: 1},
                    {contenido: 'Que lujooo', fecha: '25 de septiembre', likes: 0},
                    {contenido: 'Que flow tenes... sos lo mas.', fecha: '25 de septiembre', likes: 5},
                    {contenido: 'Que buena izquierda la de atras!', fecha: '25 de septiembre', likes: 1},
                ]
            }            
           ],
    
    find: function (id){
        for (let i=0; i < posts.lista.length; i++){
            if (posts.lista[i].id == id){
                return posts.lista[i];
            }
        }
    }
}

module.exports = posts;