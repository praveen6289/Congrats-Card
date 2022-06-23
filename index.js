const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-college">
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
