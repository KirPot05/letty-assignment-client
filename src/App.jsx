import { useState } from "react";

function App() {
  const [userProfiles, setUserProfiles] = useState([]);

  return (
    <main>
      <div>
        <button className="mx-2 btn btn-primary"> Create Profile</button>
        <button className="mx-2 btn btn-primary">Fetch Users</button>
      </div>
    </main>
  );
}

export default App;
