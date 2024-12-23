import React from "react";

const Contacts = () => {
  return (
    <div className=" p-4">
      <div>
        <p className="font-poppins">Contact</p>
        <p className="font-poppins font-bold text-3xl">About</p>
      </div>

      <div className="font-poppins mt-20">
        <p className="text-3xl">I am Aayush Poudel</p>
        <p>I'm crafting designs with code.</p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row font-poppins items-center justify-center gap-6">
        <div className="flex flex-col w-full sm:w-1/2">
          <p className="font-poppins">
            My projects, often expressed through mesmerizing animations, powered
            by code and algorithms, seek to visually interpret and question the
            fluid nature and existential implications of time.
          </p>
          <p className="font-semibold font-poppins text-xl my-6">Bio</p>

          <p>From Biology to Computer Science</p>
          <hr className=" border-black border-1" />
        </div>

        <div className=" w-full sm:w-1/2">
          <img
            className="rounded-full w-80 h-80 object-cover"
            src="/my_photoblack.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <p className="font-poppins text-justify">
          Before delving into the digital world, I pursued an academic path
          deeply rooted in understanding human behavior and cognition. I earned
          a Bachelor’s degree in Psychology, followed by a Master’s degree in
          Cognitive Sciences, where I explored the intersection of the mind and
          technology. This foundation has profoundly influenced my approach to
          generative art and design, providing me with a unique perspective on
          creativity. It has also deepened my understanding of how artificial
          intelligence operates today.
        </p>

        <p className="my-6">
          I began my journey as a web designer in 1999, finding creative
          fulfillment later with ActionScript, where I developed unique and
          interactive websites that pushed the boundaries of digital design.
        </p>

        <p className="mt-16">From 1999 to 2008...</p>
        <hr className=" border-black border-1" />

        <p className="my-6">
          ...I worked as a webmaster for various companies, including Casino
          Entreprises. Transitioning to freelance work, I collaborated with
          clients such as CLEAR CHANNEL, MICHELIN and EURO RSCG, creating
          tailored website designs and digital solutions until 2012.
        </p>

        <p className="mt-16">From 1999 to 2008...</p>
        <hr className=" border-black border-1" />

        <p className="my-6">
          ...I worked as a webmaster for various companies, including Casino
          Entreprises. Transitioning to freelance work, I collaborated with
          clients such as CLEAR CHANNEL, MICHELIN and EURO RSCG, creating
          tailored website designs and digital solutions until 2012.
        </p>

        <p className="mt-16">And Now</p>
        <hr className=" border-black border-1" />

        <p className="my-6">
          Im working as a webmaster for various companies, including Casino
          Entreprises. Transitioning to freelance work, I collaborated with
          clients such as CLEAR CHANNEL, MICHELIN and EURO RSCG, creating
          tailored website designs and digital solutions until 2012.
        </p>
      </div>

      <div className="w-full sm:w-1/2 mt-24 font-poppins">
        <h1 className="text-3xl font-poppins">Behind the Code</h1>
        <p className="font-poppins font-normal text-xl my-6">
          Explore My Branding and Professional Web Design Work
        </p>
        <p>
          In addition to generative art, I specialize for more than 25 years in
          brand graphic design and professional website creation. My approach
          combines a strong visual identity with effective design principles to
          bring brands to life and create memorable online experiences. To see
          my latest branding and web design projects, visit my Linkedin
          portfolio:
        </p>
        <a className="text-[#d62727] font-bold" href="">
          View my Linkedin Profile
        </a>
        .
        <br />
        <div className="mt-12">
          <a className="text-[#d62727] font-bold " href="">
            📄Download my Resume
          </a>
          .
          <p className="font-light  font-poppins">
            to learn more about my experience
          </p>
        </div>
        <h1 className="text-3xl font-poppins my-8">
          Connections spark new stories.
        </h1>
        <p>
          Reach out, and let's see where the conversation takes us. Feel free to
        </p>
        <a className="text-[#d62727] font-bold" href="">
          connect with me on X
        </a>{" "}
        <span>and</span>
        <br />
        <a href="" className="text-[#d62727] font-bold">
          Instagram
        </a>
        . <span>Check</span>
        <p>out my Linktree for</p>
        <a className="text-[#d62727] font-bold" href="">
          {" "}
          any other stuff.
        </a>
      </div>
    </div>
  );
};

export default Contacts;
