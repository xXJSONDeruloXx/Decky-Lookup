import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  staticClasses
} from "@decky/ui";
import { definePlugin } from "@decky/api";
import { FaGoogle } from "react-icons/fa";

function Content() {
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
    </PanelSection>
  );
}

export default definePlugin(() => {
  return {
    name: "Google Plugin",
    content: <Content />,
    icon: <FaGoogle />,
    titleView: <div className={staticClasses.Title}>Google Plugin</div>,
    onDismount() {
      // Cleanup if needed
    },
  };
});
