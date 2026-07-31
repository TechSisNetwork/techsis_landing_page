"use client"
import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { object, string } from 'yup';
import { useFormik } from 'formik';

const NewsLetterSchema = object({
    email: string().email().required("Please enter a valid email"),
});


const NewsLetter = () => {
    const [isLoading, setLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [isError, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: NewsLetterSchema,
        onSubmit: async (values) => {
            setLoading(true)
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SCRIPT_WEB_APP}`, {
                    method: "POST",
                    body: JSON.stringify(values),
                });
                const data = await res.json();
                if (data.result === "success") {
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    },
                        3000
                    )
                    formik.resetForm();
                    setLoading(false)
                } else {
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    },
                        3000
                    )
                    formik.resetForm();
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true)
                setTimeout(() => {
                    setError(false)
                },
                    3000
                )
                formik.resetForm();
                setLoading(false)
            }
            setLoading(false)

        },
    })
    return (
        <section id='newsletter' className='w-full  bg-[url(../../public/news-letter.jpg)] bg-cover bg-center '>
            <div className="bg-[#000000CC] text-[#F5F5F5] h-full w-full py-[100px] px-5 flex flex-col items-center gap-10 lg:gap-20">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[54px] leading-[100%] tracking-[0px]">Don’t Be the last to Know</h3>
                    <p className="text-sm lg:text-xl">New things are happening. Stay in the loop with updates, perks, and mildly entertaining emails.</p>
                </div>
                <div className="flex flex-col gap-1 w-full items-center">
                    <form onSubmit={formik.handleSubmit} className="flex w-full max-w-[353px] lg:max-w-[907px] ">
                        <Input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name='email'
                            placeholder='Enter Your Email Address'
                            className='text-gray-700 overflow-hidden'
                            error={formik.touched.email ? formik.errors.email : ""}
                            disabled={isLoading}
                            inputClassName='h-10 lg:h-[60px] w-full rounded-md !rounded-r-none border px-8 text-xs lg:text-base'
                            />
                        <Button
                            disabled={isLoading}
                            text={"Subscribe"}
                            isLoading={isLoading}
                            type="submit"
                            className='rounded-l-none border-transparent rounded-md w-[121px] lg:w-[201px] text-xs h-10 lg:h-[60px]' />
                    </form>
                    <p className="font-bold text-xs lg:text-sm">{isSuccess && <span className='text-green-600'>Successfully subscribed!</span>} {isError && <span className='text-red-600'>Failed to subscribe. Please try again later!</span>}</p>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
