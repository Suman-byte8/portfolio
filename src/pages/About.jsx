import React from "react";

const About = () => {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "ReactJs", icon: "⚛️" },
    { name: "NodeJs", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "📝" },
    { name: "REST APIs", icon: "🔗" },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-2 sm:px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-white tracking-light text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight min-w-52 sm:min-w-72">
                About Me
              </h1>
            </div>

            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              I'm a software engineer with a passion for building innovative solutions. With a background in computer science and several years of experience in the industry, I
              specialize in developing scalable and efficient applications. My expertise spans across various technologies, including Python, Java, and React, allowing me to tackle
              diverse challenges and deliver high-quality results.
            </p>

            <h3 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Skills
            </h3>
            <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 flex-wrap pr-2 sm:pr-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#303030] px-3 sm:px-4 mb-2"
                >
                  <span className="text-sm">{skill.icon}</span>
                  <p className="text-white text-sm font-medium leading-normal">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Experience
            </h3>
            {/* Experience Cards */}
            <div className="flex flex-col gap-4">
              {/* Next 24 Technology and Services */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 py-3">
                <div
                  className="text-white flex items-center justify-center rounded-lg bg-[#303030] shrink-0 size-10 sm:size-12 mb-2 sm:mb-0"
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-1 sm:gap-0">
                    <p className="text-white text-base font-medium leading-normal">Next 24 Technology and Services</p>
                    <p className="text-[#ababab] text-sm font-normal leading-normal">Aug 2024 - Sep 2024</p>
                  </div>
                  <p className="text-[#ababab] text-sm font-normal leading-normal mb-2">Web Developer Intern</p>
                  <ul className="text-[#ababab] text-sm font-normal leading-normal space-y-1">
                    <li>• Developed responsive web applications using React.js and Node.js</li>
                    <li>• Implemented RESTful APIs with Express.js for efficient data management</li>
                    <li>• Utilized MongoDB for scalable database solutions</li>
                    <li>• Collaborated with cross-functional teams using Agile methodologies</li>
                  </ul>
                </div>
              </div>

              {/* Cyborgwave */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 py-3">
                <div
                  className="text-white flex items-center justify-center rounded-lg bg-[#303030] shrink-0 size-10 sm:size-12 mb-2 sm:mb-0"
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-1 sm:gap-0">
                    <p className="text-white text-base font-medium leading-normal">Cyborgwave</p>
                    <p className="text-[#ababab] text-sm font-normal leading-normal">June 2024 - July 2024</p>
                  </div>
                  <p className="text-[#ababab] text-sm font-normal leading-normal mb-2">Web Developer Intern</p>
                  <ul className="text-[#ababab] text-sm font-normal leading-normal space-y-1">
                    <li>• Built dynamic user interfaces with React.js and modern CSS frameworks</li>
                    <li>• Integrated third-party APIs to enhance application functionality</li>
                    <li>• Optimized website performance and loading times</li>
                    <li>• Participated in code reviews and implemented best practices</li>
                  </ul>
                </div>
              </div>

              {/* Ardent Computech PVT LTD */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 py-3">
                <div
                  className="text-white flex items-center justify-center rounded-lg bg-[#303030] shrink-0 size-10 sm:size-12 mb-2 sm:mb-0"
                  data-icon="Briefcase"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-1 sm:gap-0">
                    <p className="text-white text-base font-medium leading-normal">Ardent Computech PVT LTD.</p>
                    <p className="text-[#ababab] text-sm font-normal leading-normal">Jun 2023 - Aug 2023</p>
                  </div>
                  <p className="text-[#ababab] text-sm font-normal leading-normal mb-2">Web Developer Intern</p>
                  <ul className="text-[#ababab] text-sm font-normal leading-normal space-y-1">
                    <li>• Assisted in full-stack development using the MERN (MongoDB, Express.js, React.js, Node.js) stack</li>
                    <li>• Implemented responsive designs using Bootstrap and custom CSS</li>
                    <li>• Collaborated with UX/UI designers to implement intuitive user interfaces</li>
                    <li>• Participated in daily stand-ups and sprint planning meetings</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 py-3">
              <div
                className="text-white flex items-center justify-center rounded-lg bg-[#303030] shrink-0 size-10 sm:size-12 mb-2 sm:mb-0"
                data-icon="GraduationCap"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">
                  State University
                </p>
                <p className="text-[#ababab] text-sm font-normal leading-normal">
                  Graduated with honors. Focused on software development and
                  algorithms.
                </p>
                <p className="text-[#ababab] text-sm font-normal leading-normal">
                  Bachelor of Science in Computer Science
                </p>
              </div>
            </div>
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Interests
            </h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Outside of coding, I enjoy hiking and exploring
              new technologies. I'm always eager to learn and stay updated with
              the latest trends in the tech industry.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
