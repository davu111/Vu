// navigation.jsx

import React from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";
import { Home, ShoppingBasket, Notifications, Person } from "@mui/icons-material";

const BottomNavigationPage = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        className="bottom-navigation"
      >
        <BottomNavigation.Item
          key="home"
          //onClick={() => navigate("/buy-in-cart")}
          icon={<Home style={{ fontSize: 24 }} />}
          activeIcon={<Home style={{ fontSize: 28, color: "blue" }} />}
          className="bottom-navigation-item"
        />

        <BottomNavigation.Item
          key="cart"
          //onClick={() => navigate("/user")}
          icon={<ShoppingBasket style={{ fontSize: 24 }} />}
          activeIcon={<ShoppingBasket style={{ fontSize: 28, color: "green" }} />}
          className="bottom-navigation-item"
        />

        <BottomNavigation.Item
          key="notifications"
          icon={<Notifications style={{ fontSize: 24 }} />}
          activeIcon={<Notifications style={{ fontSize: 28, color: "orange" }} />}
          className="bottom-navigation-item"
        />

        <BottomNavigation.Item
          key="profile"
          icon={<Person style={{ fontSize: 24 }} />}
          activeIcon={<Person style={{ fontSize: 28, color: "purple" }} />}
          className="bottom-navigation-item"
        />
      </BottomNavigation>
    </Page>
  );
};

export default BottomNavigationPage;
