import React, { useCallback, useState } from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import Link from "next/link";
import AddgoalModal from "../modal/AddgoalModal";
import MenuItem from "./MenuItem";
import useAddgoalModal from "@/hooks/useAddgoalModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLogoutModal from "@/hooks/useLogoutModal";
import LogoutModal from "../modal/LogoutModal";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const Header= () => {
    const addgoalModal = useAddgoalModal();
    const logoutModal = useLogoutModal();
    const [isOpen, setIsOpen] = useState(false);
    const { data: user } = useCurrentUser();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div>
            <div className="flex flex-row items-center justify-between px-4 py-6 transition duration-500 md:px-16">
                <Link href='/'>
                    <div className="flex flex-row items-center justify-center">
                        <img src="/img/logo.png" alt="Logo" className="logo-image" />
                        <h1 className="ml-2 text-2xl font_here">Goal for you</h1>
                    </div>
                </Link>
                
                <AddgoalModal />
                <LogoutModal />
                <div className="flex flex-row">
                    <div className="flex items-center justify-center mt-1 mr-3 font_kor_light">
                        <div className="text-purple-700 border-black font_kor_medium">{user?.name}</div>
                        의 Workspace
                    </div>
                    <MenuItem
                        onClick={addgoalModal.onOpen}
                        label="Add your goals"
                        
                    />
                    <button
                        // onClick={() => signOut()}
                        onClick={logoutModal.onOpen}
                        className="flex justify-center mb-1 ml-3 logout_btn font_kor_medium">
                        Logout
                    </button>
                </div>
            </div>
            
            <hr className="border-gray-400 border-1" />
        </div>
      );
    
}

export default Header;