import Layout from "@/components/Home/Layout";
import Input from "@/components/auth/Input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

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
                            {variant === 'login' ? 'Sign in' : 'Register'}
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
                        <button className="w-full py-3 mt-10 text-white transition bg-purple-700 rounded-3xl hover:bg-purple-500 ">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="mt-12 text-neutral-700">
                            {variant === 'login' ? 'First time using Goal for you?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="ml-1 font-bold text-black cursor-pointer hover:underline">
                                {variant === 'login' ? 'Create and account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;