import {http} from '../http/http';
import { storageSetToken } from './localStorage';
const {request} = http();


const  requestSignIn = async(body) => {
   const data = await request({
        url:'https://travel-app-api.glitch.me/api/v1/auth/sign-in',
        method: 'POST',
        body
    })
    storageSetToken(data.token)
    return data.user
}

const requestSignUp = async(body) =>{
    const data = await request({
        url:'https://travel-app-api.glitch.me/api/v1/auth/sign-up',
        method: 'POST',
        body
    })
    storageSetToken(data.token)
    return data.user
}

const verifyUser = async() => {
    const data = await request({ url:'https://travel-app-api.glitch.me/api/v1/auth/authenticated-user' })
    return data
    
}

const requestAlltrips = async() => {
    return await request({ url:'https://travel-app-api.glitch.me/api/v1/trips' })
}

const requestTripById = async(id) => {
    return await request({ url:`https://travel-app-api.glitch.me/api/v1/trips/${id}` })
}

const requestBookTrip = async(trip) => {
    return await request({
        url:`https://travel-app-api.glitch.me/api/v1/bookings`,
        method: 'POST',
        body:trip,
    })
    
}

const requestDeleteTrip = async(tripId) => {
    return await request({
        url:`https://travel-app-api.glitch.me/api/v1/bookings/${tripId}`,
        method: 'DELETE'
    })
}

const requestUserBooking = async() =>{
    return await request({ url:`https://travel-app-api.glitch.me/api/v1/bookings` })
}

const service = {
    requestSignIn,
    requestSignUp,
    verifyUser,
    requestAlltrips,
    requestTripById,
    requestBookTrip,
    requestDeleteTrip,
    requestUserBooking
};

export default service