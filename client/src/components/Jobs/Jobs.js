import React from "react";
import SingleJob from "../SingleJob/SingleJob";

import { Typography } from "antd";

import { Checkbox } from "antd";

import "../../App.css";

const { Title } = Typography;

export default class Jobs extends React.Component {
  state = {
    checked: false,
    reactJobs: []
  };

  checkChanged = e => {
    this.reactFilter();
    console.log("checked = ", e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  };

  reactFilter = () => {
    const reactJobs = this.props.jobs.filter(job => {
      const jobDesc = job.description.toLowerCase();

      if (jobDesc.includes("react")) {
        return true;
      }
      return false;
    });

    console.log("filtered", reactJobs.length);
    this.setState({ reactJobs: [...reactJobs] });
  };

  render() {
    console.log("length Original", this.props.jobs.length);
    return (
      <div className="jobs">
        <Title>Entry Level Software Jobs </Title>
        <Checkbox onChange={this.checkChanged}>React</Checkbox>
        {this.state.checked
          ? this.state.reactJobs.map((job, i) => (
              <SingleJob key={i} job={job} />
            ))
          : this.props.jobs.map((job, i) => <SingleJob key={i} job={job} />)}
      </div>
    );
  }
}
