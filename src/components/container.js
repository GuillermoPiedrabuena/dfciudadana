import React from 'react';
import { connect } from 'react-redux';
import {store} from '../redux/store.js';




export class Container extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
  return(  <>
            <div className={"d-flex"+ this.props.colOrRow} style={{paddingTop: "25%" ,visibility: "hidden", animation: store.getState().show, position: "absolute"}}> {/* colOrRow permite poner el contenedor flex vertical o horizontal */}
            {this.props.children}
            </div>
            </>    
    
  );
  }
}

const mapStateToProps = (state) => {
    return { items: state.fetchedData, items2: state.show };
  };
  
  export default connect(mapStateToProps)(Container);