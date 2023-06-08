import Categories from "@/components/home/Categories";
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

const Ongoing = () => {
    return (
        <Layout>
            <Categories />
        </Layout>
    )
}

export default Ongoing;