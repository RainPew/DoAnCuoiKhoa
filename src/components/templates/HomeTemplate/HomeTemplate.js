import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Route } from "react-router-dom";
import Header from "../../Header";



export default function HomeTemplate(props) { 
    // truyền cho nó path và component
    
    return <Fragment>
        <Route exact path = {props.path} render={(propsRoute) => {
            return <Fragment>
                 <Header/>
                 <props.component {...propsRoute}/>
            </Fragment>
        }} />
    </Fragment>
}