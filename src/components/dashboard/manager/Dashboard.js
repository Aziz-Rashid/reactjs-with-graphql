import React,{useState} from 'react'

const Dashboard = () => {
  const [tables_items, settables_items] = useState([{
    id: 1,
    table_data: ["20", "20", "10", "60", "90"],
    table_column_heading: ["Fleet", "Active qualifications", "Qs Expiring in 30 days", "Qs Expiring in 90 days", "Qs Expiring in 120 days"],
    category_title: "Certificates & Licences",
  },
  {
    id: 2,
    table_column_heading: ["Fleet", "Active qualifications"],
    table_data: ["20", "30"],
    category_title: "One time Qualifications",
  },
  {
    id: 3,
    table_column_heading: ["Fleet", "Active qualifications", "Qs Expiring in 30 days", "Qs Expiring in 90 days", "Qs Expiring in 120 days"],
    table_data: ["10", "20", "30", "40", "50"],

    category_title: "Ground Qualifications",
  },
  {
    id: 4,
    table_column_heading: ["Fleet", "Active qualifications", "Qs Expiring in 30 days", "Qs Expiring in 90 days", "Qs Expiring in 120 days"],
    table_data: ["10", "20", "30", "40", "50"],
    category_title: "Simulator Qualifications",
  },
  {
    id: 5,
    table_column_heading: ["Fleet", "Active qualifications", "Qs Expiring in 30 days", "Qs Expiring in 60 days", "Qs Expiring in 120 days"],
    table_data: ["10", "20", "30", "40", "50"],
    category_title: "Aircraft Qualifications",
  },
  {
    id: 6,
    category_title: "Additional Training Count for the Year (Jan 1st to Dec 31st)",
    table_data: ["10", "20", "30", "40", "50"],
    table_column_heading: ["Fleet", "Total Additional", "Ground", "Simulator", "Aircraft"],
    noExpire: true,
  }])
  return (
    <div className="animate__animated animate__fadeIn">
        {tables_items.map((data, index) => (
          <div>
            <div className="category-title">{data.category_title}</div>
            <div className="manager-dashboard-table-container">
              <div className="tables-item-container">
                <div className="dashboard-table-header-container">
                  {data.table_column_heading.map((item, index) => (
                    <div
                      className="table-header"
                      style={{
                        width: data.table_column_heading.length === 2 ? "20%" : 100 / data.table_column_heading.length + "%",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="dashboard-table-data-container">
                  {data.table_data.map((table_da, index) => (
                    <div
                      className={
                        (!data.noExpire && index === 1) || (data.noExpire && index === 1)
                          ? `table-data ragular active`
                          : !data.noExpire && index === 2
                          ? "table-data ragular expiring"
                          : "table-data ragular"
                      }
                      style={{
                        width: data.table_column_heading.length === 2 ? "20%" : 100 / data.table_column_heading.length + "%",
                      }}
                    >
                      {table_da}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Dashboard