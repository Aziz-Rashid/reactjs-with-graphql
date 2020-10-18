import React,{useState} from 'react'

const Dashboard = () => {
  const [tables_items, settables_items] = useState([
    {
      id: 1,
      table_column_heading: [
        "Code",
        "Ground Training Names (40)",
        "Next 30 days (130)",
        "Next 90 days (200)",
        "Next 183 days (190)",
        "Next 365 days (200)",
      ],
      table_data: ["000777", "Technical Refresher Refresher", "20", "25", "15", "15"],
    },
    {
      id: 1,
      table_column_heading: [
        "Code",
        "Ground Training Names (40)",
        "Next 30 days (130)",
        "Next 90 days (200)",
        "Next 183 days (190)",
        "Next 365 days (200)",
      ],
      table_data: ["000777", "Technical Refresher Refresher", "20", "25", "15", "15"],
    },
  ])
  console.log(settables_items)
  return (
    <div className="animate__animated animate__fadeIn">
        <div className="category-title">Message from chief of the training</div>
        <div className="group-dashboard-container">
          <div className="line"></div>
          <div className="text-part">
            Message from the chief of the training will show here. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam eimpor aliq uyam eim por aliqu invidunt ut labore sed diam nonumy invidunt ut labore sed diam nonumy eirmod.
            Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eimpor aliq uyam eim por aliqu
            invidunt ut labore sed diam nonumy invidunt ut labore sed diam nonumy eirmod. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam eimpor aliq uyam eim por aliqu invidunt ut labore sed diam nonumy invidunt ut labore sed diam
            nonumy eirmod.
          </div>
        </div>

        <div className="category-title">Upcoming Trainings</div>

        {tables_items.map((data, index) => (
          <div className="manager-dashboard-table-container">
            <div className="tables-item-container">
              <div className="dashboard-table-header-container">
                {data.table_column_heading.map((item, index) => (
                  <div
                    className="table-header"
                    style={{
                      width: data.table_column_heading.length === 2 ? "16.5%" : 100 / data.table_column_heading.length + "%",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="dashboard-table-data-container">
                {data.table_data.map((table_da, index) => (
                  <div
                    className="data-text"
                    style={{
                      width: data.table_column_heading.length === 2 ? "16.5%" : 100 / data.table_column_heading.length + "%",
                    }}
                  >
                    {table_da}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Dashboard