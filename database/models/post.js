module.exports = (sequelize, dataTypes) => {
    const alias = 'Post';
    
    const cols = {
        idPosts: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        Ubicacion: {
            type: dataTypes.STRING
        },
        Imagen: {
            type: dataTypes.STRING
        },
        Descripcion: {
            type: dataTypes.STRING
        },
        Fecha: {
            type: dataTypes.DATE
        },
        idCategoria: {
            type: dataTypes.INTEGER
        }

    }

    const config = {
        tableName: 'Posts', 
        timestamps: false,
        underscored: true
    }

    const Post = sequelize.define(alias, cols, config)

    return Post;
}

