import React from "react";
import DashboardLayout from "../components/dashboard_layout";
import Authors from "../components/Authors";

const ExplorePage = () => {
  return (
    <DashboardLayout>
      <div className="py-4 mt-11 px-20 xl:px-40 w-full lg:w-4/5">
        <p>
          <b>Explore</b> <span className="font-light">by Authors</span>
        </p>
        <Authors />
      </div>
    </DashboardLayout>
  );
};

export default ExplorePage;
