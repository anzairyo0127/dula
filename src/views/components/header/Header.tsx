import * as React from "react";

export interface HeaderState {
  hoge: number;
  piyo: string;
}

class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = { hoge: 2, piyo: "piyo!!" };
  }

  func = async () => {
    const result = await fetch("http://127.0.0.1:9000/api/v1/");
    console.log(result);
    this.setState({piyo:await result.text()});
  }

  render() {
    return (
      <div>
        <h1>Maaaaa {this.state.hoge}</h1>
        <h3>{this.state.piyo}</h3>
        <button onClick={this.func}>ぼったんだよ</button>
      </div>
    );
  }
}

export default Header;
