import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  staticClasses,
  Router
} from "@decky/ui";
import { definePlugin } from "@decky/api";
import { FaGoogle } from "react-icons/fa";

function Content() {
  const mainRunningApp = Router.MainRunningApp;

  return (
    <PanelSection>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            window.open("https://www.google.com", "_blank");
          }}
        >
          Open Google
        </ButtonItem>
      </PanelSectionRow>
      {mainRunningApp && (
        <PanelSectionRow>
          <div>
            <p>Currently running app ID: {mainRunningApp.appid}</p>
            <p>Currently running app name: {mainRunningApp.display_name}</p>
          </div>
        </PanelSectionRow>
      )}
    </PanelSection>
  );
}

export default definePlugin(() => {
  return {
    name: "Google Plugin",
    content: <Content />,
    icon: <FaGoogle />,
    titleView: <div className={staticClasses.Title}>Google Plugin</div>,
  };
});