// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import PrivateRoute from './components/PrivateRoute';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import EditProperty from './components/EditProperty';
import PaymentList from './components/PaymentList';
import AddPayment from './components/AddPayment';
import EditPayment from './components/EditPayment';
import TenantsList from './components/TenantsList';
import EnergyPurchasesList from './components/EnergyPurchasesList';
import UserList from './components/UserList';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/tenants">Tenants</Link>
            <Link to="/energy-purchases">Energy Purchases</Link>
            <Link to="/users">Users</Link>
        </nav>
    );
};

const App = () => {
    const [refresh, setRefresh] = useState(false);

    // Optional: Fetch user data or other necessary info
    useEffect(() => {
        fetch('/api/users/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>Estate and Energy Management System</h1>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={RegisterUser} />

                    {/* Property Management Routes */}
                    <Route path="/properties" component={PropertyList} />
                    <Route path="/add-property" component={AddProperty} />
                    <Route path="/edit-property/:id" component={EditProperty} />

                    {/* Payment Management Routes */}
                    <Route path="/payments" component={PaymentList} />
                    <Route path="/add-payment" component={AddPayment} />
                    <Route path="/edit-payment/:id" component={EditPayment} />

                    {/* Tenants and Energy Purchase Routes */}
                    <Route path="/tenants" component={TenantsList} />
                    <Route path="/energy-purchases" component={EnergyPurchasesList} />

                    {/* User List Route */}
                    <PrivateRoute path="/users">
                        <UserList />
                    </PrivateRoute>

                    {/* Fallback for unmatched routes */}
                    <Route path="*" render={() => <h2>Page Not Found</h2>} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
