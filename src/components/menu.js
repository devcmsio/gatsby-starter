import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

class Menu extends React.Component {
  renderMenu(data) {
    let items;
    try {
      const settings = data.devCmsSetting.setting;

      items =  JSON.parse(settings.value);
    } catch (e) {
      items = [];
    }

    if (!items.length) {
      return null;
    }

    return <nav>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `flex-end`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        {items.map((item, index) => {
          return <li key={`menu-item-${index}`} style={{ paddingLeft: `15px` }}><Link to={item.url}>{item.label}</Link></li>
        })}
      </ul>
    </nav>;
  }

  render() {
    return <StaticQuery query={graphql`
      query {
        devCmsSetting(setting: { name: { eq: "footer_menu" } }) {
          setting {
            name
            value
          }
        }
      }
    `} render={this.renderMenu.bind(this)} />
  }
}

export default Menu;
