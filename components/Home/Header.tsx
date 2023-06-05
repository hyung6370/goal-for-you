import React, { useCallback, useState } from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import Link from "next/link";
import AddgoalModal from "../modal/AddgoalModal";
import MenuItem from "./MenuItem";
import { BsPlusCircle } from "react-icons/bs";
import useAddgoalModal from "@/hooks/useAddgoalModal";


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

const Header = () => {
    const addgoalModal = useAddgoalModal();
    const [isOpen, setIsOpen] = useState(false);

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
                <div className="flex flex-row">
                    <MenuItem
                        onClick={addgoalModal.onOpen}
                        label="Add your goals"
                        
                    />
                    <button
                        onClick={() => signOut()}
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