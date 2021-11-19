module.exports = (sequelize, dataTypes) => {
    const alias = 'Comment';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idPost: {
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        fecha: {
            type: dataTypes.DATE
        },
        comentario: {
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'comentarios', 
        timestamps: false
    }

    const Comment = sequelize.define(alias, cols, config)

    return Comment;
}