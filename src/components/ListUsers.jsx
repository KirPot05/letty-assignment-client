function ListUsers({ userProfiles }) {
  return userProfiles?.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sl. No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>

      <tbody>
        {console.log(userProfiles)}
        {userProfiles.map(({ _id, firstName, lastName, email, phone }, idx) => (
          <tr key={_id}>
            <td>{idx + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div style={{ minHeight: "400px" }}>
      <h3> No profiles found! </h3>
    </div>
  );
}

export default ListUsers;
