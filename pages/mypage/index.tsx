import Layout from "@/components/home/Layout";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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

const Mypage = () => {
    return (
        <Layout>
            <p className="">마이페이지</p>
        </Layout>
    )
}

export default Mypage;