import Image from 'next/image'
import brandLogo from "../../public/techsis-logo.png"

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <Image
                src={brandLogo}
                width={40}
                height={40}
                alt="Brand Logo"
                className='animate-spin'
            />
        </div>
    )
}

export default Loading
