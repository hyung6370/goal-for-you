import Layout from "@/components/Home/Layout";
import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

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

const Calendar = () => {
    return (
        <Layout>
            캘린더 페이지!
            
        </Layout>
    )
}

export default Calendar;