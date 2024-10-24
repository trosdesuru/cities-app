import 'dotenv/config'
import toggleGoingEvent from './toggleGoingEvent.js'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => toggleGoingEvent(
        '66fb156320e9d29e9608b4a8', // userId
        '66fb3cd320e9d29e9608b5e2' // eventId
    ))
    .then(() => console.log('Event toggled'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())