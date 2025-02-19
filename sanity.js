import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "q2xksvp5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});