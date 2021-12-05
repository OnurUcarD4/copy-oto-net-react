import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const SikcaSorulan = (props) => {
  return (
    <div className="text-base">
      <Collapse bordered={false}>
        <Panel
          className="sikcabg mt-4 font-bold text-lg"
          header={props.data.title}
          key={props.data.id}
        >
          <span
            className="text-sm font-normal"
            dangerouslySetInnerHTML={{ __html: props.data.desc }}
          ></span>
          <span
            className="text-sm font-normal"
            dangerouslySetInnerHTML={{ __html: props.data.desc2 }}
          ></span>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SikcaSorulan;
