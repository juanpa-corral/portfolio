import React, { useRef } from "react"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Geramirez" />
                        </div>
                        <div className="text-content">
                            <h2>Real-estate management Made with a Poweful, User-Friendly, App called Geramirez</h2>
                            <p className="text-white-50 md:text-xl">
                                Development of a mobile app for real estate management, implementing property listing features, search filters, automatic data sheet creation, and direct email delivery to clients. 
                            </p>
                        </div>
                    </div>   

                    {/*RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Bender Store" />
                            </div>
                            <h2>E-commerce for the Sale of Printed Shirts</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="CAF App" />
                            </div>
                            <h2>Gym App, called CAF App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection