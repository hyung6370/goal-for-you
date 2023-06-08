import Layout from "@/components/home/Layout";
import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import Animation from "@/components/home/Animation";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import Head from "next/head";


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

export default function Home() {
  const { data: user } = useCurrentUser();


  return (
    <div className="flex relative h-full w-full bg-[url('/img/hero.jpg')]">
      <Head>
        <title>Goal for you</title>
      </Head>
      <div className="flex flex-row justify-center">
        <div className="flex items-center w-2/5 h-screen">
          <Animation />
        </div>
        <div className="flex flex-col items-center justify-center h-screen mx-10">
          <p className="flex flex-col text-3xl font-medium text-white font_kor_light">안녕하세요. {user?.name}님
          <br />이루고 싶은 목표를<br /> 달성하도록 도와주는
            <b className="text-5xl">Goal for you</b>
            입니다.<br /><br />
          </p>
          <div className="flex justify-center">
            <Link href="/calendar">
                <div className="mr-5 choice_btn font_kor_light">홈 가기</div>
            </Link>

            <button
             onClick={() => signOut()}
             className="choice_btn font_kor_light">
              로그아웃
            </button>
        </div>
        </div>

      </div>
    </div>
  )
}
