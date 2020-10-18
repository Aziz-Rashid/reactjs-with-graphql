import React from 'react'
const Dashboard = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="category-title">Dashboard</div>
      <div className="data-admin-cards">
        <div className="card-item">
          <div className="card-item-title">Active Crew</div>
          <div className="card-item-description">100</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Active qualifications</div>
          <div className="card-item-description">50</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Active Managers</div>
          <div className="card-item-description">20</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Total Presentations</div>
          <div className="card-item-description">80</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Total Forms</div>
          <div className="card-item-description">70</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Total qualifications</div>
          <div className="card-item-description">60</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Total Fleet</div>
          <div className="card-item-description">12</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Total Fleet</div>
          <div className="card-item-description">23</div>
        </div>
      </div>
      <div className="cpanel-title">cPanel</div>

      <div className="cpanel-box">
        <div className="cpanel-header">Server and Database Pannel</div>
      </div>
    </div>
  )
}

export default Dashboard
