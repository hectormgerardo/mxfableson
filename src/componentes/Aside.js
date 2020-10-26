import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={false}
      rtl={true}
      collapsed={false}
      toggled={false}
      breakPoint="md"
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Menu
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="round">
          {/*<MenuItem>
            DASHBOARD
          </MenuItem>*/}
        {/*<MenuItem>Menu 1</MenuItem>*/}
        </Menu>
        <Menu iconShape="circle">
          <SubMenu title="Dashboard" >
            <MenuItem>Global Target Summary</MenuItem>
            <SubMenu icon title="Net Forest Cover Change">
              <MenuItem>Net Forest Cover Change 1</MenuItem>
              <MenuItem>Net Forest Cover Change 2</MenuItem>
              {/*<SubMenu title="submenu">
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
                </SubMenu>*/}
            </SubMenu>
            <MenuItem>Biodiversity</MenuItem>
            <MenuItem>Protected Areas by Type</MenuItem>
            <MenuItem>Land Cover</MenuItem>
            <SubMenu title="Fresh Water">
              <MenuItem>Fresh Water 1</MenuItem>
              <MenuItem>Fresh Water 2</MenuItem>
            </SubMenu>
            <SubMenu title="Green House Gas (GHG) Emissions">
              <MenuItem>Green House Gas (GHG) Emissions 1</MenuItem>
              <MenuItem>Green House Gas (GHG) Emissions 2</MenuItem>
            </SubMenu>
            <SubMenu title="Food Energy Intake Per Capita">
              <MenuItem>Food Energy Intake Per Capita 1</MenuItem>
              <MenuItem>Food Energy Intake Per Capita 2</MenuItem>
            </SubMenu>
          </SubMenu>
            <SubMenu title="Trade Report">
              <SubMenu title="Sustainable - net">
                <MenuItem>Importers</MenuItem>
                <MenuItem>Exporters</MenuItem>
              </SubMenu>
              <SubMenu title="Current Trend">
                <MenuItem>Importers</MenuItem>
                <MenuItem>Exporters</MenuItem>
              </SubMenu>

            </SubMenu>

        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;