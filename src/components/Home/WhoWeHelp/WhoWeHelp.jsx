import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fundations from './Fundations/FundationsPagination';
import Organizations from './Organizations/OrganizationsPagination';
import Local from './Local/LocalPagination';
import Title from './Title/Title';
import Divider from './Divider/Divider';
import './_whoWeHelp.scss';
import './_pagination.scss';

function TabPanel(props) {
    const { children, value, index} = props;
  
    return (
      <div
        className="tab"
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
      >
        {value === index && (
            <div className="posts__wrapper">{children}</div>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `tab-${index}`
    };
  }
  
  export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <>
        <section id="help">
            <Title text="Komu pomagamy?" />
            <Divider />
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Fundacjom" {...a11yProps(0)} />
                <Tab label="Organizacjom pozarządowym" {...a11yProps(1)} />
                <Tab label="Lokalnym zbiórkom" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="tab__title">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <Fundations />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="tab__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
                <Organizations />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="tab__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
                <Local />
            </TabPanel>
        </section>
    </>
    );
  }