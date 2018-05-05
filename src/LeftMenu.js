import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import componentArray from './componentArray'

export default class extends Component{
    render(){
        return <div className="App-menu">
            <div className="App-menu__title">组件列表</div>
            <div className="App-menu__list">
                {componentArray.map(({name,title})=><div key={name}>
                    <NavLink to={`/components/${name}`} activeClassName="active">{title} {name}</NavLink>
                </div>)}
            </div>
        </div>
    }
}
