export default function About() {
  return (
    <section id="about" className="min-h-screen overflow-hidden">
      <div className=" flex flex-col justify-center items-center mb-4  space-y-3">
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          Get To Know
        </h2>
        <h1 className=" text-xl xl:text-2xl font-bold text-white">About Me</h1>
      </div>
      <div className=" flex flex-col lg:flex-row gap-4 p-2">
        <div className=" flex justify-center mx-5 lg:w-1/3 relative items-center">
          <img
            alt="arjun"
            loading="lazy"
            width="250"
            height="500"
            decoding="async"
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60  "
            src="https://previews.dropbox.com/p/thumb/ACVcuZt4utTq3TRWRAxhQWddT6aqkvxjVH_vhURf4sokZoX4WsqAFjWxycU8CBBv_O5C3H2KS6kuN3fURkV_RdbXbCPInx-Anx2lkWkc5txUjXNUJ-A-lPxpPOD3MhPYsWMbAl5nwgKsCaPs0FlkL2mMLs6UdXsV5Q-5YVSBOlBkKf_TwEtWgE0T90Oqhl0v9tZcowQHM1XIz8DePZfAgZF63TubYyiZ72x_fgSTTAFt9WW3vg7p8RFG5kehCbYOSHX8vQwN72AXZTgKuB7ATiia8lb-tOrfI8x1yiSlrUgmafFh0YtqV54KiYdXO8HAY7G4lDRS24ZuvJEIDa6-8wn6/p.png"
          />
          <img
            alt="arjun"
            loading="lazy"
            width="250"
            height="500"
            decoding="async"
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-contain absolute lg:translate-x-3 duration-500 ease-in-out cursor-pointer lg:-translate-y-3 lg:hover:translate-y-0 lg:hover:translate-x-0 border-white border-2"
            src="https://previews.dropbox.com/p/thumb/ACVhR789Zr79f21nXxdfiXPFsHBrD1DMkyBkOCjOWVwJEp3pqGyxYPOnYmh_Y21XdEea2TNVOMtTWCS4hhWgVEAkQMNHBVBdE_64ImXVbKUwQxZ3Iq5IR6iIz-nhIp-k8bD5RVxlaiQQvMRUqaDBWE0Li5RxgS6o636Yw2PlWSjBCi5EB49gYESO8LBG6SksC7gMghLRIhfbWSTmYCgXW9NPWW5xCOTjfYB4tL6KrxGiGetZOWST6tQzk7d3GvIlVTmCSvh2aIAMtHY8ZuQYUh8hAfGl8q5MmFFSFqcw-np-bhmXXFNRbDzFaEQLqqMS22xCTNfRAS4pDRJTZ8f6r5xa/p.jpeg"
          />
        </div>
        <div className=" flex flex-col justify-center lg:w-2/3 lg:p-6">
          <div className=" rounded-xl lg:p-4 m-1 max-md:my-5 max-md:text-center">
            <div className="text-white mb-2 lg:ml-7 lg:text-2xl font-bold">
              <h1>I CREATE</h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                WEBSITES
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                TAILORED FOR
              </h1>
              <h1>YOUR SUCCESS</h1>
            </div>
            <p className="text-sm lg:text-lg flex-wrap p-1 lg:p-7 text-white leading-relaxed __classNameName_d64469">
              With a strong foundation in web fundamentals, I specialize in
              crafting bespoke sites that attract customers and empower small
              businesses. Let's work together to elevate your online presence
              and bring your vision to life.
            </p>
          </div>
          <div className=" max-md:text-center mb-2 lg:ml-10 ">
            <a
              href="#contact"
              className="text-white bg-sky-600 p-2 lg:p-4 rounded-full px-4 hover:bg-sky-500 font-bold"
            >
              Get In Touch!
            </a>
          </div>
        </div>
      </div>
      <div className=" h-1 bg-white mt-12 opacity-50 rounded-full mx-1"></div>
    </section>
  );
}
