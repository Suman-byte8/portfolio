import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import { ExpressIcon } from "@/components/icons/skills/express-icon";
import { ReactIcon } from "@/components/icons/skills/react-icon";
import { JavascriptIcon } from "@/components/icons/skills/javascript-icon";
import type { CaseStudyData } from "../types";

export const silverArcadePremierData: CaseStudyData = {
  projectData: {
    slug: "advertising-platform",
    title: "Hotel Silver Arcade Premier",
    description: "Built in 3 months | Full admin panel | MERN stack",
    sections: [
      {
        title: "Problem",
        items: [
          "• Manual reservation management",
          "• Lack of dynamic data handling"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Full admin panel for management",
          "• Dynamic data handling for reservations",
          "• Comprehensive booking system"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Improved efficiency in hotel operations",
          "• Enhanced reservation and booking management"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/Suman-byte8/silver-arcade-premier-client",
      detailPath: "/case-studies/advertising-platform"
    }
  },
  techStack: [
    { icon: <MongodbIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MongoDB" },
    { icon: <ExpressIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Express" },
    { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React" },
    { icon: <JavascriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Node.js" }
  ]
};
