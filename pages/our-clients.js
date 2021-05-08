import Head from 'next/head';
import Image from 'next/image';

const OurClients = () => {
    return (
        <>

        <Head>
        <title>Our Clients | Spotlight Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

         {/* Full Screen Header */}
         <div className="relative bg-home-header bg-cover text-white w-full z-0 pt-24">
            {/* Overlay */}
            <div className="absolute w-full h-screen bg-black opacity-50 z-0">
            </div>

            {/* Hero Text Wrapper */}
            <div className="flex flex-col items-start z-20 h-96 justify-end pb-16">

            <div className="container mx-auto z-20 motion-safe:animate-fadeSlideUp">
                <h6 className="tracking-wider text-yellow text-left uppercase font-normal z-20">
                Our Clients
                </h6>

                <h1 className="w-4/5 leading-tight text-white text-left z-20">
                Who we work with
                </h1>
            </div>

            </div>
        </div>
        
        {/* Our Clients Section */}
        <div className="relative bg-white w-full">
            <div className="container mx-auto py-20 text-left">

            <div className="flex items-start">

                <div className="w-2/3 mr-4 text-left flex flex-col">
                    <h4 className="mb-4">We work with some of the UK’s biggest companies and independent contractors.</h4>
                    <p className="leading-8">We have bases in Bristol, Birmingham and Brighton, and work across the UK with clients both big and small.</p>
                    <p className="leading-8">If you’re interested in working with us then please feel free to give us a call today, or email us, and we’ll get back to you to discuss your project.</p>
                    <p className="leading-8">After your free consultation with a member of our team, we’ll put together a no-obligation quote and take it from there!</p>
                </div>

                <div className="w-1/3 mr-4 flex flex-wrap">
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-1.png"
                        width={376}
                        height={160}
                    />
                    </div>
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-2.png"
                        width={376}
                        height={160}
                    />
                    </div>
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-3.png"
                        width={376}
                        height={160}
                    />
                    </div>
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-4.png"
                        width={376}
                        height={160}
                    />
                    </div>
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-5.png"
                        width={376}
                        height={160}
                    />
                    </div>
                    <div className="w-1/2">
                    <Image
                        src="/client-logo-6.png"
                        width={376}
                        height={160}
                    />
                    </div>
                </div>

            </div>

            </div>
        </div>

        {/* Work with us Section */}
        <div className="relative bg-gray-100 w-full">
            <div className="container mx-auto py-20 text-left">
            <h2 className="text-black mb-8">Want to join the team?</h2>
            <p className="text-black font-bold text-lg mb-8">We work with freelance contractors around the country.</p>
            <p className="text-black text-lg mb-8">If you’re a skilled videographer, graphic designer or web developer then click below to send your CV or showreel.</p>
            <button className="btn-yellow-2 mr-4">Contact us</button>
            </div>
        </div>
        
        </>
    )
}

export default OurClients;