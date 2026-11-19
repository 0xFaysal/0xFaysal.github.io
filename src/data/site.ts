import { portfolioData } from "./portfolio";

export const siteUrl = new URL(
  process.env.SITE_URL || "https://0xfaysal.github.io/",
).origin + "/";

export const profileTitle = `${portfolioData.name} | ${portfolioData.title} in Dhaka`;
export const profileDescription =
  "Faysal Ahmed Fahim (0xFaysal) is a full-stack developer in Dhaka working with Next.js, TypeScript, Node.js, and PostgreSQL. Explore ParkEase BD, HelioBay, and UNO-Mates.";
