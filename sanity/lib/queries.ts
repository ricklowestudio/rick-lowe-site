import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]`;

export const paintingsQuery = groq`*[_type == "paintings"]`;

export const aboutQuery = groq`*[_type == "about"]`;

export const mediaQuery = groq`*[_type == "media"]`;

export const timelineQuery = groq`*[_type == "timeline"] | order(startPeriod asc)`;
