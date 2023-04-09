import useCurrentUser from "@/hooks/useCurrentUser";
import UseLoginModal from "@/hooks/userLoginModal";
import Avatar from "@/components/Avatar"

import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import useLike from "@/hooks/useLike";

interface PostItemProps{
    userId?:string;
    data: Record<string, any>;
}



const PostItem: React.FC<PostItemProps> = ({ userId, data ={} }) =>{

    const router = useRouter();
    const loginModal = UseLoginModal()

    const { data : currentUser } = useCurrentUser()
    const {hasLiked, toggleLike} = useLike({ postId: data.id, userId })


    const goToUser = useCallback((event:any)=>{
        event.stopPropagation()

        router.push(`/users/${data.id}`)

    },[router,data.id])

    const goToPost = useCallback(()=>{
        router.push(`/posts/${data.id}`)

    },[router, data.id])

    const onLike = useCallback(async (event:any)=>{
        event.stopPropagation();
        if(!currentUser){
            return loginModal.onOpen()
        }
        
        toggleLike()
        

    },[loginModal, currentUser, toggleLike])


    const createdAt = useMemo(()=>{

        if(!data?.createdAt){
            return null
        }

        return formatDistanceToNowStrict(new Date(data.createdAt))

    },[data.createdAt])

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;





    return(
    <div onClick={goToPost}
    className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition"
    >
        <div className="flex flex-row items-start gap-3">
            <Avatar userId={data.user.id} />
            <div>
                <div className="flex flex-row items-center gap-2">
                    <p onClick={goToUser} className="text-white font-semibold cursor-pointer hover:underline">
                        {data.user.name}
                    </p>
                    <span onClick={goToUser} className="text-neutral-500 cursor-pointer hover:underline hidden md:block">
                        @{data.user.username}
                    </span>
                    <span className="text-neutral-500 text-sm">
                        {createdAt}

                    </span>
                </div>
                <div className="text-white mt-1 ">
                    {data.body}
                </div>
                <div className="flex flex-row items-center mt-3 gap-10">
                    <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
                        <AiOutlineMessage size={20}/>
                        <p>
                            {data.comments?.length}
                        </p>

                    </div>
                    <div onClick={onLike} className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500">
                        <LikeIcon size={20} color={hasLiked ? 'red' : ''}/>
                        <p>
                            {data.likedIds?.length}
                        </p>

                    </div>


                </div>
                
            </div>

        </div>

    </div>
    )
}
export default PostItem