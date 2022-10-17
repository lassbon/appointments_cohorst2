const  connection = require('./connection')
const { v4: uuidv4 } = require('uuid');

const createAppointment = (name, email, location, time, messages) => {

   return  new Promise((resolve, reject) => {

           const booking_id = uuidv4()
            connection.query(`INSERT INTO bookings(bookings_id,name, email, location,time, messages)`+
                `VALUES('${booking_id}','${name}','${email}','${location}','${time}','${messages}')`,
                   (err, results, fields) =>  {
                        if (err) reject(err)
                        resolve(results)
                })
       
            
           
          //  connection.end()
   })
    
    


}
  

const checkAppointmentByEmail = (email) => {

    return new Promise((resolve, reject) => {
         connection.query(`SELECT * FROM bookings where email='${email}'`,
            (err, results, fields) => {
                if (err) reject(err)
                resolve(results)
                connection.end()
            })
          
        })
    
  
    
}
  

const getAllAppointments = () => {

    return new Promise((resolve, reject) => {
         connection.query('SELECT * FROM bookings',
            (err, results, fields) => {
                if (err) reject(err)
                resolve(results)

            })
        })
    
  
    
}




module.exports = { createAppointment, getAllAppointments, checkAppointmentByEmail }