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

  const navigateToExternalWeb = (url: string) => {
    window.open(url, '_blank');
  };

  const handleGoogleSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      navigateToExternalWeb(`https://www.google.com/search?q=${searchQuery}`);
    } else {
      navigateToExternalWeb("https://www.google.com");
    }
  };

  const handlePCGWSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      navigateToExternalWeb(`https://www.pcgamingwiki.com/w/index.php?search=${searchQuery}`);
    } else {
      navigateToExternalWeb("https://www.pcgamingwiki.com");
    }
  };

  const handleProtonDBSearch = () => {
    if (mainRunningApp) {
      navigateToExternalWeb(`https://www.protondb.com/app/${mainRunningApp.appid}`);
    } else {
      navigateToExternalWeb("https://www.protondb.com");
    }
  };

  const handleHLTBSearch = () => {
    if (mainRunningApp) {
      // Double encode the search query as HLTB uses a different encoding pattern
      const searchQuery = encodeURIComponent(encodeURIComponent(mainRunningApp.display_name));
      navigateToExternalWeb(`https://howlongtobeat.com/?q=${searchQuery}`);
    } else {
      navigateToExternalWeb("https://howlongtobeat.com");
    }
  };

  const handleSDHQSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      navigateToExternalWeb(`https://steamdeckhq.com/?s=${searchQuery}`);
    } else {
      navigateToExternalWeb("https://steamdeckhq.com");
    }
  };

  const handleGameFAQsSearch = () => {
    if (mainRunningApp) {
      const searchQuery = encodeURIComponent(mainRunningApp.display_name);
      navigateToExternalWeb(`https://gamefaqs.gamespot.com/search?game=${searchQuery}`);
    } else {
      navigateToExternalWeb("https://gamefaqs.gamespot.com");
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
          {mainRunningApp ? `Check HLTB for ${mainRunningApp.display_name}` : "Open HowLongToBeat"}
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
    name: "Decky Lookup",
    content: <Content />,
    icon: <FaGoogle />,
    titleView: <div className={staticClasses.Title}>Decky Lookup</div>,
  };
});