// frontend/src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import EditProperty from './components/EditProperty';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/properties" component={PropertyList} />
        <Route path="/add-property" component={AddProperty} />
        <Route path="/edit-property/:id" component={EditProperty} />
      </Switch>
    </Router>
  );
}

export default App;
// frontend/src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={LoginUser} />
      </Switch>
    </Router>
  );
}

export default App;
useEffect(() => {
    fetch('/api/users/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setUsers(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}, []);
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/users">Users</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/payments">Payments</Link>
        </nav>
    );
}
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
