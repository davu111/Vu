import React, {Suspense, useState} from "react";
import { Sheet, Button, Page, Text, useNavigate } from "zmp-ui";

const AboutPage = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <Page className="page">
      <div className="section-container">
        <Text>This mini app was generated by zmp-cli</Text>
      </div>
      <div>
      <Button
        variant='secondary'
        fullWidth
        onClick={() => setActionSheetOpened(true)}
      >
        Back
      </Button>
      </div>
      <Sheet.Actions
        visible={actionSheetOpened}
        onClose={() => setActionSheetOpened(false)}
        actions={[
          [
            {
              text: "Go back",
              onClick: () => {
                navigate(-1);
              },
            },
            {
              text: "Action 1",
              close: true,
            },
            {
              text: "Action 2",
              close: true,
            },
          ],
          [
            {
              text: "Close",
              close: true,
              danger: true,
            },
          ],
        ]}
      ></Sheet.Actions>
         {/* Pass activeTab and setActiveTab as props to Navigation */}
         <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </Page>
  );
};

export default AboutPage;