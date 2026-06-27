import { RestApiIcon } from "@/components/icons/skills/restful-api-icon";
import { GraphQLIcon } from "@/components/icons/skills/graphql-icon";
import { ExpressIcon } from "@/components/icons/skills/express-icon";
import {
    TypescriptIcon,
    ReactIcon,
    NextjsIcon,
    ViteIcon,
    OpenaiIcon,
    MongodbIcon,
    DockerIcon,
    VercelIcon,
    StripeIcon,
    PythonIcon,
    FastAPIIcon,
    DataScienceIcon,
    AnalyticsIcon,
    SqlIcon,
    BlenderIcon
} from "./icons";
import type { Skill } from "./types";

// Flattened skills data for grid layout
export const skillsData: Skill[] = [
    // Row 1
    { name: "Python", icon: <PythonIcon className="w-12 h-12" /> },
    { name: "Data Science", icon: <DataScienceIcon className="w-12 h-12" /> },
    { name: "Analytics", icon: <AnalyticsIcon className="w-12 h-12" /> },
    { name: "OpenAI API", icon: <OpenaiIcon className="w-12 h-12" /> },
    { name: "RestFul API", icon: <RestApiIcon className="w-12 h-12" /> },
    { name: "GraphQL", icon: <GraphQLIcon className="w-12 h-12" /> },
    // Row 2
    { name: "FastAPI", icon: <FastAPIIcon className="w-12 h-12" /> },
    { name: "TypeScript", icon: <TypescriptIcon className="w-12 h-12" /> },
    { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
    { name: "Next.js", icon: <NextjsIcon className="w-12 h-12" /> },
    { name: "Vite", icon: <ViteIcon className="w-12 h-12" /> },
    { name: "Express", icon: <ExpressIcon className="w-12 h-12" /> },
    // { name: "PostgreSQL", icon: <PostgresqlIcon className="w-12 h-12" /> },
    // { name: "Prisma", icon: <PrismaIcon className="w-12 h-12" /> },
    // Row 3
    { name: "MongoDB", icon: <MongodbIcon className="w-12 h-12" /> },
    // { name: "Pinecone", icon: <PineconeIcon className="w-12 h-12" /> },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
    { name: "Vercel", icon: <VercelIcon className="w-12 h-12" /> },
    { name: "Stripe", icon: <StripeIcon className="w-12 h-12" /> },
    { name: "SQL", icon: <SqlIcon className="w-12 h-12" /> },
    { name: "Blender", icon: <BlenderIcon className="w-12 h-12" /> },
    // { name: "Clerk", icon: <ClerkIcon className="w-12 h-12" /> },
];