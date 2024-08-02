import React from "react";
import pic3 from "../assets/img/img.jpg";

function About() {
  return (
    <div className="W-full py-20 px-[4.5vw] bg-[#CDEA68] rounded-t-3xl">
      <h1 className="text-[3.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
        that need to <u>raise funds</u>, <u>sell prod­ucts</u>,
        <br /> <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
      </h1>

      <div className="textpart text-[18px] flex flex-col md:flex-row justify-between mt-[3vw] border-y border-black py-[2vw] space-y-[2vw] md:space-y-0 md:space-x-[20vw]">
        <div className="flex-1">
          <p className="font-normal text-lg uppercase">What you can expect:</p>
        </div>
        <div className="flex-1">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="mt-[1vw]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg">Follow Us:</p>
          <ul className="list-none mt-[1vw] space-y-[0.5vw] underline">
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex gap-10 pt-[2vw] pb=[2vw] ">
        <div className="w-1/2">
          <h1 className="text-[3.8vw]">Our approch:</h1>
          <button className=" group flex hover:bg-black  gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
            READ MORE
            <div className=" group-hover:scale-150  rounded-full bg-white w-[0.8vw] h-[0.8vw]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh]">
          <img className="rounded-lg" src={pic3} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
