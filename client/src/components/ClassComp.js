import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";



class ClassComp extends Component {
    state = { test: 0 };
    RRR = null;
    getRRR = () => { console.log("get - RRR",this.RRR); };
    setRRR(){ console.log("set - RRR",this.RRR); }

    shouldComponentUpdate (nextProps, nextState){
        console.log('Class Comp should',this.props, '\n', nextProps, '\n', this.state, '\n', nextState);
        console.log('Class Comp shouldC',this.props === nextProps);
        console.log('Class Comp shouldC',this.props.match === nextProps.match);
        console.log('Class Comp shouldC',this.props.location === nextProps.location);
        console.log('Class Comp shouldC',this.props.history === nextProps.history);

        return true;
    }

 render() {
     console.log ('Class Comp RENDER', this);


     return (
   <div>
        Class Comp!
       <span  onClick={() => this.setState( (state, props)=>({test:state.test + 1}) ) }
       > CLICK </span>
       <div>
           <NavLink to={`/test`}>To Test</NavLink>
       </div>

   </div>
  );
 }
}

const mapStateToProps = state =>({
    reduxState: Object.assign({urlKey:""},state).shop
});

export default connect(mapStateToProps)(ClassComp);