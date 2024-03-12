import "./Page-1.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function homePage1() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const distanceToBottom =
        document.documentElement.offsetHeight -
        window.innerHeight -
        window.scrollY;

      if (distanceToBottom <= 0) {
        // Smooth scroll to the next page
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth", // Enable smooth scrolling
        });
        // Navigate to the next page
        navigate("/HomePage2");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);
  // Handle scrolling up to go back to the previous page
  useEffect(() => {
    const handleScrollUp = (event: WheelEvent) => {
      // Check if the user scrolls up
      if (event.deltaY < 0) {
        // Navigate to the previous page
        navigate(-1);
      }
    };

    window.addEventListener("wheel", handleScrollUp);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleScrollUp);
    };
  }, [navigate]);

  const handleLogin = () => {
    // Handle login logic here
    // Redirect to another page after successful login
    navigate("/LoginClick");
  };
  const handlecreate = () => {
    // Handle login logic here
    // Redirect to another page after successful login
    navigate("/CreateNFT");
  };

  return (
    <div
      className="main-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/********************* MAIN CONTAINER LEFT ************************************/}
      <div
        className="main-container-left"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/********************* LOGO + SEARCH BAR ************************************/}
        <div
          className="top-navbar-box-left-bar"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="top-navbar-box-left-bar-logo">
            <span className="material-symbols-outlined widgets">widgets</span>
          </div>

          <div
            className="top-navbar-box-left-bar-search-bar"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <input
              className="top-navbar-box-left-bar-search-bar-input"
              type="search"
              placeholder="Search"
            />
            <button className="top-navbar-box-left-bar-search-bar-button">
              <span className="material-symbols-outlined top-navbar-box-left-bar-search-bar-button-symbol">
                search
              </span>
            </button>
          </div>
        </div>
        {/********** CONTENT LEFT BOX **************/}

        <div
          className="content-left-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="content-left-box-header" style={{ display: "flex" }}>
            <div className="content-left-box-header-text">
              <span className="content-left-box-header-text-1">Laqira </span>{" "}
              <span className="content-left-box-header-text-2">Farming </span>
              <span className="content-left-box-header-text-3">Portal </span>
            </div>
            <img
              className="content-left-box-header-symbol"
              src="https://raw.githubusercontent.com/hastiatarod/imgfilehost/ed31fe99b0c4c8dff20004d7f2255f17d05b9eda/portal-svgrepo-com.svg"
            />
          </div>
          <div className="content-left-box-paraghraph">
            Discover the farming tasks to claim more rewards.
          </div>
          <button className="content-left-box-button">
            {" "}
            Start your search
          </button>
        </div>
      </div>
      {/********************* END OF MAIN CONTAINER LEFT ************************************/}
      {/******************************************************************************/}
      {/********************* MAIN CONTAINER RIGHT ************************************/}
      <div
        className="main-container-right"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/********************* MENU BAR TOP RIGHT ************************************/}
        <div
          className="top-navbar-box-right-bar"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="top-navbar-box-right-bar-discover">
            <button className="top-navbar-box-right-bar-discover-button">
              Discover
            </button>
          </div>
          <div className="top-navbar-box-right-bar-help">
            <button className="top-navbar-box-right-bar-help-button">
              Help Center
            </button>
          </div>

          <button className="top-navbar-box-right-bar-notification-button">
            <span className="material-symbols-outlined top-navbar-box-right-bar-notification-symbol">
              notifications
            </span>
          </button>

          <div className="top-navbar-box-right-bar-creat">
            <button
              onClick={handlecreate}
              className="top-navbar-box-right-bar-creat-button"
            >
              Create
            </button>
          </div>
          <div className="top-navbar-box-right-bar-login">
            <button
              onClick={handleLogin}
              className="top-navbar-box-right-bar-login-button"
            >
              <div className="top-navbar-box-right-bar-login-button-text ">
                Login
              </div>
              <span
                className=" material-symbols-outlined top-navbar-box-right-bar-login-button-symbol "
                style={{
                  fontVariationSettings:
                    "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              ></span>
            </button>
          </div>
          {/*AFTER LOGIN SWITCH TO PROFILE IMG :
          <div className="top-navbar-box-right-bar-profilePic">
            <img
              src=" https://raw.githubusercontent.com/hastiatarod/imgfilehost/269f0401235d7c9d487f9da054c18be17b3963a5/undraw_female_avatar_efig.svg"
              alt=""
              className="top-navbar-box-right-bar-profilePic-img"
              style={{ width: "56.33px", height: "56.33px" }}
            />
    </div>*/}
        </div>

        {/********** CONTENT RIGHT BOX **************/}

        <div
          className="content-right-box"
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <div
            className="content-right-box-card-box"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <div className="card" style={{ width: "250px", height: "200px" }}>
              <img
                src=" https://github.com/hastiatarod/imgfilehost/blob/main/car1.jpg?raw=true"
                alt=""
                className="card-1"
                style={{
                  width: "247px",
                  height: "197px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card" style={{ width: "250px", height: "350px" }}>
              <img
                src=" https://github.com/hastiatarod/imgfilehost/blob/main/car1.jpg?raw=true"
                alt=""
                className="card-2"
                style={{
                  width: "247px",
                  height: "347px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="card" style={{ width: "250px", height: "450px" }}>
            <img
              src=" https://github.com/hastiatarod/imgfilehost/blob/main/car1.jpg?raw=true"
              alt=""
              className="card-3"
              style={{ width: "247px", height: "447px", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      {/********************* END OF MAIN CONTAINER RIGHT ************************************/}
    </div>
  );
}
export default homePage1;
