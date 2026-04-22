import React, { useState } from "react";

// IMAGES
import p1 from "../assets/1.jpeg";
import p2 from "../assets/2.jpeg";
import p3 from "../assets/3.jpeg";
import p4 from "../assets/5.jpeg";
import p5 from "../assets/4.jpeg";

export default function LeadershipTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      img: p1,
      name: "Adam Evans",
      role: "Vice-President of Cyber Operations",
      details: `
Adam Evans is Vice-President of Cyber Operations and Chief Information Security Officer at the Royal Bank of Canada.

He leads:
• Global cyber operations  
• Cyber strategy & crisis management  
• Regulatory compliance  
• Industry partnerships  

He is also a member of ISACA (Information Systems Audit and Control Association).
      `,
    },
    {
      img: p2,
      name: "Marc Coyle",
      role: "Manager of Information Technology",
      details: `
Marc Coyle has served as Manager of Information Technology at the City of Belleville for nearly 30 years.

He specializes in:
• Municipal IT strategy & infrastructure  
• Digital transformation in public sector  
• Cybersecurity governance  

Leadership roles:
• Treasurer – MISA Canada  
• Former Communications Director – MISA Ontario  

He holds a diploma in Computer Science from Loyalist College.
      `,
    },
    {
      img: p3,
      name: "Andrew Kirsch",
      role: "Founder of Kirsch Consulting Group",
      details: `
Andrew Kirsch is the founder of Kirsch Consulting Group, a risk advisory firm focused on physical and information security programs.

His experience includes:
• Former Intelligence Officer – Canadian Security Intelligence Service (CSIS)  
• Founding member – Ontario Provincial Security Advisor Office  
• Designed security frameworks across public sector  

Additional roles:
• Former Corporal – Canadian Armed Forces (Reserves)  
• Volunteer – Toronto Police Community Liaison Committee  
• Chair – Holy Blossom Temple Security Committee  

He holds a Bachelor of Public Policy from Brown University.
      `,
    },
    {
      img: p4,
      name: "Dr. Muhammad Zubair",
      role: "Cyber Security Professional",
      details: `
Dr. Muhammad Zubair is a seasoned Cyber Security Professional with a proven track record in reducing cyber incidents by 40%. He has extensive experience in managing teams, conducting penetration tests, and implementing security policies aligned with ISO 27001 and NIST standards.

Experience:
• Cyber Security Manager at Apple France  
• Senior Cyber Security Analyst at Google Dallas  
• Cyber Security Consultant at IBM UK  

Dr. Zubair is passionate about empowering teams and fostering a culture of security vigilance.
      `,
    },
    {
      img: p5,
      name: "Saeed Ahmed",
      role: "Information Technology Expert",
      details: `
Saeed Ahmed is a skilled Information Technology Expert with over 10 years of experience in IT infrastructure, systems management, and enterprise software solutions.

He specializes in:
• IT strategy development  
• Cloud computing solutions  
• Network security and optimization  
• Data analysis and automation  

He has worked with major organizations to optimize their IT systems, ensure data security, and implement cutting-edge technologies to drive business growth.

Saeed is passionate about integrating new technologies to enhance efficiency and streamline operations.
      `,
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
          <span className="text-purple-500">Leadership</span>{" "}
          <span className="text-white">Team</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

          {team.map((member, index) => (
            <div
              key={index}
              className={`group ${member.details ? "cursor-pointer" : ""}`}
              onClick={() => member.details && setSelectedMember(member)}
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl mb-2 sm:mb-3 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-40 sm:h-52 md:h-60 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
                />

                {/* HOVER */}
                {member.details && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs sm:text-sm font-semibold transition">
                    View Profile
                  </div>
                )}
              </div>

              {/* LINE */}
              <div className="h-[2px] w-8 sm:w-10 bg-purple-500 mb-1 sm:mb-2"></div>

              {/* NAME */}
              <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-gray-400 text-[10px] sm:text-xs">
                {member.role}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-3 sm:px-4">

          <div className="bg-[#0c0c0c] border border-purple-500/30 rounded-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 relative shadow-[0_0_40px_rgba(168,85,247,0.3)] max-h-[90vh] overflow-y-auto">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-3 sm:top-3 sm:right-4 text-white text-lg sm:text-xl"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-3 sm:mb-4 border-2 border-purple-500"
            />

            {/* NAME */}
            <h3 className="text-lg sm:text-xl font-bold text-center text-white">
              {selectedMember.name}
            </h3>

            {/* ROLE */}
            <p className="text-purple-400 text-center text-xs sm:text-sm mb-3 sm:mb-4">
              {selectedMember.role}
            </p>

            {/* DETAILS */}
            <p className="text-white/70 text-xs sm:text-sm whitespace-pre-line leading-relaxed text-center">
              {selectedMember.details}
            </p>

          </div>
        </div>
      )}
    </section>
  );
}