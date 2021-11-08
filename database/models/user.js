module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        Usuario: {
            type: dataTypes.STRING
        },
        Nombre: {
            type: dataTypes.STRING
        },
        Apellido: {
            type: dataTypes.STRING
        },
        Email: {
            type: dataTypes.STRING
        },
        Contraseña: {
            type: dataTypes.STRING
        },
        Num_telefono: {
            type: dataTypes.STRING
        },
        Nacimiento: {
            type: dataTypes.DATE
        },
        Foto_perfil: {
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'Usuarios',
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)

    return User;
}