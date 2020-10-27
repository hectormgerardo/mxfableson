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

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, onChange}) => {
  const handleChange = (a) =>{
    onChange(a)
  }
  return (
    <ProSidebar
      image={false}
      rtl={false}
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
            <MenuItem onClick={()=>handleChange('Global Target Summary')}>Global Target Summary</MenuItem>
            <SubMenu icon title="Net Forest Cover Change">
              <MenuItem onClick={()=>handleChange('Net Forest Cover Change(1)')}>Net Forest Cover Change 1</MenuItem>
              <MenuItem onClick={()=>handleChange('Net Forest Cover Change(2)')}>Net Forest Cover Change 2</MenuItem>
            </SubMenu>
            <MenuItem onClick={()=>handleChange('Biodiversity')}>Biodiversity</MenuItem>
            <MenuItem onClick={()=>handleChange('Protected Areas by Type')}>Protected Areas by Type</MenuItem>
            <MenuItem onClick={()=>handleChange('Land Cover')}>Land Cover</MenuItem>
            <SubMenu title="Fresh Water">
              <MenuItem onClick={()=>handleChange('Fresh Water 1')}>Fresh Water 1</MenuItem>
              <MenuItem onClick={()=>handleChange('Fresh Water 2')}>Fresh Water 2</MenuItem>
            </SubMenu>
            <SubMenu title="Green House Gas (GHG) Emissions">
              <MenuItem onClick={()=>handleChange('Green House Gas (GHG) Emissions 1')}>Green House Gas (GHG) Emissions 1</MenuItem>
              <MenuItem onClick={()=>handleChange('Green House Gas (GHG) Emissions 2')}>Green House Gas (GHG) Emissions 2</MenuItem>
            </SubMenu>
            <SubMenu title="Food Energy Intake Per Capita">
              <MenuItem onClick={()=>handleChange('Food Energy Intake Per Capita 1')}>Food Energy Intake Per Capita 1</MenuItem>
              <MenuItem onClick={()=>handleChange('Food Energy Intake Per Capita 2')}>Food Energy Intake Per Capita 2</MenuItem>
            </SubMenu>
          </SubMenu>
            <SubMenu title="Trade Report">
              <SubMenu title="Sustainable - net">
                <MenuItem onClick={()=>handleChange('Food Energy Intake Per Capita 2')}>Importers</MenuItem>
                <MenuItem >Exporters</MenuItem>
              </SubMenu>
              <SubMenu title="Current Trend">
                <MenuItem >Importers</MenuItem>
                <MenuItem >Exporters</MenuItem>
              </SubMenu>

            </SubMenu>

        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;