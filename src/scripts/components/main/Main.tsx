import * as React from "react";
import { Box, Media, Content } from 'react-bulma-components';

export interface MainState {
  hoge: number;
  piyo: string;
};

class Main extends React.Component<any, MainState> {
  constructor(props: any) {
    super(props);
  };
  render() {
    return (
      <div id="main_content" className="column is-9">
        <Box>
          <Media>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://pbs.twimg.com/profile_images/1186219751493627909/-iEFXa2v_400x400.jpg"></img>
              </p>
            </figure>
            <div className="media-content">
              <Content>
                <p><strong>15:45 - 18:00</strong></p>
                <p><strong>あぷす</strong>さん <small>@apsusan</small></p>
                <p>2020/2/25 は八王子駅で僕と握手しましょう。嘘です。やっぱりチロリン村に行こう。</p>
              </Content>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="level-itme">
                      <i className="icon is-small"></i>
                    </span>
                  </a>
                  <a className="level-item">
                    <span className="level-itme">
                      <i className="fas fa-retweet"></i>
                    </span>
                  </a>
                  <a className="level-item">
                    <span className="level-itme">
                      <i className="fas fa-heart"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </Media>
        </Box>
      </div>
    );
  };
}

export default Main;
