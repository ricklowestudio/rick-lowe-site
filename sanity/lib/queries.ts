import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]`;

export const paintingsQuery = groq`*[_type == "paintings"]`;

export const aboutQuery = groq`*[_type == "about"]`;

export const media = groq`*[_type == "media"]`;

export const timeline = groq`*[_type == "timeline"]`;
