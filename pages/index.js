import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {


  return (
    <div className="App relative bg-white flex flex-col items-center">

      <Head>
        <title>Spotlight Media | Construction, Property & Trades</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

          {/* Full Screen Header */}
          <div className="relative bg-home-header bg-cover text-white w-full h-screen z-0">
          
          {/* Overlay */}
          <div className="absolute w-full h-screen bg-black opacity-50 z-0">
          </div>

          {/* Container for Arrow */}
          <div className="absolute flex flex-col justify-end items-center w-full h-screen opacity-100 z-0 pb-6">
              {/* Downwards Arrow */}
              <div className="text-yellow mt-auto animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
              </div>
          </div>


          {/* Hero Text Wrapper */}
          <div className="flex flex-1 flex-col items-center justify-center z-20 h-screen pt-12">

          <h1 className="w-4/5 leading-tight text-white text-center z-20 motion-safe:animate-fadeSlideUp">
          We create content for the <em className="em">construction</em>, <em className="em">property</em> and <em className="em">trades</em> industries.
          </h1>

              <div className="flex mt-8 motion-safe:animate-fadeSlideUp">
              <Link href="/contact">
                <a className="btn-yellow mr-4">Contact us</a>
              </Link>

              <Link href="/who-we-are">
              <a className="btn-gray-outline">Learn More</a>
              </Link>
              </div>
          
          </div>

      </div>

      {/* What We Do Section */}
      <div className="relative bg-white w-full js-show-on-scroll">
          <div className="container mx-auto py-20 text-center">
              <h2 className="mb-8">What we do</h2>
              <p className="font-bold text-lg">
              We create media for the construction, property and trades industries.
              </p>
              <p className="text-lg mb-12">
              We've been videography, web and design services to corporate clients across Bristol, Birmingham and Brighton since 2019.
              </p>

            <div className="flex flex-col items-start md:flex-row">

                <div className="w-full md:w-1/3 mr-4 text-center flex-col flex mb-8 md:mb-0">
                    {/* Icon */}
                    <div className="w-1/5 md:w-1/3 mb-4 mx-auto">
                    <Image
                      src="/service-icon-1.svg"
                      width={270}
                      height={250}
                    />
                    </div>
                    {/* Content */}
                    <div>
                      <div className="flex mb-4 h-auto md:h-16 lg:h-auto md:mb-0 lg:mb-4 justify-center items-center">
                      <h4 className="mb-0">Video Production</h4>
                      </div>
                      <p className="leading-2">We produce quality content from location tours to training videos.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mr-4 text-center flex-col flex mb-8 md:mb-0">
                    {/* Icon */}
                    <div className="w-1/5 md:w-1/3 mb-4 mx-auto">
                    <Image
                      src="/service-icon-2.svg"
                      width={270}
                      height={250}
                    />
                    </div>
                    {/* Content */}
                    <div>
                      <div className="flex mb-4 h-auto md:h-16 lg:h-auto md:mb-0 lg:mb-4 justify-center items-center">
                        <h4 className="mb-0">Web Development</h4>
                      </div>
                      <p className="leading-2">We design and build fast and functional websites.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mr-4 text-center flex-col flex mb-8 md:mb-0">
                    {/* Icon */}
                    <div className="w-1/5 md:w-1/3 mb-4 mx-auto">
                    <Image
                      src="/service-icon-3.svg"
                      width={270}
                      height={250}
                    />
                    </div>
                    {/* Content */}
                    <div>
                      <div className="flex mb-4 h-auto md:h-16 lg:h-auto md:mb-0 lg:mb-4 justify-center items-center">
                      <h4 className="mb-0">Design & Branding</h4>
                      </div>
                      <p className="leading-2">We offer a comprehensive digital and print design service.</p>
                    </div>
                </div>

            </div>
            
          </div>
      </div>

      {/* Who we work with Section */}
      <div className="relative bg-yellow w-full">
          <div className="container mx-auto py-20 text-center">
          <h2 className="mb-8">Who we work with</h2>
              <p className="font-normal text-lg mb-12">
              We work with clients nationwide, including some of the UK’s largest companies and independent contractors.
              </p>

          <div className="flex flex-row items-center flex-wrap">
              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-1.png"
                width={376}
                height={160}
              />
              </div>
              
              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-2.png"
                width={376}
                height={160}
              />
              </div>

              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-3.png"
                width={376}
                height={160}
              />
              </div>

              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-4.png"
                width={376}
                height={160}
              />
              </div>

              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-5.png"
                width={376}
                height={160}
              />
              </div>

              <div className="w-1/2 sm:w-1/3 lg:w-1/6">
              <Image
                src="/client-logo-6.png"
                width={376}
                height={160}
              />
              </div>
              
          </div>

          </div>
      </div>

      {/* Let's Work Together Section */}
      <div className="relative bg-gray-900 w-full">
          <div className="container mx-auto py-20 text-center">
          <h2 className="text-white mb-8">Let's work together</h2>
          <p className="text-white text-lg mb-8">We're always interested in working on new and exciting projects. Get in touch with our team and let's discuss yours today</p>
          <button className="btn-yellow mr-4">Contact us</button>
          </div>
      </div>

    </div>
  );
}

export default Home;