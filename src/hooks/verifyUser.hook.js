import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storageGetToken, storegeRemoveToken } from '../helpers/localStorage';
import { verifyUser } from '../store/actions/user';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';


export const useVerifyUserHook = (navLink) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.userData)

    const verify = useCallback( async() => {
        if (storageGetToken() && !user ){
                dispatch(verifyUser())
                .then(res => {
                    if(res.error) {
                        navigate(navLink)
                        storegeRemoveToken()
                    }
                })
        } else {
            navigate(navLink)
        }
    },[user])
    return {verify}
}
