// Challenge entry components stay in their own folders so App can swap between
// machine coding problems by changing a single import.
import Tabs from "./Tabs";
import { sampleTabsData } from "./TabsData";

export default function TabsPractice() {
  return <Tabs tabsdata={sampleTabsData} />;
}