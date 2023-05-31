import Layout from "@/components/Home/Layout";
import Input from "@/components/auth/Input";

const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/img/hero.jpg')]">
            <div className="bg-purple-700 w-full h-full lg:bg-opacity-50">
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;