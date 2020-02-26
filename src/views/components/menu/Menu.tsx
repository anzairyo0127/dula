import * as React from "react";
import { Button, Navbar, Tabs } from 'react-bulma-components';

export interface MenuState {
  hoge: number;
  piyo: string;
};

class Menu extends React.Component<any, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = { hoge: 2, piyo: "piyo!!" };
  };

  func = async () => {
    const result = await fetch("http://127.0.0.1:9000/api/v1/");
    console.log(result);
    this.setState({piyo:await result.text()});
  };

  render() {
    return (
      <div className="header">
        <Tabs className="is-large">
          <li><a onClick={this.func}>Top</a></li>
          <li><a>Profile</a></li>
          <li><a>Message</a></li>
          <li><a>List</a></li>
        </Tabs>
        <Navbar color="primary">
          <Navbar.Brand>
            <Navbar.Item>Top</Navbar.Item>
            <Navbar.Item>PROFILE</Navbar.Item>
            <Navbar.Item>MESSAGE</Navbar.Item>
            <Navbar.Item>LIST</Navbar.Item>
          </Navbar.Brand>
        </Navbar>
        <Button color="primary" onClick={this.func}>TOP</Button>
        <Button color="primary" onClick={this.func}>PROFILE</Button>
        <Button color="primary" onClick={this.func}>MESSAGE</Button>
        <Button color="primary" onClick={this.func}>LIST</Button>
      </div>
    );
  };
}

export default Menu;
