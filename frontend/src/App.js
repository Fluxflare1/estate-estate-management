import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import PropertyComponent from './components/PropertyComponent';
import PaymentComponent from './components/PaymentComponent';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/users" component={UserComponent} />
                <Route path="/properties" component={PropertyComponent} />
                <Route path="/payments" component={PaymentComponent} />
            </Switch>
        </Router>
    );
}

export default App;
import React from 'react';
import UserComponent from './components/UserComponent';
import PropertyComponent from './components/PropertyComponent';
import PaymentComponent from './components/PaymentComponent';

function App() {
    return (
        <div>
            <UserComponent />
            <PropertyComponent />
            <PaymentComponent />
        </div>
    );
}

export default App;
import React from 'react';
import UserComponent from './components/UserComponent';
import PropertyComponent from './components/PropertyComponent';

const App = () => {
    return (
        <div>
            <UserComponent />
            <PropertyComponent />
        </div>
    );
};

export default App;
