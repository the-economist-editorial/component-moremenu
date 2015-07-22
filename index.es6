import React from 'react';
import Icon from '@economist/component-icon';
import UserMenu from '@economist/component-usermenu';

export default class MoreMenu extends React.Component {

  render() {
    return (
      <nav className="user-more-menu">
        <ul className="mainmenu">
          <li>
            <a href="#" className="menu" title="More from The Economist">
              <Icon icon="hamburger" background="none" shape="square" size="100%"/>
            </a>
            <ul className="submenu">
              <li className="user-menu"><UserMenu /></li>
              <li className="my-subscription-menu">
                <h3>My subscription</h3>
                <ul>
                  <li><a href="http://www.economist.com/products/subscribe">Subscribe to The Economist</a></li>
                  <li><a href="http://www.economist.com/activate">Activate my digital subscription</a></li>
                  <li><a href="http://www.economist.com/user">Manage my subscription</a></li>
                  <li><a href="http://www.economist.com/products/renew">Renew</a></li>
                </ul>
              </li>
              <li className="more-from-economist-menu">
              <h3>More from The Economist</h3>
                <ul>
                  <li><a href="http://www.economist.com/digital">The Economist digital editions</a></li>
                  <li><a href="http://www.economist.com/newsletters">Newsletters</a></li>
                  <li><a href="http://www.economist.com/events">Events</a></li>
                  <li><a href="http://jobs.economist.com">Jobs.Economist.com</a></li>
                  <li><a href="http://store.economist.com/">The Economist Store</a></li>
                  <li><a href="http://www.economist.com/bookmarks" html="1">Timekeeper reading list</a></li>
                </ul>
              </li>
              </ul>
          </li>
          <li className="subscription-menu">
            <a href="https://subscriptions.economist.com/GLB/MAST/T1" target="_blank">SUBSCRIBE</a>
          </li>
        </ul>
      </nav>
    );
  }
}
