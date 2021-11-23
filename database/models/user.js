module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        num_telefono: {
            type: dataTypes.STRING
        },
        nacimiento: {
            type: dataTypes.DATE
        },
        foto_perfil: {
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.hasMany(models.Post,{
            as: 'posts',
            foreignKey: 'idUsuario'
        })
        User.hasMany(models.Comment,{
            as: 'comments',
            foreignKey: 'idUsuario'
        })
    }

    return User;
}