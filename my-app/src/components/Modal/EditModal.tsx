import useCurrentUser from "@/hooks/useCurrentUser"
import UseEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";


const EditModal = () => {

    const {data : currentUser } = useCurrentUser();
    const {mutate: mutateFetchedUser} = useUser(currentUser?.id)
    const editModal = UseEditModal()

    const [prodileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    useEffect( () =>{
        setProfileImage(currentUser?.prodileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUsername(currentUser?.username);
        setBio(currentUser?.bio)

    },[currentUser?.prodileImage, currentUser?.coverImage, currentUser?.name, currentUser?.username, currentUser?.bio] )

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async () => {
        try { 
            setIsLoading(true)

            await axios.patch('/api/edit',{
                name,
                username,
                bio,
                prodileImage,
                coverImage
            })
            mutateFetchedUser();

            toast.success('Updated')

        } catch(error){
            toast.error('Something went wrong')
        } finally{
            setIsLoading(false)

        }
    },[name, username, bio, prodileImage, coverImage, editModal, mutateFetchedUser])
    return (
        <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        title="Edit your profile"
        actionLabel="Save"
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        />)
}

export default  EditModal