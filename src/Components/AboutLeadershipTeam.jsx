import React from "react";

// IMPORT IMAGES
import p1 from "../assets/1.jpeg";
import p2 from "../assets/2.jpeg";
import p3 from "../assets/3.jpeg";
// import p4 from "../assets/person4.jpg";


export default function LeadershipTeam() {

  const team = [
    {
      img: p1,
      name: "Adam Evans. Mr. Evans",
      role: "Vice-President of Cyber Operations",
    },
    {
      img: p2,
      name: "Marc Coyle. Mr. Coyle ",
      role: "Manager of information technology",
    },
    {
      img: p3,
      name: "Andrew Kirsch. Mr. Kirsch ",
      role: "Founder of Kirsch Consulting Group",
    },
    // {
    //   img: p4,
    //   name: "Alex Maclachlan",
    //   role: "VP, Marketing",
    // },
  
   
  ];

  return (
    <section className="bg-black py-14 px-4">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-purple-500">Leadership</span>{" "}
          <span className="text-white">Team</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {team.map((member, index) => (
            <div key={index} className="group">
              
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl mb-3">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-60 object-cover justify-center grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* LINE */}
              <div className="h-[2px] w-12 bg-purple-500 mb-2"></div>

              {/* NAME */}
              <h3 className="text-white text-sm font-semibold">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-gray-400 text-xs mb-2">
                {member.role}
              </p>

              {/* LINKEDIN ICON */}
              <div className="text-gray-400 text-xs">
                in
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}