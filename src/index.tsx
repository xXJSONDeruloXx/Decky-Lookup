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

  const handleGoogleSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    } else {
      window.open("https://www.google.com", "_blank");
    }
  };

  const handlePCGWSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      window.open(`https://www.pcgamingwiki.com/w/index.php?search=${searchQuery}`, "_blank");
    } else {
      window.open("https://www.pcgamingwiki.com", "_blank");
    }
  };

  return (
    <PanelSection>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleGoogleSearch}
        >
          {mainRunningApp ? `Search for ${mainRunningApp.display_name}` : "Open Google"}
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handlePCGWSearch}
        >
          {mainRunningApp ? `Search PCGW for ${mainRunningApp.display_name}` : "Open PC Gaming Wiki"}
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