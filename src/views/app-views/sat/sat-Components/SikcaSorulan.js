import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;
const SikcaSorulan = (props) => {
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={["0"]}>
        <Panel
          className="font-bold text-base sikcabg mb-2"
          header={props.data3.title}
          key="1"
        >
          <span className="text-sm font-normal">
            <div dangerouslySetInnerHTML={{ __html: props.data3.desc }}></div>
            <div dangerouslySetInnerHTML={{ __html: props.data3.desc2 }}></div>
          </span>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SikcaSorulan;
