import React, { Suspense, useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "../components/user-card";
import Navigation from "../components/navigation";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("cart");
  return (
    <Page className="page">
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/about")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>About</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>User</div>
          </List.Item>

          <List.Item
            onClick={() => navigate("/test2")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Test2</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/simple")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Simple</div>
          </List.Item>
        </List>
      </div>
      {/* Pass activeTab and setActiveTab as props to Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </Page>
  );
};

export default ShoppingCart;
