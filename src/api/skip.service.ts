const SKIP_BY_LOCATION_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export async function fetchSkipsByLocation() {
    const response = await fetch(SKIP_BY_LOCATION_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch skips by location");
    }
    return response.json();
}
