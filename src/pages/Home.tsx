const Home = () => {
  return (
    <main className="main">
      <h2 className="textCenter">Blood Group Compatibility Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Can Donate To</th>
            <th>Can Receive From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A+</td>
            <td>A+ & AB+</td>
            <td>A+, A-, O+, & O-</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>A+ & AB+</td>
            <td>A- & O-</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>B+ & AB+</td>
            <td>B+, B-, O+, & O-</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>B+ & AB+</td>
            <td>B- & O-</td>
          </tr>
          <tr>
            <td>AB+</td>
            <td>Universal Recipient (Everyone)</td>
            <td>A+, A-, B+, B-, AB+, & AB-</td>
          </tr>
          <tr>
            <td>AB-</td>
            <td>AB+ & AB-</td>
            <td>A-, B-, & O-</td>
          </tr>
          <tr>
            <td>O+</td>
            <td>A+, B+, AB+, & O+</td>
            <td>O+ & O-</td>
          </tr>
          <tr>
            <td>O-</td>
            <td>Universal Donor (Everyone)</td>
            <td>O-</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Home;
