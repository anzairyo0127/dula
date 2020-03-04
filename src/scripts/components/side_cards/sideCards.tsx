import * as React from "react";
import { Card } from 'react-bulma-components';

export interface SideCarsState {
  hoge: number;
  piyo: string;
};

class SideCars extends React.Component<any, SideCarsState> {
  constructor(props: any) {
    super(props);
  };
  render() {
    return (
      <div className="column is-3">
        <Card id="profileCard">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://pbs.twimg.com/profile_images/1186219751493627909/-iEFXa2v_400x400.jpg"></img>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  あぷす
                </p>
                <p className="subtitle is-6">
                  @apsusan
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card id="menuCard">
          <aside className="menu">
            <ul className="menu-list">
              <li className="is-active"><a href="#">Top</a></li>
              <li><a href="#hogehoge">Notification</a></li>
              <li><a href="#">DirectMessage</a></li>
              <li><a href="#">FriendList</a></li>
            </ul>
          </aside>
        </Card>
      </div>
    );
  };
}

export default SideCars;
