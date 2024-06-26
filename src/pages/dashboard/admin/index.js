import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col, Nav } from 'react-bootstrap';

import { getCustomers, getDashboardStats } from '../../../stores/thunk';
import CenteredSpinner from '../../../components/common/centeredSpinner';

import SummaryCard from './summarycard';
import CustomerTable from './customertable';
import CreditManagement from './creditsmanagement';


const AdminDashboard = () => {
    const dispatch = useDispatch();

    const userData = createSelector(
        (state) => state.Admin,
        (state) => ({
            stats: state.stats,
            customers: state.customers,
            loadingStats: state.loadingStats,
            loadingCustomer: state.loadingCustomer,
        })
    );

    const { stats, customers, loadingStats, loadingCustomer } = useSelector(userData);

    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        switch (activeTab) {
            case 'Overview':
                dispatch(getDashboardStats());
                break;
            case 'Customer':
            case 'CreditsManagement':
                dispatch(getCustomers());
                break;
            default:
                break;
        }
    }, [dispatch, activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Row>
                <Col sm={12} md={2} className="nav-column">
                    <Nav className="flex-column">
                        <Nav.Link
                            onClick={() => handleTabChange('Overview')}
                            className={activeTab === 'Overview' ? 'active-tab' : ''}
                        >
                            My Overview
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleTabChange('Customer')}
                            className={activeTab === 'Customer' ? 'active-tab' : ''}
                        >
                            Customers
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleTabChange('CreditsManagement')}
                            className={activeTab === 'CreditsManagement' ? 'active-tab' : ''}
                        >
                            Credits Management
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} md={10}>
                    {activeTab === 'Overview' && (loadingStats ? <CenteredSpinner />
                        : <SummaryCard data={stats} onRefresh={() => dispatch(getDashboardStats())} />)}
                    {activeTab === 'Customer' && (loadingCustomer ?
                        <CenteredSpinner />
                        : <CustomerTable data={customers} />)}
                    {activeTab === 'CreditsManagement' && (loadingCustomer ?
                        <CenteredSpinner />
                        : <CreditManagement data={customers} onRefresh={() => dispatch(getCustomers())} />)}
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;
