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
        this.fetchingData = this.fetchingData.bind(this);
      }

      onclick(event){

        switch(event.target.id){
                case 'whyUs':
                    
                break;

                case 'client':
                   
                 break;

                case 'advocate':
                    
                    this.fetchingData()
                    panelBtnChanger("floatUp 2s forwards", "logoDash 1s forwards")
                    truePanel_falseButtonSet_handler(true)
                    console.log(`se cambia el store a: ${store.getState().truePanel_falseButtonBoolean}`)

                    break;
        }
    }

    render(){
        
        return(
        <>
    <button id={this.props.id} type="button" onClick={this.onclick} className="btn btn-secondary d-block mb-3 w-100" style={{width: "60%"}}>{this.props.btnLabel} {this.props.items}</button>
        </>

    ) ;}

    fetchingData(){
        fetch('https://hn.algolia.com/api/v1/search?query=redux')
        .then(response => response.json())
        .then(data => {injectFetchedData(data.hits[0].title); console.log(store.getState().fetchedData)})
        
    }

} 


Button.propTypes = {
    btnLabel: PropTypes.string
  };

  const mapStateToProps = (state) => {
    return { items: state.fetchedData };
  };

  export default connect(mapStateToProps)(Button);