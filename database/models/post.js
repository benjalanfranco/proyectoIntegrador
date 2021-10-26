module.exports = (sequelize, dataTypes) => {
    const alias = 'post';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        content: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'post', //Aca va lo mismo que pusimos en nuestra base de datos, si fue plural es en plural
        timestamps: false,
        underscored: true
    }

    const post = sequelize.define(alias, cols, config)

    return post;
}

