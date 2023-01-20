import { getUserProfile } from "../services";
import CustomInput from "./CustomInput";

function Search({ userId, setUserId, setUserProfile, setShowProfile }) {
  const searchUser = async () => {
    try {
      const profile = await getUserProfile(userId);
      setShowProfile(true);
      setUserProfile([profile.response]);
    } catch (err) {
      alert(err?.message);
    }
  };

  return (
    <div>
      <CustomInput
        isRequired={true}
        value={userId}
        setField={setUserId}
        classNames="my-1 bg-white"
        placeholder="Enter user ID to search"
      />
      <button className="mx-2 btn btn-primary" onClick={searchUser}>
        {" "}
        Search Profile{" "}
      </button>
    </div>
  );
}

export default Search;
