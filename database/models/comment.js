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

    Comment.associate = function(models) {
        Comment.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'idPost'
        })
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'idUsuario'
        })
    }

    return Comment;
}