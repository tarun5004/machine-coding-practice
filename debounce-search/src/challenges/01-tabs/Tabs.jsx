import "./Tabs.css";
import { useState } from "react";

export default function Tabs({ tabsdata, onChnage }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs_container">
        {tabsdata.map((item, index) => {
          return (
            <button
              key={index}
              className={`${activeTab === index ? "active_tab" : ""}`}
              onClick={() => {
                setActiveTab(index);
                onChnage(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs_content">{tabsdata[activeTab].content}</div>
    </div>
  );
}