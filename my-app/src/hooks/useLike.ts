import { useCallback, useMemo } from "react"
import useCurrentUser from "./useCurrentUser"
import usePost from "./usePost"
import UseLoginModal from "./userLoginModal"
import { toast } from "react-hot-toast"
import axios from "axios"


const useLike = ({postId, userId}: {postId: string, userId?: string}) => {

    const { data: currentUser } = useCurrentUser()
    const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId)
    const { mutate: mutateFetchedPosts } = usePost(userId as string)


     const loginModal = UseLoginModal()

     const hasLiked = useMemo(()=> {
        const list = fetchedPost?.likedIds || []

        return list.includes(currentUser?.id)
     },[currentUser?.id, fetchedPost?.likedIds])

     const toggleLike = useCallback(async () => {
        if(!currentUser){
            return loginModal.onOpen()
        }
        try{
            let request;

            if(hasLiked){
                request = () => axios.delete('/api/like',{ data:{postId}})
            }else{
                request = () => axios.post('/api/like', { postId })
            }

            await request;
            mutateFetchedPosts()
            mutateFetchedPost()

            toast.success('Succes')

        }catch(error){
            toast.error('Something went wrong')
        }
     },[currentUser, hasLiked, postId, mutateFetchedPost, mutateFetchedPosts, loginModal])

     return {
        hasLiked,
        toggleLike
     }
}

export default useLike