import { useEffect } from 'react';
import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../error/error';
import { useDispatch, useSelector } from 'react-redux';
import { useVerifyUserHook } from '../../hooks/verifyUser.hook'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const BoundaryPage = ({elem, loadDataFunc, statusRef}) =>{
    const user = useSelector(state => state.user.userData)
    const userStatus = useSelector(state => state.user.userLoadingStatus)
    const dispatch = useDispatch()
    const {verify} = useVerifyUserHook('/sing-in')
    const location = useLocation()
    const { tripId } = useParams()

    useEffect(() => {
        if(!user){
            verify()
        } else if(user) {
            dispatch( tripId ? loadDataFunc(tripId) : loadDataFunc())
        } 
      },[user, location])

    return(
        <>
            {statusRef === 'loading' ? <Spinner/> : null}
            {statusRef === 'rejected' || userStatus === 'rejected'? <ErrorMessage/> : null}
            {statusRef === 'idle' ? elem : null}
        </>
    )

}