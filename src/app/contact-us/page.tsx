import Container from '@/components/Container'
import ContactForm from './ContactForm'
import Link from 'next/link'

const Page = () => {
  return (
    <main className="py-16 md:py-28">
      <Container>
        <section className="grid gap-12 rounded-[42px] bg-[#1c1a1b] p-8 text-white md:p-14 lg:grid-cols-2 lg:p-20">
          <div className="flex flex-col justify-center"><h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Slide Into Our Inbox</h1><p className="mt-5 max-w-lg text-base text-gray-300 lg:text-lg">Got questions or ideas? Fill in the form and we’ll reach out to you as soon as possible.</p><Link className="mt-24 text-base lg:text-lg" href="mailto:info@techsisnetwork.com">✉ &nbsp; info@techsisnetwork.com</Link><div className="mt-16 flex gap-7 text-2xl"><span>𝕏</span><span>in</span><span>◎</span><span>♪</span><span>f</span></div></div>
          <ContactForm/>
        </section>
      </Container>
    </main>
  )
}

export default Page
