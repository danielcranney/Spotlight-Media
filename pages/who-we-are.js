import Head from 'next/head';
import Image from 'next/image';

const WhoWeAre = () => {
    return (
        <>
        <Head>
        <title>Who We Are | Spotlight Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Full Screen Header */}
        <div className="relative bg-home-header bg-cover text-white w-full z-0 pt-24">
            
            {/* Overlay */}
            <div className="absolute w-full h-96 bg-black opacity-50 z-0">
            </div>

            {/* Hero Text Wrapper */}
            <div className="flex flex-col items-start z-20 h-96 justify-end pb-16">

            <div className="container mx-auto z-20 motion-safe:animate-fadeSlideUp">
                <h6 className="tracking-wider text-yellow text-left uppercase font-normal z-20">
                Who We Are
                </h6>

                <h1 className="w-4/5 leading-tight text-white text-left z-20">
                We’re a team of <em className="em">videographers</em>, <em className="em">designers</em> and <em className="em">web developers</em>.
                </h1>
            </div>

            </div>
        </div>
        
        {/* Our Team */}
        <div className="relative bg-white w-full">
            <div className="container mx-auto py-20 text-left">
                <h2 className="mb-8">Our Team</h2>
                <p className="text-xl mb-16">
                We’re a small team with lots of experience, and we work with a network of creatives around the UK.
                </p>

            <div className="flex items-start">
                <div className="w-1/4 mr-4">
                <Image
                src="/headshot-1.png"
                alt="Rich Weatherson headshot"
                width={1564}
                height={1609}
                />
                </div>

                <div className="w-1/4 mr-4 text-left flex-col flex">
                <h4 className="mb-2">Rich Weatherson</h4>
                <p className="text-base uppercase leading-relaxed font-semibold mb-4 opacity-50">Founder &amp; Partner</p>
                <p className="leading-8">Rich has over a decade of experience working as a freelance videographer and has worked with multinational clients such as Discovery and Sky.</p>
                </div>

                <div className="w-1/4 mr-4">
                <Image src="/headshot-2.png"
                alt="Dan Cranney headshot"
                width={1564}
                height={1609} />
                </div>

                <div className="w-1/4 mr-4 text-left flex-col flex">
                <h4 className="mb-2">Dan Cranney</h4>
                <p className="text-base uppercase leading-relaxed font-semibold mb-4 opacity-50">Founder &amp; Partner</p>
                <p className="leading-8">Dan has worked a multidisciplinary media creative for over ten years, across videography, web development and design.</p>
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

export default WhoWeAre;