import { useState } from "react";
import { Flyout } from "terra-common-components";
//import { NavLink } from "react-router-dom";
import Logo from './assets/react.svg';
import "./App.css";

function App() {
  const [sectorFlyoutOpen, setSectorFlyoutOpen] = useState(true);
  const [desktopSearchDeployed, setDesktopSearchDeployed] = useState(false);
  const [globalSearch, setGlobalSearch] = useState(false);

  const logo = {
    url: Logo,
    altText: "Trimble Logo",
    link: {
      url: "/link",
    },
  };

  const marketingLinks = [
    { url: "#", text: "Browse Products" },
    { url: "#", text: "Help Center" },
    { url: "#", text: "Community" },
    { url: "https://www.trimble.com", text: "More from Trimble.com" },
  ];

  const customLinks = [
    { url: "#", text: "My Products" },
    { url: "#", text: "Custom link item" },
    { url: "#", text: "Custom link item" },
  ];

  const legalLinks = [
    { url: "#", text: "Legal" },
    { url: "#", text: "Terms of Use" },
    { url: "#", text: "Privacy Center" },
  ];
  const searchPlaceholder = "Search all Trimble sites";
  const myAccountLinks = [
    { url: "#", text: "My Profile" },
    { url: "#", text: "My Products" },
    { url: "#", text: "Manage Account" },
    { url: "#", text: "Support Center" },
  ];

  const ecommerceLinks = [
    { url: "#", text: "Billing Info" },
    { url: "#", text: "Order History" },
    { url: "#", text: "My Cart" },
  ];
  return (
    <>
      <Flyout
        logo={logo}
        //Link={NavLink}
        searchPlaceholder={searchPlaceholder}
        disableSearch={false}
        sectorFlyoutDeployed={sectorFlyoutOpen}
        close={() => {
          setSectorFlyoutOpen(false);
        }}
        desktopSearchDeployed={desktopSearchDeployed}
        setDesktopSearchDeployed={setDesktopSearchDeployed}
        setGlobalSearch={setGlobalSearch}
        globalSearch={globalSearch}
        login={true}
        authenticated={true}
        marketingLinks={{
          title: "Explore Trimble",
          links: marketingLinks,
        }}
        myAccountLinks={{
          title: "Switch Accounts",
          links: myAccountLinks,
        }}
        ecommerceLinks={{
          enabled: true,
          title: "Orders & Billing",
          links: ecommerceLinks,
        }}
        customLinks={{
          enabled: true,
          title: "Custom links",
          links: customLinks,
        }}
        legalLinks={{
          links: legalLinks,
        }}
        signOutBtnMethod={() => {
          console.log("click");
        }}
        TIDdata={{
          image: { src: "https://fpoimg.com/500x500", alt: "placeholder" },
          title: "My Company Inc",
          fName: "Laura",
          lName: "Shamus",
        }}
      />
    </>
  );
}

export default App;
