import { useCallback, useMemo } from "react"
import useCurrentUser from "./useCurrentUser"
import useUser from "./useUser"
import UseLoginModal from "./userLoginModal"
import axios from "axios"
import { toast } from "react-hot-toast"



const useFollow = (userId: string) =>{
    const {data : currentUser, mutate: mutateCurrentUser}= useCurrentUser()
    const{mutate: mutateFetchedUser} = useUser(userId)

    const loginModal = UseLoginModal()

    const isFollowing = useMemo(()=>{
        const list = currentUser?.followingIds || []

        return list.includes(userId)

    },[userId, currentUser?.followingIds])

    const toggleFollow = useCallback( async()=>{
        if(!currentUser){
            return loginModal.onOpen()
        }
        try{
            let request;

            if(isFollowing){
                request = () => axios.delete('/api/follow', {data: { userId }})

            }else{
                request = () => axios.post('/api/follow',{data: { userId }})
            
            }
            await request()

            mutateCurrentUser
            mutateFetchedUser

        } catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }

    },[currentUser, userId, isFollowing, mutateCurrentUser,mutateFetchedUser, loginModal])

    return{
        isFollowing,
        toggleFollow
    }



}

export default useFollow