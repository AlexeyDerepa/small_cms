import React, {Component, Fragment} from 'react';

import CellContainer from '../components/cell/cellContainer';
import CellDetails from '../components/details/cellDetails';

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