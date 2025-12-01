
import { ReactIcon } from "@/components/icons/skills/react-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";

import { ViteIcon } from "@/components/icons/skills/vite-icon";

import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import { DockerIcon } from "@/components/icons/skills/docker-icon";
import { VercelIcon } from "@/components/icons/skills/vercel-icon";
import { StripeIcon } from "@/components/icons/skills/stripe-icon";

import type { Skill } from "./types";
import { JavascriptIcon } from "@/components/icons/skills/javascript-icon";
import { ExpressIcon } from "@/components/icons/skills/express-icon";
import { SolidityIcon } from "@/components/icons/skills/solidity-icon";
import { GraphQLIcon } from "@/components/icons/skills/graphql-icon";
import { PhotoshopIcon } from "@/components/icons/skills/photoshop-icon";
import { BlenderIcon } from "@/components/icons/skills/blender-icon";
import { RestApiIcon } from "@/components/icons/skills/restful-api-icon";

export const skillRows: Skill[][] = [
  [
    // { icon: <PythonIcon className="w-6 h-6" />, name: "Python" },
    // { icon: <TypescriptIcon className="w-6 h-6" />, name: "TypeScript" },
    { icon: <JavascriptIcon className="w-6 h-6" />, name: "JavaScript" },
    { icon: <ReactIcon className="w-6 h-6" />, name: "React" },
    { icon: <NextjsIcon className="w-6 h-6" />, name: "Next.js" },
    { icon: <GraphQLIcon className="w-6 h-6" />, name: "GraphQL API" },
    { icon: <RestApiIcon className="w-6 h-6" />, name: "Rest API" },
    { icon: <ViteIcon className="w-6 h-6" />, name: "Vite" },
    { icon: <ExpressIcon className="w-6 h-6" />, name: "ExpressJs" },

  ],
  [
    { icon: <PhotoshopIcon className="w-6 h-6" />, name: "Photoshop" },
    { icon: <BlenderIcon className="w-6 h-6" />, name: "Blender" },
    //   { icon: <LangchainIcon className="w-6 h-6" />, name: "LangChain" },
    //   { icon: <OpenaiIcon className="w-6 h-6" />, name: "OpenAI API" },
    //   { icon: <HuggingFaceIcon className="w-6 h-6" />, name: "Hugging Face" },
    //   { icon: <OpencvIcon className="w-6 h-6" />, name: "OpenCV" },
    //   { icon: <PineconeIcon className="w-6 h-6" />, name: "Pinecone" },
    //   { icon: <PrismaIcon className="w-6 h-6" />, name: "Prisma" },
  ],
  [
    // { icon: <PostgresqlIcon className="w-6 h-6" />, name: "PostgreSQL" },
    { icon: <MongodbIcon className="w-6 h-6" />, name: "MongoDB" },
    { icon: <DockerIcon className="w-6 h-6" />, name: "Docker" },
    { icon: <VercelIcon className="w-6 h-6" />, name: "Vercel" },
    { icon: <StripeIcon className="w-6 h-6" />, name: "Stripe" },
    { icon: <SolidityIcon className="w-6 h-6" />, name: "Solidity" },

    // { icon: <ClerkIcon className="w-6 h-6" />, name: "Clerk" },
  ],
];
