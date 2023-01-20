const API_URL = import.meta.env.VITE_API_URL;

export async function createProfile(data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getAllProfiles() {
  try {
    const res = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getUserProfile(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
