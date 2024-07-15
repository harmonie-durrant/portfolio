"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, description, scroll_id}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content w-screen flex-col content-evenly justify-evenly lg:flex-row-reverse">
                    <div class="avatar">
                        <div class="w-full max-w-56 lg:max-w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image
                                src="/harmonie.jpg"
                                alt="Harmonie Durrant Image"
                                width={0} height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold">
                            {title}
                        </h1>
                        <p class="py-6">
                            {description}
                        </p>
                        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                            Contact Me
                        </button>
                        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle z-[1]">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">My contact info</h3>
                                <ul>
                                    <li>Email: <a href="mailto:harmoniedurrant@gmail.com">harmoniedurrant@gmail.com</a></li>
                                    <li>Phone: <a href="sms:0033615077859">+33 6 15 07 78 59</a></li>
                                    <li>LinkedIn: <a href="https://www.linkedin.com/in/harmonie-durrant">@Harmonie Durrant</a></li>
                                </ul>
                                <div class="modal-action">
                                <form method="dialog">
                                    <button class="btn">Close</button>
                                </form>
                                </div>
                            </div>
                            <form method="dialog" class="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        {
                            (scroll_id) ? (
                                <a href={scroll_id} className="scroll-smooth ml-4">
                                    <button class="btn btn-primary scroll-smooth">
                                        Scroll Down
                                    </button>
                                </a>
                            ) : (<></>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}