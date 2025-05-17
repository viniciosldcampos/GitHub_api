import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs) `
    font-size: 1em;
    width: 100%;
    margin-top: 1em;
`;

export const WrapperTabList = styled(TabList) `
    list-style-type: none;
    padding: 0.25em;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab) `
    border-radius: 1em;
    border: 0.0625em solid #ccc;
    padding: 1em;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 0.5em;

    &:focus {
        outline: none;
    }
    
    &.is-selected {
        border-shadow: 0.1875
em 0.125em 0.625em rgba(0, 0, 0, 0.2);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel) `
    padding: 1em;
    border: 0.1em solid #ccc;
    display: none;
    margin-top: -0.3125em;

    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";