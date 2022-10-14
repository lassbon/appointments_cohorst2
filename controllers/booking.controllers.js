
const { createAppointment, checkAppointmentByEmail} = require('../models/query')

const booking = (req, res) => {

    const { name, email, location, time, messages } = req.body
    
    if (!name || !email || !location || !time || !messages) {
        
        res.status(400).json({
            status:false,
            message: "All fields required"
        })
    }

    try {
        checkAppointmentByEmail(email)
        .then(responseFromCheckEmail => {
            if (responseFromCheckEmail.length > 0) {
               throw new Error("You booked already.Booking is on a weekly basis")
            }

            return createAppointment(name, email, location, time, messages)
           
         })
        .then(appointmentResult => {
                
            res.status(201).json({
                status:true,
                message: "Appointment booked"
            })

        })
        .catch(error => {
            console.log(error.message)
            res.status(400).json({
                status:false,
                message: error.message
            })
        })

    
    
} catch (error) {
    
        res.status(400).json({
            status : fasle,
            message: error.message
        })
}
   





   




}



module.exports  =  { booking }