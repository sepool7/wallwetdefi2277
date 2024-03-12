import "./Create-nft.css";
import { useState } from "react";
function createNFT() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // Function to handle files being dropped into the drop zone
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };
  // Function to handle files being selected through the file input element
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = event.target.files;
      handleFiles(files);
    }
  };

  // Function to handle the selected files
  const handleFiles = (files: FileList) => {
    // Convert the FileList object to an array
    const fileList = Array.from(files);
    // Update the selected files state
    setSelectedFiles(fileList);
  };

  // Function to prevent the default behavior for drop events
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="creat-new-NFT" style={{ display: "flex" }}>
      <div
        className="creat-new-NFT-content"
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <>
          <div className="create-new-NFT-box1">
            <div className="new-NFT-box1-header">Create New NFT</div>
            <div className="new-NFT-box1-paragraph">
              You can set preferred display name, creat your profile URL and
              manage other personal settings
              <hr />
            </div>
          </div>
          <div className="create-new-NFT-box2">
            <div className="new-NFT-box2-header">
              Image, Video, Audio, or 3D Model
            </div>
            <div className="new-NFT-box2-paragraph">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WVA,
              OGG, GLB, GLFT, Max Size: 100MB
              <hr />
            </div>
          </div>
        </>
        <>
          <div
            className="create-new-NFT-box3"
            style={{ display: "flex", flexDirection: "column", gap: 30 }}
          >
            <div
              className="drop-zone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: 20,
                  flexGrow: 1,
                }}
              >
                <label
                  htmlFor="fileInput"
                  className="create-new-NFT-box3-drop-zone-lable"
                >
                  Drag and drop files here
                </label>
                <label
                  htmlFor="fileInput"
                  className="create-new-NFT-box3-drop-zone-lable-symbol"
                >
                  <span className="material-symbols-outlined drop-zone-lable-symbol">
                    upload
                  </span>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                ></input>
              </div>
            </div>
            <button
              className="create-new-NFT-box3-button"
              onClick={() => {
                const fileInput = document.getElementById("fileInput");
                if (fileInput) fileInput.click();
              }}
            >
              Browse Files
            </button>

            <div
              className="file-list"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                className="create-new-NFT-box3-selected-files"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Selected Files:
              </h2>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
        <>
          <div className="create-new-NFT-box4">
            <form action="">
              <div
                className="create-new-NFT-box4-form-content"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                <label
                  htmlFor="item-name"
                  className="create-new-NFT-box4-form-content-item-name-lable"
                >
                  Item Name{" "}
                </label>

                <input
                  className=" create-new-NFT-box4-form-content-item-name-input"
                  type="text"
                  id="item-name"
                  placeholder=" Username "
                />
                <br />
              </div>
              <div
                className="create-new-NFT-box4-form-content"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                <label
                  htmlFor="website"
                  className="create-new-NFT-box4-form-content-website-lable"
                >
                  Website{" "}
                </label>

                <input
                  className=" create-new-NFT-box4-form-content-website-input"
                  type="url"
                  id="website"
                  placeholder=" website "
                />
                <br />
                <div className="create-new-NFT-box4-paragraph">
                  Ciscrypt will include a link to this URL on this item's detail
                  page
                </div>
                <br />
              </div>
              <div
                className="create-new-NFT-box4-form-content"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                <label
                  htmlFor="description"
                  className="create-new-NFT-box4-form-content-description-lable"
                >
                  Description{" "}
                </label>
                <input
                  className=" create-new-NFT-box4-form-content-description-input"
                  type="text"
                  id="description"
                  placeholder=" something about yourself in few words "
                />
                <br />
                <div className="create-new-NFT-box4-paragraph">
                  The description will be included on the item's detail page
                </div>
                <br />
              </div>
            </form>
            <>
              <div className="create-new-NFT-box5">
                <div className="create-new-NFT-box5-header">
                  Choose collection
                </div>

                <div
                  className="create-new-NFT-box5-card"
                  style={{ display: "flex" }}
                >
                  <div className="card create-new-NFT-box5-card-line">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1262/format:webp/1*tEFCnk5I-AF67prNq-UdPg.png"
                      alt="Profile 1"
                      className="create-new-NFT-box5-card-profile-img"
                    />
                    <div className="create-new-NFT-box5-card-profile-content">
                      <div className="create-new-NFT-box5-card-profile-tick">
                        &#10003;
                      </div>
                      <div className="create-new-NFT-box5-card-profile-text">
                        Text for card 1
                      </div>
                    </div>
                  </div>
                  <div className="card create-new-NFT-box5-card-line">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1262/format:webp/1*tEFCnk5I-AF67prNq-UdPg.png"
                      alt="Profile 2"
                      className="create-new-NFT-box5-card-profile-img"
                    />
                    <div className="create-new-NFT-box5-card-profile-content">
                      <div className="create-new-NFT-box5-card-profile-tick">
                        &#10003;
                      </div>
                      <div className="create-new-NFT-box5-card-profile-text">
                        Text for card 2
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="create-new-NFT-box5-card-info"
                  style={{ display: "flex" }}
                >
                  <form
                    action=""
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexGrow: 1,
                      gap: "20px",
                    }}
                  >
                    <div
                      className="royalties"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <label
                        htmlFor="royalties"
                        className="create-new-NFT-box5-form-content-royalties-lable"
                      >
                        Royalties{" "}
                      </label>

                      <input
                        className=" create-new-NFT-box5-form-content-royalties-input"
                        type="text"
                        id="royalties"
                      />
                    </div>
                    <div
                      className="network"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 3,
                      }}
                    >
                      <label
                        htmlFor="network"
                        className="create-new-NFT-box5-form-content-network-lable"
                      >
                        Network{" "}
                      </label>

                      <input
                        className=" create-new-NFT-box5-form-content-network-input"
                        type="text"
                        id="network"
                      />
                    </div>
                    <div
                      className="price"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 2,
                      }}
                    >
                      <label
                        htmlFor="price"
                        className="create-new-NFT-box5-form-content-price-lable"
                      >
                        Price{" "}
                      </label>

                      <input
                        className=" create-new-NFT-box5-form-content-price-input"
                        type="text"
                        id="price"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </>
            <>
              <div className="create-new-NFT-box6">
                <div
                  className="create-new-NFT-box6-button"
                  style={{ display: "flex" }}
                >
                  <button className="create-new-NFT-box6-button-mint">
                    Mint
                  </button>
                  <button className="create-new-NFT-box6-button-preview">
                    Preview
                  </button>
                </div>
              </div>
            </>
          </div>
        </>
      </div>
    </div>
  );
}
export default createNFT;
