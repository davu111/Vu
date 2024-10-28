import React, { Suspense, useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "../components/user-card";
import Navigation from "../components/navigation";

const BuyInCart = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("profile");
    return (
      <Page className="page">
        <div>Heleooo</div>
         </Page>
  );
};

export default BuyInCart;