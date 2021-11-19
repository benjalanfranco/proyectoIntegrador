module.exports = (sequelize, dataTypes) => {
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

    return Post;
}

