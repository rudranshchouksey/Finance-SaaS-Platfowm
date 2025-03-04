import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <div className="items-center hidden lg:flex">
            <Image src="logo.svg" height={28} width={28} alt="logo"/>
            <p className="font-semibold text-white text-2xl ml-2.5">
                Finance
            </p>
        </div>
    )
}