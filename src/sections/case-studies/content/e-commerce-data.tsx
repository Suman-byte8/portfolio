import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import { ExpressIcon } from "@/components/icons/skills/express-icon";
import { ReactIcon } from "@/components/icons/skills/react-icon";
import { JavascriptIcon } from "@/components/icons/skills/javascript-icon";
import type { CaseStudyData } from "../types";

export const ecommerceData: CaseStudyData = {
    projectData: {
        slug: "ecommerce-platform",
        title: "Sayan Digital Store",
        description: "Full-stack E-commerce platform | MERN stack | Redux Toolkit",
        sections: [
            {
                title: "Problem",
                items: [
                    "• Difficulty in managing online inventory",
                    "• Lack of a secure and seamless checkout process"
                ]
            },
            {
                title: "Solution",
                items: [
                    "• Comprehensive product management system",
                    "• Integrated secure payment gateway",
                    "• User-friendly shopping cart and checkout"
                ]
            },
            {
                title: "Impact",
                items: [
                    "• Streamlined online sales process",
                    "• Improved customer shopping experience"
                ]
            }
        ],
        buttons: {
            githubUrl: "https://github.com/Suman-byte8/E-commerce-Client",
            domainUrl: "https://sayandigitalstore.netlify.app",
            detailPath: "/case-studies/ecommerce-platform"
        }
    },
    techStack: [
        { icon: <MongodbIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "MongoDB" },
        { icon: <ExpressIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Express" },
        { icon: <ReactIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "React" },
        { icon: <JavascriptIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Node.js" }
    ]
};
