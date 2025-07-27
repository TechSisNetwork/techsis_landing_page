import { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode
    className?: string
}

const Container = ({ children,  className}: ContainerProps) => {
    return (
        <div className={`max-w-[1278px] m-auto px-5 ${className}`}>
            {children}
        </div>
    )
}

export default Container
