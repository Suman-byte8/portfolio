import { PythonIcon } from "@/components/icons/skills/python-icon";
import { FastAPIIcon } from "@/components/icons/skills/fast-api-icon";
import { DataScienceIcon } from "@/components/icons/skills/data-science-icon";
import type { CaseStudyData } from "../types";

export const fifaPredictorData: CaseStudyData = {
    projectData: {
        slug: "fifa-predictor",
        title: "FIFA World Cup Predictor",
        description: "AI/ML prediction model | Data Science | Python & FastAPI",
        sections: [
            {
                title: "Problem",
                items: [
                    "• Need for accurate match outcome predictions",
                    "• Handling large volumes of historical data"
                ]
            },
            {
                title: "Solution",
                items: [
                    "• Developed a machine learning prediction model",
                    "• Built a scalable FastAPI backend",
                    "• Integrated comprehensive data analysis"
                ]
            },
            {
                title: "Impact",
                items: [
                    "• High accuracy in match predictions",
                    "• Scalable architecture for future tournaments"
                ]
            }
        ],
        buttons: {
            githubUrl: "https://github.com/Suman-byte8/FIFA_WorldCup2026_Predictor",
            domainUrl: "https://fifa-world-cup2026-predictor.vercel.app",
            detailPath: "/case-studies/fifa-predictor"
        }
    },
    techStack: [
        { icon: <PythonIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "Python" },
        { icon: <FastAPIIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10" />, name: "FastAPI" },
        { icon: <DataScienceIcon className="[@media(min-width:1390px)]:w-12 [@media(min-width:1390px)]:h-12 w-10 h-10 text-white" />, name: "Data Science" }
    ]
};
