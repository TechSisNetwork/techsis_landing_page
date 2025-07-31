import React, { ReactNode } from 'react'

type InternshipCardProps = {
    title: string
    text: string
    icon: ReactNode
    className?: string
}

const InternshipCard = ({ text, title, icon, className }: InternshipCardProps) => {
    return (
        <div className={`min-h-[312px] relative overflow-hidden flex flex-col gap-5 rounded-[20px] shadow-xl p-5 ${className}`}>
            <h3 className="font-bold lg:text-2xl text-[#2B2B2B] leading-[100%] tracking-[0px]">{title}</h3>
            <p className="text-sm lg:text-xl text-[#475569] lg:text-[#606060] leading-[100%] tracking-[0px]">{text}</p>
            <div className="absolute bottom-0 right-0">{icon}</div>
        </div>
    )
}

export default InternshipCard
