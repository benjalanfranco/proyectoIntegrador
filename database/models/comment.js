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
        Fecha: {
            type: dataTypes.DATE
        },
        Comentario: {
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'Comentarios', 
        timestamps: false
    }

    const Comment = sequelize.define(alias, cols, config)

    return Comment;
}