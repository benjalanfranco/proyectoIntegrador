let users = require('./users');

let comments = {
    lista: [
        {post_id: 1, user: users.findByUsername('liomessi'), contenido: 'Soy fan', fecha: '27 de septiembre', likes: 10},
        {post_id: 1, user: users.findByUsername('cristiano'), contenido: 'Good one', fecha: '27 de septiembre', likes: 7},
        {post_id: 1, user: users.findByUsername('marceloalegri'), contenido: 'Me encanta ese deporte', fecha: '27 de septiembre', likes: 7},
        {post_id: 1, user: users.findByUsername('eldibu'), contenido: 'Buenarda', fecha: '27 de septiembre', likes: 7},
        {post_id: 2, user: users.findByUsername('pedritoperez'), contenido: 'Tremendooooo', fecha: '27 de septiembre', likes: 0},
        {post_id: 2, user: users.findByUsername('eldibu'), contenido: 'Que bien lo haces', fecha: '27 de septiembre', likes: 7},
        {post_id: 2, user: users.findByUsername('marceloalegri'), contenido: 'Que estilo', fecha: '27 de septiembre', likes: 7},
        {post_id: 3, user: users.findByUsername('liomessi'), contenido: 'Epica foto', fecha: '27 de septiembre', likes: 7},
        {post_id: 3, user: users.findByUsername('eldibu'), contenido: 'Que lindo es el deporte!', fecha: '27 de septiembre', likes: 4},
        {post_id: 3, user: users.findByUsername('cristiano'), contenido: 'Epica foto', fecha: '27 de septiembre', likes: 5},
        {post_id: 3, user: users.findByUsername('alexiamennes'), contenido: 'Cuando jugamos?', fecha: '27 de septiembre', likes: 7},
        {post_id: 3, user: users.findByUsername('pedritoperez'), contenido: 'Ya te voy a agarrar', fecha: '27 de septiembre', likes: 7},
        {post_id: 4, user: users.findByUsername('liomessi'), contenido: 'Es por ahi pa!', fecha: '27 de septiembre', likes: 7},
        {post_id: 4, user: users.findByUsername('cristiano'), contenido: 'Memorable', fecha: '27 de septiembre', likes: 7},
        {post_id: 4, user: users.findByUsername('alexiamennes'), contenido: 'Fachaa', fecha: '27 de septiembre', likes: 7},
        {post_id: 4, user: users.findByUsername('eldibu'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
        {post_id: 5, user: users.findByUsername('pedritoperez'), contenido: 'Memorable', fecha: '27 de septiembre', likes: 7},
        {post_id: 5, user: users.findByUsername('cristiano'), contenido: 'Loveeee(queda)', fecha: '27 de septiembre', likes: 7},
        {post_id: 5, user: users.findByUsername('alexiamennes'), contenido: 'Que estilo', fecha: '27 de septiembre', likes: 7},
        {post_id: 5, user: users.findByUsername('liomessi'), contenido: 'Buenarda', fecha: '27 de septiembre', likes: 7},
        {post_id: 6, user: users.findByUsername('eldibu'), contenido: 'Epica foto', fecha: '27 de septiembre', likes: 7},
        {post_id: 6, user: users.findByUsername('cristiano'), contenido: 'Buenarda', fecha: '27 de septiembre', likes: 7},
        {post_id: 6, user: users.findByUsername('marceloalegri'), contenido: 'Es por ahi pa!', fecha: '27 de septiembre', likes: 7},
        {post_id: 6, user: users.findByUsername('pedritoperez'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
        {post_id: 6, user: users.findByUsername('alexiamennes'), contenido: 'Ya te voy a agarrar', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('eldibu'), contenido: 'Epica foto', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('alexiamennes'), contenido: 'Me cae baba', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('pedritoperez'), contenido: 'Memorable', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('pedritoperez'), contenido: 'Soy fan', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('liomessi'), contenido: 'Que lindo es el deporte!', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('alexiamennes'), contenido: 'Me sigue cayendo', fecha: '27 de septiembre', likes: 7},
        {post_id: 7, user: users.findByUsername('marceloalegri'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
        {post_id: 8, user: users.findByUsername('liomessi'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
        {post_id: 8, user: users.findByUsername('marceloalegri'), contenido: 'Epica foto', fecha: '27 de septiembre', likes: 7},
        {post_id: 8, user: users.findByUsername('pedritoperez'), contenido: 'Es por ahi pa!', fecha: '27 de septiembre', likes: 7},
        {post_id: 8, user: users.findByUsername('alexiamennes'), contenido: 'Ya te voy a agarrar', fecha: '27 de septiembre', likes: 7},
        {post_id: 9, user: users.findByUsername('eldibu'), contenido: 'Que bien lo haces', fecha: '27 de septiembre', likes: 7},
        {post_id: 9, user: users.findByUsername('alexiamennes'), contenido: 'Que lindo es el deporte!', fecha: '27 de septiembre', likes: 7},
        {post_id: 9, user: users.findByUsername('marceloalegri'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
        {post_id: 9, user: users.findByUsername('cristiano'), contenido: 'Memorable', fecha: '27 de septiembre', likes: 7},
        {post_id: 10, user: users.findByUsername('cristiano'), contenido: 'Memorable', fecha: '27 de septiembre', likes: 7},
        {post_id: 10, user: users.findByUsername('marceloalegri'), contenido: 'Que lindo es el deporte!', fecha: '27 de septiembre', likes: 7},
        {post_id: 10, user: users.findByUsername('pedritoperez'), contenido: 'Que bien lo haces', fecha: '27 de septiembre', likes: 7},
        {post_id: 10, user: users.findByUsername('eldibu'), contenido: 'Que estilo', fecha: '27 de septiembre', likes: 7},
        {post_id: 10, user: users.findByUsername('alexiamennes'), contenido: 'Loveeee', fecha: '27 de septiembre', likes: 7},
    ],
    findByPost: function (postId) {
        let result = [];
        for (let i = 0; i < comments.lista.length; i++){
            if (comments.lista[i].post_id == postId){
                result.push(comments.lista[i]);
            }
        }
        return result;
    }
}

module.exports = comments;
