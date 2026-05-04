import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [booking, setBooking] = useState("");
  const [recommend, setRecommend] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch {
      setUser("Error fetching users");
    }
    setLoading(false);
  };

  const getBooking = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/booking");
      setBooking(res.data);
    } catch {
      setBooking("Error fetching booking");
    }
    setLoading(false);
  };

  const getRecommend = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/recommend");
      setRecommend(JSON.stringify(res.data));
    } catch {
      setRecommend("Error fetching recommendations");
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Wanderlust 🌍</h1>

      {loading && <p>Loading...</p>}

      <div>
        <button onClick={getUsers}>Load Users</button>
        <p>{user}</p>
      </div>

      <div>
        <button onClick={getBooking}>Load Booking</button>
        <p>{booking}</p>
      </div>

      <div>
        <button onClick={getRecommend}>Get Recommendations</button>
        <p>{recommend}</p>
      </div>
    </div>
  );
}

export default App;
