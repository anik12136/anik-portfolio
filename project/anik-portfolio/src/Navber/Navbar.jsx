import "./Navbar.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaUser />, href: "#about" },
    { name: "Skills", icon: <FaCode />, href: "#skills" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
    { name: "Contact", icon: <FaEnvelope />, href: "#contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            navItems.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= sectionTop - sectionHeight / 3) {
                        current = item.href;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset if navbar covers section
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex justify-center">
            <motion.nav
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="navbar w-[75%] fixed top-4 px-6 py-3 rounded-full 
               bg-opacity-50  bg-gray-600 shadow-lg shadow-sky-300
               flex justify-between items-center text-white text-lg font-semibold"
            >

                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`nav_item ${activeSection === item.href ? "active" : ""}`}
                    >
                        <div className="nav_icon">{item.icon}</div>
                        <span className="nav_text">{item.name}</span>
                    </a>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navbar;
