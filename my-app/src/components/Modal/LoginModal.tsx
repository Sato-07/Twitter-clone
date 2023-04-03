import UseLoginModal from "@/hooks/userLoginModal"
import { useCallback, useState } from "react"
import Input from "../Input";
import Modal from "../Modal";
import RegisterModal from "./RegisterModal";
import useRegisterModal from "@/hooks/userRegisterModal";


const LoginModal = () => {

    const loginModal = UseLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
    },[isLoading,loginModal, registerModal])

    const onSubmit = useCallback( async () =>{
        try{
            setIsLoading(true);

            // // Todo ADD  login 

            loginModal.onClose();
        }catch (error){
            console.log(error)
        }finally{
            setIsLoading(false);
        }

    },[loginModal] )

    const bodyContent=(
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            /> 
            <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Do you not have an account ?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign up</span>
            </p>
        </div>
    )

    return(
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="login"
    actionLabel="Sign in"
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />)
}

export default LoginModal