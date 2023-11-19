async function fetchData() {
  try {
    const response = await fetch("./data/DATA.json ");
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchData ;