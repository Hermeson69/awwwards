import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa"

const links = [
    {href:'https://discord.com', icon: <FaDiscord/>},
    {href:'https://Instagram.com', icon: <FaInstagram/>},
    {href:'https://GitHub.com', icon: <FaGithub/>}
]

export const Footer = () =>{
    return(
        <footer className="w-screen bg-black py-4 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
                <p className="text-center text-sm font-sm md:text-left">
                    &copy; Nova 2025. All rights reserved.
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privicy-policy" className="text-center text-sm hover:underline md:text-right">Privicy Policy</a>
            </div>
        </footer>
    )
}