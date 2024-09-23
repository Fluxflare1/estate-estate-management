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
