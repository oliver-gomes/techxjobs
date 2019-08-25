import React from "react";
import SingleJob from "../SingleJob/SingleJob";
import "./Jobs.css";
import { Layout, Menu } from "antd";
import { Typography } from "antd";
import reactSVG from "../../svg/react-svg.png";
import angSVG from "../../svg/ang-svg.png";
import vueSVG from "../../svg/vue-svg.png";
import pySVG from "../../svg/python.png";
import { Radio } from "antd";

const { Header, Content, Footer } = Layout;

const { Title } = Typography;

export default class Jobs extends React.Component {
  state = {
    checked: false,
    reactJobs: [],
    angularJobs: [],
    vueJobs: [],
    pythonJobs: []
  };

  checkReactChanged = e => {
    this.reactFilter();
    // console.log("checked = ", e.target.checked);
    this.setState({
      checked: "react"
    });
  };

  checkVueChanged = e => {
    this.vueFilter();
    // console.log("checked = ", e.target.checked);
    this.setState({
      checked: "vue"
    });
  };

  checkAngularChanged = e => {
    this.angularFilter();
    // console.log("checked = ", e.target.checked);
    this.setState({
      checked: "angular"
    });
  };

  checkPythonChanged = e => {
    this.pythonFilter();
    // console.log("checked = ", e.target.checked);
    this.setState({
      checked: "python"
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

    console.log("filtered react", reactJobs.length);
    this.setState({ reactJobs: [...reactJobs] });
  };

  pythonFilter = () => {
    const pythonJobs = this.props.jobs.filter(job => {
      const jobDesc = job.description.toLowerCase();

      if (jobDesc.includes("python")) {
        return true;
      }
      return false;
    });

    console.log("filtered python", pythonJobs.length);
    this.setState({ pythonJobs: [...pythonJobs] });
  };

  angularFilter = () => {
    const angularJobs = this.props.jobs.filter(job => {
      const jobDesc = job.description.toLowerCase();

      if (jobDesc.includes("angular")) {
        return true;
      }
      return false;
    });

    console.log("filtered angular", angularJobs.length);
    this.setState({ angularJobs: [...angularJobs] });
  };

  vueFilter = () => {
    const vueJobs = this.props.jobs.filter(job => {
      const jobDesc = job.description.toLowerCase();

      if (jobDesc.includes("vue")) {
        return true;
      }
      return false;
    });

    console.log("filtered vue", vueJobs.length);
    this.setState({ vueJobs: [...vueJobs] });
  };

  render() {
    console.log("length Original", this.props.jobs.length);
    return (
      <div className="jobs">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item
                key="1"
                onClick={() => {
                  this.setState({ checked: false });
                }}
              >
                All
              </Menu.Item>
              <Menu.Item key="2" onClick={this.checkReactChanged}>
                React
              </Menu.Item>
              <Menu.Item key="3" onClick={this.checkAngularChanged}>
                Angular
              </Menu.Item>
              <Menu.Item key="4" onClick={this.checkVueChanged}>
                Vue
              </Menu.Item>
              <Menu.Item key="5" onClick={this.checkPythonChanged}>
                Python
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div style={{ background: "#F0F2F5", padding: 24, minHeight: 200 }}>
              <Title style={{ paddingTop: "10px" }}>
                Entry Software Engineer Jobs
              </Title>
              <img src={reactSVG} alt="" height="40" />
              <img src={angSVG} alt="" height="40" />
              <img
                src={vueSVG}
                alt=""
                height="28"
                style={{ marginLeft: "10px" }}
              />
              <img
                src={pySVG}
                alt=""
                height="35"
                style={{ marginLeft: "10px" }}
              />
              <Title level={4} style={{ marginTop: "12px" }}>
                Use this site to give your job search a boost 🚀! <br />
                Location include U.S, International and Remote 🌎🏠
                <br />
                Apply with confident by narrowing down your job search time by
                only the tech that you are comfortable with 😊
              </Title>
            </div>
            <div style={{ marginBottom: "10px" }}>
              {this.state.checked === "react"
                ? this.state.reactJobs.length + " React jobs found"
                : this.state.checked === "angular"
                ? this.state.angularJobs.length + " Angular jobs found"
                : this.state.checked === "vue"
                ? this.state.vueJobs.length + " Vue jobs found"
                : this.state.checked === "python"
                ? this.state.pythonJobs.length + " Python jobs found"
                : this.state.checked === false
                ? this.props.jobs.length + " total jobs found"
                : this.props.jobs.length + " total jobs found"}
            </div>
          </Content>
        </Layout>

        {this.state.checked === "react"
          ? this.state.reactJobs.map((job, i) => (
              <SingleJob key={i} job={job} />
            ))
          : this.state.checked === "vue"
          ? this.state.vueJobs.map((job, i) => <SingleJob key={i} job={job} />)
          : this.state.checked === "angular"
          ? this.state.angularJobs.map((job, i) => (
              <SingleJob key={i} job={job} />
            ))
          : this.props.jobs.map((job, i) => <SingleJob key={i} job={job} />)}
      </div>
    );
  }
}
