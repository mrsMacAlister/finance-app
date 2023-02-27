import React from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="heading">
          <h2>Settings</h2>
          <div className="addBtn">Add New</div>
          <p>debt.map()</p>
        </div>
        <div className="categories">
          <Category />
        </div>
        <div className="construction">
          <h2>This page is still under construction.</h2>
          <h2>Please check again later.</h2>
        </div>
      </div>
    </div>
  );
};

export default Settings;
