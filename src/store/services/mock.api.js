const URL = "http://localhost:5000/data";

export const getUsersData = async () => {
  const response = await fetch(URL);
  const result  = await response.json();
  return result;
} 