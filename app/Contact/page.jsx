"use client";
import {motion} from "framer-motion"
import Hero from "@/components/Contact/hero"
import Navbar from "@/components/Home/Navbar"
import Appointment from "@/components/Contact/appointment"
import Location from "@/components/Contact/location"
import Social from "@/components/Contact/social"
import Address from "@/components/Home/address"
import Footer from "@/components/Home/Footer"
export default function contactPage() {
    return(
        <div>

        <motion.div><Navbar/> </motion.div>
        <motion.div><Hero/> </motion.div>
        <motion.div> <Appointment/></motion.div>
        <motion.div><Location/></motion.div>
        <motion.div><Social/> </motion.div>
        < motion.div><Address/></motion.div>
        < motion.div><Footer/></motion.div>
        </div>
    );
}