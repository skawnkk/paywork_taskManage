import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TaskType } from "utils/types";
import styled from "styled-components";
interface Tabs {
  setListView: Dispatch<SetStateAction<TaskType[]>>;
  tasklist: TaskType[];
}
export default function TaskTabs({ setListView, tasklist }: Tabs) {
  const tabs = ["ALL LIST", "IN PROGRESS", "DONE"];
  const [tabView, setTabView] = useState(tabs[0]);

  const handleTabView = (idx: number) => setTabView(tabs[idx]);

  const getTaskUnChecked = (taskList: TaskType[]) => {
    setListView(taskList.filter((task) => !task.isCheck));
  };

  const getTaskChecked = (taskList: TaskType[]) => {
    setListView(taskList.filter((task) => task.isCheck));
  };

  const getAllTask = (taskList: TaskType[]) => {
    setListView([...taskList]);
  };
  useEffect(() => {
    if (tabView === tabs[1]) getTaskUnChecked(tasklist);
    if (tabView === tabs[2]) getTaskChecked(tasklist);
    if (tabView === tabs[0]) getAllTask(tasklist);
  }, [tabView]);

  return (
    <TabBox>
      {tabs.map((tab, idx) => (
        <Tab
          key={idx}
          tabView={tabView}
          tab={tab}
          onClick={() => handleTabView(idx)}>
          {tab}
        </Tab>
      ))}
    </TabBox>
  );
}
interface TabProp {
  tabView: string;
  tab: string;
}
const TabBox = styled.div`
  display: flex;
`;
const Tab = styled.div<TabProp>`
  font-size: 15px;
  min-width: 110px;
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.lightMode.baseFont};
  border: 1px solid ${({ theme }) => theme.lightMode.line};
  border-collapse: collapse;
  background-color: ${(props) =>
    props.tabView === props.tab
      ? props.theme.lightMode.accent
      : props.theme.lightMode.main};
  color: ${(props) =>
    props.tabView === props.tab
      ? props.theme.lightMode.main
      : props.theme.lightMode.baseFont};
`;
