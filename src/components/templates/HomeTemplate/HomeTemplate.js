import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Route } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent";



export default function HomeTemplate(props) { 
    // truyền cho nó path và component
    
    return <Fragment>
        <Route exact path = {props.path} render={(propsRoute) => {
            return <Fragment>
                 <HeaderComponent/>
                 <props.component {...propsRoute}/>
            </Fragment>
        }} />
    </Fragment>
}