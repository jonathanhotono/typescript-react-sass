import * as React from 'react';
import './HelloWorld.scss';
import { css } from 'office-ui-fabric-react';
import IHelloWorldProps from './IHelloWorldProps';

export default class Hello extends React.Component<IHelloWorldProps, {}> {
    public render() {
    return (
      <div className="helloWorld">
        <div className="container">
          <div className={css('ms-Grid-row ms-bgColor-teal ms-fontColor-white', "row")}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Building experiences with web stack and modern tooling
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <a className={css('ms-Button button', "button")} href='https://dev.office.com/sharepoint'>
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}