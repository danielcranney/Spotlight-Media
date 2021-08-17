import Head from "next/head";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <>
      <Head>
        <title>Who We Are | Spotlight Media</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* Full Screen Header */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* Hero Text Wrapper */}
        <div className="z-20 flex flex-col items-start justify-center py-12">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h6 className="z-20 mb-0 font-normal tracking-wider text-left text-gray-500 uppercase">
              Our Team
            </h6>

            <h1 className="z-20 w-4/5 mb-0 leading-tight text-left text-white">
              Who we are
            </h1>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="relative w-full bg-white">
        <div className="container py-16 mx-auto text-left">
          <h2 className="mb-8">Our Team</h2>
          <p className="mb-16 text-xl">
            We’re a small team with lots of experience, and we work with a
            network of creatives around the UK.
          </p>

          <div className="flex flex-col md:flex-row">
            {/* Dan Section */}
            <div className="flex items-start w-full mb-6 md:w-1/2 md:mb-0">
              <div className="w-1/3 mr-4">
                <Image
                  src="/headshot-1.png"
                  alt="Rich Weatherson headshot"
                  width={600}
                  height={617}
                />
              </div>

              <div className="flex flex-col w-2/3 mr-4 text-left">
                <h4 className="mb-2">Rich Weatherson</h4>
                <p className="mb-4 text-base font-semibold leading-relaxed tracking-wide uppercase opacity-50">
                  Founder &amp; Partner
                </p>
                <p className="leading-8">
                  Rich has over a decade of experience working as a freelance
                  videographer and has worked with multinational clients such as
                  Discovery and Sky.
                </p>
              </div>
            </div>

            {/* Rich Section */}
            <div className="flex items-start w-full md:w-1/2">
              <div className="w-1/3 mr-4">
                <Image
                  src="/headshot-2.png"
                  alt="Dan Cranney headshot"
                  width={600}
                  height={617}
                />
              </div>

              <div className="flex flex-col w-2/3 mr-4 text-left">
                <h4 className="mb-2">Dan Cranney</h4>
                <p className="mb-4 text-base font-semibold leading-relaxed tracking-wide uppercase opacity-50">
                  Founder &amp; Partner
                </p>
                <p className="leading-8">
                  Dan has worked a multidisciplinary media creative for over ten
                  years, across videography, web development and design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work with us Section */}
      <div className="relative w-full bg-gray-100">
        <div className="container py-20 mx-auto text-left">
          <h2 className="mb-8 text-black">Want to join the team?</h2>
          <p className="mb-8 text-lg font-bold text-black">
            We work with freelance contractors around the country.
          </p>
          <p className="mb-8 text-lg text-black">
            If you’re a skilled videographer, graphic designer or web developer
            then click below to send your CV or showreel.
          </p>
          <button className="mr-4 btn-yellow-2">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
