import React, {Component, Fragment} from 'react';

import CellContainer from '../components/Cell/CellContainer';
import CellDetails from '../components/Details';

class MainPage extends Component {
    render() {
      return (
        <Fragment>
            <CellContainer/>
            <CellDetails/>
        </Fragment>
      );
    }
  }
  
  export default MainPage;