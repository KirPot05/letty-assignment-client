import { useState } from "react";
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import Search from "./components/Search";
import { getAllProfiles } from "./services";

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false);
  const [userId, setUserId] = useState("");

  const fetchProfiles = async () => {
    try {
      const profiles = await getAllProfiles();
      setUserProfiles(profiles.response);
    } catch (err) {
      alert(err?.message);
    }
  };

  return (
    <div className="container p-3 d-flex gap-5 flex-column justify-content-center">
      <div>
        <button
          className="mx-2 btn btn-primary"
          onClick={() => setShowProfiles(false)}
        >
          {" "}
          Create Profile
        </button>
        <button
          className="mx-2 btn btn-primary"
          onClick={() => setShowProfiles(true)}
        >
          Show Profiles
        </button>
      </div>

      <div className="d-flex gap-4 align-items-center">
        {showProfiles ? (
          <div>
            {userProfiles?.length === 0 && (
              <button className="btn btn-primary" onClick={fetchProfiles}>
                {" "}
                Get User Profiles{" "}
              </button>
            )}
            <ListUsers userProfiles={userProfiles} />
          </div>
        ) : (
          <Form
            setUserProfile={setUserProfiles}
            setShowProfile={setShowProfiles}
          />
        )}

        {showProfiles && userProfiles.length > 0 && (
          <Search
            userId={userId}
            setUserId={setUserId}
            setUserProfile={setUserProfiles}
            setShowProfile={setShowProfiles}
          />
        )}
      </div>
    </div>
  );
}

export default App;
