import { portfolioData } from "./portfolio";

export const siteUrl = new URL(
  process.env.SITE_URL || "https://0xfaysal.github.io/",
).origin + "/";

export const profileTitle = `${portfolioData.name} | Frontend Developer in Dhaka`;
export const profileDescription =
  "Portfolio of Faysal Ahmed Fahim (0xFaysal), a frontend developer in Dhaka working with React, Next.js, and TypeScript. Explore ParkEase BD, HelioBay, and UNO-Mates.";
