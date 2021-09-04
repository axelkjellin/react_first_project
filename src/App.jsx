// import { Col, Row } from 'antd';
import React from 'react';
import { Layout } from 'antd';
import './App.css'
import HeaderLayout from './layout/Header/Header';
import FooterLayout from './layout/Footer/Footer';
import ContentLayout from './layout/Content/Content';


const App = () => {
    return (
        <>
            <Layout>
                <HeaderLayout />
                <ContentLayout className="Content" />
                <FooterLayout />
            </Layout>
        </>
    )
}

export default App