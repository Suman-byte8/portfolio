import React from "react";

const Works = () => {
  const projects = {
    featured: [
      {
        title: "A Real Time Cab Booking System",
        tech: "JavaScript, React, Tailwind, Express, MongoDB",
        description:
          "Developing a real-time ride-booking web application using React.js, Node.js, Express.js, and MongoDB. Integrating socket-based live driver-customer matching system using Socket.IO. Implementing dynamic fare calculation based on distance and duration using external APIs.",
        image:
          "https://images.unsplash.com/photo-1612867754336-c45d074c4f8e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Voting System",
        tech: "JavaScript, React, Node.js, MongoDB",
        description:
          "A secure voting system that allows users to create and participate in polls. It includes features like user authentication, real-time updates, and results visualization.",
        image:
          "https://plus.unsplash.com/premium_photo-1663126272118-1df214328644?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    other: [
      {
        title: "Blog Platform",
        description:
          "A personal blog built with Next.js, featuring markdown support, comments, and user authentication.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzdoz784Ud4IL9fYSrIRwygMd4HhLdNjBPGYYkCTfTePkUIIBcWW6J0vMf5hhxdeGgbyeFRHKTYxKtNkMBhomH4ZX_LbhuzzTRLo8HuqmBy93XEBua8NGdEdkh9lKm8wiGmcdZFj9H1Naett2xDlTI3kObi8NH0jrE3MFCoJDAqDfxBjY2-Rdl7yieidAl_VyEu0np6vujaQZzxgylcSGYpiCC3W3hbsVJZ02v4a1YrNt_XJ6esT0j4Gg-5rk6KiszNn2sRBq7tI",
      },
      {
        title: "Task Management App",
        description:
          "A simple task management application built with React and Firebase, allowing users to create, update, and delete tasks.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ESKziNB7833fqiEPLSwUAiQ_xzeo2SZLjXlEUMWefBerE7s-_vE0tQitO9MaFKveo53onaVjejDlV3OCpz8hi5HBZB1V3AnQEv9co5zVbq_DFzAECYX_ays_6vY-xl-HXYS5OaD66mw8SoQAHwq_wlcHW7V5BEVxbAz8hmpcN1jZ8d9MSZHrlsb0PoQH18Yn_dWnRUP5G2N5QctTJ1blOtLcj3mQVzSLkKp1XJpie-iC27fAPPWadLO8E9rsIQYKD6bc31BbS80",
      },
      {
        title: "Portfolio Website",
        description:
          "The very website you're currently browsing, built with React and showcasing my projects and skills.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDkZvnJnYaW4O_N93qtzAyo70Q1QQ_6MIVQSGtl9uvnrvYxs6vlfnKPjPWMoAcxaOnpTtV8oOj77BzPqZaHZH8-qrxHAoiFX6roy3YnbguudJqTVQ3efcYmhhUzKkfvEVCrB_lKKVs-yZxf2jKFrPgkM4ljaNv0AyPLPd3D8RlBzlyNdmhqE9Po3D0x3t2-97RstTmnVfqVDndG50gEzaHO68djHnx0mFGEFgtcOEEStefDZiFdlMHTtcYnUmeBk973z6naaIzdhOE",
      },
    ],
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col  dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Works
                </h1>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">
                  A selection of projects I've worked on, showcasing my skills
                  and experience.
                </p>
              </div>
            </div>

            {/* Featured Projects */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Projects
            </h2>
            {projects.featured.map((project, index) => (
              <div key={index} className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                  <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                    <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                      {project.title}
                    </p>
                    <div className="flex items-end gap-3 justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#9cabba] text-base font-normal leading-normal">
                          {project.tech}
                        </p>
                        <p className="text-[#9cabba] text-sm font-normal leading-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Other Projects */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Other Projects
            </h2>
            {projects.other.map((project, index) => (
              <div key={index} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-white text-base font-bold leading-tight">
                      {project.title}
                    </p>
                    <p className="text-[#9cabba] text-sm font-normal leading-normal">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Works;
