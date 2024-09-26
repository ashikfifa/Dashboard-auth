import ReactGridLayout from "react-grid-layout";
import { layoutData } from "../helpers/Utils";

const Profile = (props) => {
  const { role } = props;

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  const handleLayoutChange = (newLayout) => {
    console.log("newLayout", newLayout);
    console.log("layouts", props);
  };

  return (
    <div>
      profile page {role}
      <ReactGridLayout
        className="layout"
        layout={layout}
        isDraggable
        isResizable

        cols={6}
        width={1200}
      >
        {layoutData?.map((item) => (
          <div
            style={{ border: "0.7px solid #D1D8E3", background: "white" }}
            key={item?.id}
          >
            {" "}
            {item?.name}{" "}
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default Profile;
