import React, { useState } from "react";

const BASE_URL = "http://192.168.49.2:30002";

function App() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // 🔥 SAFE PARSER (handles array OR {data: []})
  const extractData = (response) => {
    return Array.isArray(response) ? response : response?.data || [];
  };

  // ================= USERS =================
  const loadUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/users`);
      const data = await res.json();

      const clean = extractData(data);
      console.log("Users:", clean);

      setUsers(clean);
    } catch (err) {
      console.error("Users error:", err);
    }
  };

  // ================= BOOKINGS =================
  const loadBookings = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/bookings`);
      const data = await res.json();

      const clean = extractData(data);
      console.log("Bookings:", clean);

      setBookings(clean);
    } catch (err) {
      console.error("Bookings error:", err);
    }
  };

  // ================= RECOMMENDATIONS =================
  const loadRecommendations = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/recommendations`);
      const data = await res.json();

      const clean = extractData(data);
      console.log("Recommendations:", clean);

      setRecommendations(clean);
    } catch (err) {
      console.error("Recommendations error:", err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Smart Wanderlust Dashboard</h1>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={loadUsers} style={{ marginRight: "10px" }}>
          Load Users
        </button>

        <button onClick={loadBookings} style={{ marginRight: "10px" }}>
          Load Bookings
        </button>

        <button onClick={loadRecommendations}>
          Load Recommendations
        </button>
      </div>

      {/* USERS */}
      <h2>Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {JSON.stringify(u)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users loaded</p>
      )}

      {/* BOOKINGS */}
      <h2>Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((b, i) => (
            <li key={i}>
              {JSON.stringify(b)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings loaded</p>
      )}

      {/* RECOMMENDATIONS */}
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((r, i) => (
            <li key={i}>
              {JSON.stringify(r)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations loaded</p>
      )}
    </div>
  );
}

export default App;
