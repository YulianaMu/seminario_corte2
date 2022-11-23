const Role = require('../modelo/Rol')


module.exports = async () =>{
    
    try {
        const count = await Role.estimatedDocumentCount();
        
        if (count > 0) return;
        const values = await Promise.all([
            new Role({name: 'T. Movil'}).save(),
            new Role({name: 'T. Pc'}).save(),  
            new Role({name: 'Mixto'}).save(),
            new Role({name: 'U. normal'}).save(),
        ])
        console.log(values);
    } catch (error) {
        console.error(error)
    }
}
