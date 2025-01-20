import React from "react";

const PortfolioSection = () => {
  const works = [
    {
      id: 1,
      category: "Network Security",
      title: "Enterprise Firewall Implementation",
      description:
        "Successfully implemented a next-generation firewall solution for a Fortune 500 company, protecting their infrastructure from advanced cyber threats.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
      personImage: "https://randomuser.me/api/portraits/men/1.jpg",
      personName: "Michael Chen",
      personCompany: "Security Lead",
    },
    {
      id: 2,
      category: "Compliance",
      title: "GDPR Implementation",
      description:
        "Guided a global e-commerce platform through complete GDPR compliance, implementing data protection measures and privacy controls.",
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800",
      personImage: "https://randomuser.me/api/portraits/women/2.jpg",
      personName: "Sarah Miller",
      personCompany: "Compliance Director",
      reverse: true,
    },
    {
      id: 3,
      category: "Incident Response",
      title: "Ransomware Recovery",
      description:
        "Successfully led incident response and system recovery for a healthcare provider affected by a critical ransomware attack.",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800",
      personImage: "https://randomuser.me/api/portraits/men/3.jpg",
      personName: "David Wilson",
      personCompany: "IR Team Lead",
    },
    {
      id: 4,
      category: "Cloud Security",
      title: "AWS Security Architecture",
      description:
        "Designed and implemented comprehensive cloud security architecture for a fintech startup's AWS infrastructure.",
      imageUrl: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?auto=format&fit=crop&w=800",
      personImage: "https://randomuser.me/api/portraits/women/4.jpg",
      personName: "Emily Zhang",
      personCompany: "Cloud Security Architect",
      reverse: true,
    },
    {
      id: 5,
      category: "Security Assessment",
      title: "Penetration Testing",
      description:
        "Conducted thorough penetration testing and vulnerability assessment for a major banking application.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
      personImage: "https://randomuser.me/api/portraits/men/5.jpg",
      personName: "Alex Thompson",
      personCompany: "Security Analyst",
    },
    {
      id: 6,
      category: "Security Training",
      title: "Employee Security Program",
      description:
        "Developed and implemented a comprehensive security awareness training program for 10,000+ employees.",
      imageUrl: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=",
      personImage: "https://randomuser.me/api/portraits/women/6.jpg",
      personName: "Rachel Adams",
      personCompany: "Training Director",
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#F3F3F3] py-20 px-4 sm:px-30 md:px-56 lg:px-80">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-[#333333]">Success Stories</h2>
      </div>
      <div className="container mx-auto">
        {works.map((work) => (
          <div key={work.id} className="mb-4">
            <div
              className={`flex ${work.reverse ? "flex-row-reverse" : ""} no-gutters  align-items-center`}
            >
              <div
                className="w-full md:w-1/2 h-90 bg-cover bg-center"
                style={{ backgroundImage: `url(${work.imageUrl})` }}
              ></div>
              <div className="w-full md:w-1/2 px-4 py-5 lg:py-12 lg:px-8">
                <div className={`text ${work.reverse ? "text-right" : ""}`}>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-600 uppercase">
                      {work.category}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">
                      <a href="work.html">{work.title}</a>
                    </h2>
                  </div>
                  <p className="mb-6">{work.description}</p>
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${work.personImage})` }}
                    ></div>
                    <div className="pl-3">
                      <h4 className="text-lg font-bold mb-0">{work.personName}</h4>
                      <span>{work.personCompany}</span>
                    </div>
                  </div>
                  <p>
                    <a
                      href="#"
                      className="inline-block text-sm tracking-wider text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded transition duration-300"
                    >
                      VIEW PORTFOLIO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
