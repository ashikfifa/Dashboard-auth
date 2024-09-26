import React from "react";
import { cardContent } from "../../helpers/utils";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const Profile = (props) => {
  const { role } = props;

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div>
      profile page {role}
      {cardContent?.map((item, index) => (
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          <div className="draggableCard" key={index}>
            {item?.name}
          </div>
        </ResponsiveGridLayout>
      ))}
    </div>
  );
};

export default Profile;
