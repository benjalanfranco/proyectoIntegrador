module.exports = (sequelize, dataTypes) => {  //Traemos funcionalidades.
    const alias = 'Post';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        ubicacion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        idCategoria: {
            type: dataTypes.INTEGER
        }

    }

    const config = {
        tableName: 'posts', 
        timestamps: false
    }

    const Post = sequelize.define(alias, cols, config)

    Post.associate = function(models){
        Post.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'idPost'
        })
        Post.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'idUsuario'
        })
    }

    return Post;
}

