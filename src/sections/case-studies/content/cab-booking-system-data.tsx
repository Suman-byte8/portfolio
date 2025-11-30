import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import { ExpressIcon } from "@/components/icons/skills/express-icon";
import { ReactIcon } from "@/components/icons/skills/react-icon";
// import { NodejsIcon } from "@/components/icons/skills/node-js-icon";
// import { SocketioIcon } from "@/components/icons/skills/socket-io-icon";
// import { GsapIcon } from "@/components/icons/skills/gsap-icon";
import type { CaseStudyData } from "../types";

export const cabBookingSystemData: CaseStudyData = {
  projectData: {
    slug: "design-platform",
    title: "Online Cab Booking System",
    description: "Built in 4 months | Backend architecture | MERN stack with Socket.io and GSAP",
    sections: [
      {
        title: "Problem",
        items: [
          "• Inefficient ride booking processes",
          "• Lack of emergency safety features"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Online booking system with real-time updates",
          "• Emergency button integrated with WhatsApp API",
          "• Emergency contact saving functionality"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Enhanced user safety and convenience",
          "• Improved ride booking experience"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/Suman-byte8/Online-Cab-booking-System",
      detailPath: "/case-studies/design-platform"
    }
  },
  techStack: [
    { icon: <MongodbIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MongoDB" },
    { icon: <ExpressIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Express" },
    { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React" },
    // { icon: <JavascriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Node.js" },
    // { icon: <JavascriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Socket.io" },
    // { icon: <JavascriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "GSAP" }
  ]
};
