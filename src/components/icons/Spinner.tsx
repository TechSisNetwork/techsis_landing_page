import { SVGProps } from '@/types/global'
import React, { forwardRef } from 'react'

const Spinner = forwardRef<SVGSVGElement, SVGProps>(
    ({ className, ...props }, ref) => {
        return (
            <svg className={className} ref={ref} width="24px" height="24px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#000000" {...props}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"></circle>
                        <path fill="#000000" fillOpacity=".1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"></path>
                    </g>
                </g>
            </svg>
            )
    })
Spinner.displayName = "Spinner";
export default Spinner