import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './navbar';
import Footerbar from './footerbar';

export default class NavLayout extends React.Component {

    render() {
        return (
            <div id="layoutDiv" style={{ display: "flex", flexDirection: "column", height: "100vh"}}>
                <Helmet title="IMA Ltd. | MRO Master Data Cleansing and Governance" />

                <Navbar />

                <div id="contentDiv" style={{ display: "flex", flex: 1, backgroundColor: "lightblue"}}>
                    This is the content component
                </div>

                <Footerbar />
            </div>
        );
    }
}
