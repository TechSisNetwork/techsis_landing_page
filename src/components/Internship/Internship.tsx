import React from 'react'
import Container from '../Container'
import Button from '../Button'
import ProductMangmentCardIcon from '../icons/ProductMangmentCard'
import FrontendCardIcon from '../icons/FrontendCard'
import BackendCardIcon from '../icons/BackendCard'
import ProductDesignIcon from '../icons/ProductDesign'
import BusinessAnalylsisIcon from '../icons/BusinessAnalylsis'
import InternshipCard from './InternshipCard'
import TechnicalWritingCardIcon from '../icons/TechnicalWritingCard'
import ProjectManagmentCardIcon from '../icons/ProjectManagmentCard'
import Link from 'next/link'

const Internship = () => {
    const intershipDetails =
        [
            {
                title: "Product Management",
                text: "Learn the strategic process involved in guiding the building of a product while solving the right problems for the right people ",
                icon: <ProductMangmentCardIcon />
            },
            {
                title: "Front-end Development",
                text: "Practice the art of translating design and functionality into code, making digital products usable, responsive and accessible across various devices.",
                icon: <FrontendCardIcon />
            },
            {
                title: "Back-end Development",
                text: "Learn to manage data, handle business logic and ensure communication between the front-end and the server of a web application.",
                icon: <BackendCardIcon />
            },
            {
                title: "Product Design",
                text: "Create meaningful user experience by blending design thinking, user needs, and business strategy into one cohesive product.by blending design thinking, user needs, and business strategy into one cohesive product.",
                icon: <ProductDesignIcon />
            },
            {
                title: "Business Analysis",
                text: "Learn how to identify business needs or inefficiency  and recommend effective solutions that deliver value to an organization.",
                icon: <BusinessAnalylsisIcon />
            },
            {
                title: "Technical Writing",
                text: "Practice the creation of clear, concise, and structured documentation that is easy to understand and actionable for its intended users.",
                icon: <TechnicalWritingCardIcon />
            },
            {
                title: "Project Management",
                text: "Understand the process of planning, organizing, executing, and controlling resources to achieve specific goals.",
                icon: <ProjectManagmentCardIcon />
            },
        ]
    return (
        <section id='internship' className="w-full py-20 md:py-34 bg-[]">
            <Container className='flex flex-col gap-10 lg:gap-[79px]'>
                <div className="flex flex-col items-center text-center gap-10 lg:gap-[60px]">
                    <div className="flex flex-col gap-4 lg:gap-5">
                        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] leading-[100%] tracking-[0px]">
                            Jumpstart Your Career in Tech
                        </h2>
                        <p className="text-base lg:text-lg text-[#606060]">
                            Internships can be a valuable way to gain practical skills, build a professional network, and enhance your resume.
                            We provide students and recent graduates with hands- on experience in their field of study.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-base lg:text-lg text-[#606060]">
                            Join Techsis network Internship 2.0
                        </p>
                        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeSLpiEx6IXZlqaiO0M_GH8uLuZM9Li4A--avHDor1KHIc9bA/viewform"} target='__blank'><Button variant='outlined' text={'Register'} className='px-[43.5px]' /></Link>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            intershipDetails.slice(0, 3).map((item, i) => {
                                return (
                                    <InternshipCard key={i} title={item.title} text={item.text} icon={item.icon} />
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-cols-3">
                        <InternshipCard className='col-start-2 max-w-[416px] m-auto' title={intershipDetails[3].title} text={intershipDetails[3].text} icon={intershipDetails[3].icon} />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {
                            intershipDetails.slice(4).map((item, i) => {
                                return (
                                    <InternshipCard key={i} title={item.title} text={item.text} icon={item.icon} />
                                )
                            })
                        }
                    </div>
                </div>

            </Container>

        </section>
    )
}

export default Internship
