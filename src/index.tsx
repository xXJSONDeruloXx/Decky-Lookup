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

  const handleProtonDBSearch = () => {
    if (mainRunningApp) {
      window.open(`https://www.protondb.com/app/${mainRunningApp.appid}`, "_blank");
    } else {
      window.open("https://www.protondb.com", "_blank");
    }
  };

  const handleHLTBSearch = () => {
    if (mainRunningApp) {
      // Double encode the search query as HLTB uses a different encoding pattern
      const searchQuery = encodeURIComponent(encodeURIComponent(mainRunningApp.display_name));
      window.open(`https://howlongtobeat.com/?q=${searchQuery}`, "_blank");
    } else {
      window.open("https://howlongtobeat.com", "_blank");
    }
  };

  const handleSDHQSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      window.open(`https://steamdeckhq.com/?s=${searchQuery}`, "_blank");
    } else {
      window.open("https://steamdeckhq.com", "_blank");
    }
  };

  const handleGameFAQsSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      window.open(`https://gamefaqs.gamespot.com/search?game=${searchQuery}`, "_blank");
    } else {
      window.open("https://gamefaqs.gamespot.com", "_blank");
    }
  };

  return (
    <PanelSection>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleGoogleSearch}
        >
          {mainRunningApp ? `Google ${mainRunningApp.display_name}` : "Open Google"}
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
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleProtonDBSearch}
        >
          {mainRunningApp ? `Check ProtonDB for ${mainRunningApp.display_name}` : "Open ProtonDB"}
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleHLTBSearch}
        >
          {mainRunningApp ? `Search HLTB for ${mainRunningApp.display_name}` : "Open HowLongToBeat"}
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleSDHQSearch}
        >
          {mainRunningApp ? `Search SDHQ for ${mainRunningApp.display_name}` : "Open Steam Deck HQ"}
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={handleGameFAQsSearch}
        >
          {mainRunningApp ? `Search GameFAQs for ${mainRunningApp.display_name}` : "Open GameFAQs"}
        </ButtonItem>
      </PanelSectionRow>
      {/* {mainRunningApp && (
        <PanelSectionRow>
          <div>
            <p>Currently running app ID: {mainRunningApp.appid}</p>
            <p>Currently running app name: {mainRunningApp.display_name}</p>
          </div>
        </PanelSectionRow>
      )} */}
    </PanelSection>
  );
}

export default definePlugin(() => {
  return {
    name: "Decky Lookup",
    content: <Content />,
    icon: <FaGoogle />,
    titleView: <div className={staticClasses.Title}>Decky Lookup</div>,
  };
});