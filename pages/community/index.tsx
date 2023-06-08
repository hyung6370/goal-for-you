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

const Community = () => {
    return (
        <Layout>
            커뮤니티 페이지!
        </Layout>
    )
}

export default Community;