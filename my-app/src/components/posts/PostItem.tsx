import useCurrentUser from "@/hooks/useCurrentUser";
import UseLoginModal from "@/hooks/userLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

interface PostItemProps{
    userId?:string;
    data: Record<string, any>;
}



const PostItem: React.FC<PostItemProps> = ({ userId, data ={} }) =>{

    const router = useRouter();
    const loginModal = UseLoginModal()

    const { data : currentUser } = useCurrentUser()
    const goToUser = useCallback((event:any)=>{
        event.stopPropagation()

        router.push(`/users/${data.id}`)

    },[router,data.id])

    const onLike = useCallback((event:any)=>{
        event.stopPropagation();

        loginModal.onOpen()

    

    },[loginModal])

    const createdAt = useMemo(()=>{

        if(data?.createdAt){
            return null
        }

        return formatDistanceToNowStrict(new Date(data?.createdAt))

    },[data?.createdAt])






    return(<div></div>)
}
export default PostItem