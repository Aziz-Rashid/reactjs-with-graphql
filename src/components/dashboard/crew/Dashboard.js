import React from 'react'
import "../../../assets/styles/custom/components/dashboard/Crew.scss";
const Dashboard = () => {
  return (
    <div>
        <div className="category-title">Dashboard</div>
        <div className="crew-dashboard-container">
          <div className="crew-dashboard-left">
            <div className="fleet-title">A320 Fleet</div>
            <div className="fleet-profile-image-container">
              <img
                className="fleet-profile-image"
                src={require("../../../assets/images/profile.png")}
              ></img>
              <div className="fleet-profile-name">John Doe</div>
              <div className="fleet-profile-designation">Pilot in Command</div>
              <div className="fleet-profile-status">Released</div>
            </div>
            <center>
              <div className="fleet-divider"></div>
            </center>
            <div className="employee-details">
              <div className="title">employee id</div>
              <div className="description">9999</div>
            </div>
            <div className="employee-details">
              <div className="title">base</div>
              <div className="description">VIDP</div>
            </div>
            <div className="employee-details">
              <div className="title">email</div>
              <div className="description">johndoe@client.com</div>
            </div>
            <div className="employee-details">
              <div className="title">phone</div>
              <div className="description">+99 9999999999</div>
              <div className="description">+88 9999999999</div>
            </div>
            <div className="employee-details">
              <div className="title">date of joining</div>
              <div className="description">01 Jan 2020</div>
            </div>
            <div className="employee-details">
              <div className="title">Assigned Manager</div>
              <div className="description">Jane Doe</div>
            </div>
            <div className="employee-details">
              <div className="title">Address</div>
              <div className="description">#99, Greenpoint, NY.11211</div>
            </div>
          </div>
          <div className="crew-dashboard-right">
            <div className="message-from-chief">
              <div className="text-part">
                Message from the chief of the training will show here.
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam eimpor aliq uyam eim
                por aliqu invidunt ut labore sed diam nonumy invidunt ut labore
                sed diam nonumy eirmod. Consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                eimpor aliq uyam eim por aliqu invidunt ut labore sed diam
                nonumy invidunt ut labore sed diam nonumy eirmod. Consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam eimpor aliq uyam eim por aliqu
                invidunt ut labore sed diam nonumy invidunt ut labore sed diam
                nonumy eirmod.
              </div>
            </div>

            <div className="qualification-preview">
              <div className="qualification-notes">
                Note: Please click on qualification to preview
              </div>
              <div className="qualification-status-container">
                <div className="qualification-status-box red">
                  <div className="circle red"></div>
                </div>
                <div className="qualification-status-label red-label">
                  Expired
                </div>
              </div>

              <div className="qualification-status-container">
                <div className="qualification-status-box yellow">
                  <div className="circle yellow"></div>
                </div>
                <div className="qualification-status-label yellow-label">
                  Expiring within next 45 days
                </div>
              </div>

              <div className="qualification-status-container">
                <div className="qualification-status-box green">
                  <div className="circle green"></div>
                </div>
                <div className="qualification-status-label green-label">
                  Current
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="status-board">
          <div className="status-board-title">
            Status of Mandatory Licenses & Certificates
          </div>
          <div className="board">
            <div className="tile-list">
              <div className="tile green">Medical</div>
              <div className="tile yellow">ATPL</div>
              <div className="tile red">RTR</div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
          </div>
        </div>

        <div className="status-board">
          <div className="status-board-title">
            Status of Mandatory Ground Qualification
          </div>
          <div className="board">
            <div className="tile-list">
              <div className="tile green">Technical</div>
              <div className="tile yellow">PERFORM</div>
              <div className="tile red">SEP</div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
          </div>
        </div>

        <div className="status-board">
          <div className="status-board-title">
            Status of Mandatory Simulator Qualification
          </div>
          <div className="board">
            <div className="tile-list">
              <div className="tile green">Reccurent</div>
              <div className="tile yellow">PPC</div>
              <div className="tile red">IR</div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
          </div>
        </div>

        <div className="status-board">
          <div className="status-board-title">
            Status of Mandatory Aircraft Qualification
          </div>
          <div className="board">
            <div className="tile-list">
              <div className="tile green">ALC</div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
            <div className="tile-list">
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
              <div className="tile"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard
