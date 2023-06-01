import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import Link from "next/link";

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

export default function Header() {
    return (
        <div>
            <div className="flex flex-row items-center px-4 py-6 transition duration-500 md:px-16">
                <Link href='/'>
                    <div className="flex flex-row items-center justify-center">
                        <img src="/img/logo.png" alt="Logo" className="logo-image" />
                        <h1 className="ml-2 text-2xl font_here">Goal for you</h1>
                    </div>
                </Link>
            </div>
            
            <hr className="border-gray-400 border-1" />
        </div>
      );
    
}