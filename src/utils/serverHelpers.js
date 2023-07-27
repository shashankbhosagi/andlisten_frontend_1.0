import { backendURL } from "./config";

export const makeUnaunthenticatedPOSTRequest = async (route, body) => {
  const response = await fetch(backendURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};
