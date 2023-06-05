import Input from "@/components/auth/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/');
        }
        catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        }
        catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);


    return (
        <div className="relative h-full w-full bg-[url('/img/hero.jpg')]">
            <div className="w-full h-full bg-purple-700 lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <p className="text-4xl text-white font_here">
                        Goal For you
                    </p>
                </nav>
                <div className="flex justify-center">
                    <div className="self-center w-full px-16 py-16 mt-2 bg-white bg-opacity-50 rounded-3xl lg:w-2/5 lg:max-w-md">
                        <h2 className="flex justify-center pb-4 mb-8 text-5xl font-semibold text-purple-800 font_here">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    id="name"
                                    value={name}
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="w-full py-3 mt-10 text-white transition bg-purple-700 rounded-3xl hover:bg-purple-500 ">
                            {variant === 'login' ? '로그인' : '계정 생성'}
                        </button>
                        <div className="flex flex-row items-center justify-center gap-4 mt-8">
                            <div
                                onClick={() => signIn('google', { callbackUrl: '/' })}
                                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
                            >
                                <FcGoogle size={30} />
                            </div>
                            <div
                                onClick={() => signIn('github', { callbackUrl: '/' })}
                                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
                            >
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className="mt-12 text-neutral-700">
                            {variant === 'login' ? 'Goal for you를 처음 사용하시나요?' : '이미 계정을 가지고 계신가요?'}
                            <span onClick={toggleVariant} className="ml-1 font-bold text-black cursor-pointer hover:underline">
                                {variant === 'login' ? '계정 생성 하러가기' : '로그인 하러가기'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;