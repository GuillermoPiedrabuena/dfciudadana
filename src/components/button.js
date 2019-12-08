import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {store} from '../redux/store.js';
import {injectFetchedData} from '../redux/dispatchers.js';
import {panelBtnChanger} from '../redux/dispatchers.js';
import {truePanel_falseButtonSet_handler} from '../redux/dispatchers.js';


export class Button extends React.Component{
    constructor(props) {
        super(props);
        this.onclick = this.onclick.bind(this);
        /*this.fetchingData = this.fetchingData.bind(this);*/
      }

      onclick(event){

        switch(event.target.id){
                case 'whyUs':
                    
                break;

                case 'client':
                    panelBtnChanger("floatUp 2s forwards", "");
                    setTimeout(()=>{truePanel_falseButtonSet_handler(true)}, 3000);
                 break;

                case 'advocate':
                    panelBtnChanger("floatUp 2s forwards", "logoDash 1s forwards")
                    setTimeout(()=>{truePanel_falseButtonSet_handler(true)}, 900);
                    break;
        }
    }

    /*fetchingData(){
        fetch('https://hn.algolia.com/api/v1/search?query=redux')
        .then(response => response.json())
        .then(data => {injectFetchedData(data.hits[0]._tags); console.log(`este es el store luego del fetch: ${store.getState().fetchedData}`)})
        
    }*/

    render(){
        
        return(
        <>
    <button id={this.props.id} type="button" onClick={this.onclick}
    className="btn btn-secondary d-block mb-3 w-100" style={{width: "60%"}}>
        {this.props.btnLabel}
        </button>
        </>

    ) ;}

    

} 


Button.propTypes = {
    btnLabel: PropTypes.string
  };

  const mapStateToProps = (state) => {
    return { items: state.fetchedData };
  };

  export default connect(mapStateToProps)(Button);