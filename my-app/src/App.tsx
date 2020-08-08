import React from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'
/*  Redux Part    */
import { Provider } from 'react-redux';
import { store } from './Store';
import ViewAllCategoryComponent  from './viewallcategory-component/ViewAllCategoryContainer'


class App extends React.Component<any, any> 
{
  // use State hook

  // function components just return (jsx)
  render() {
    return (
      <div className="App">
        {/* to connect to the redux store,
      the component must be inside of the provider */}
        <Provider store={store}>
          <Router>         
          <Switch>
              <Route path='/allcategories' component={ViewAllCategoryComponent} />
           
        </Switch>

          </Router>
        </Provider>
      </div>
    );
  }
}


export default App;
