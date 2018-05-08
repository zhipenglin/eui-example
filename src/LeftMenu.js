import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import componentArray from './componentArray'

export default class extends Component{
    render(){
        return <div className="App-menu">
            <div className="App-menu__title">组件列表</div>
            <div className="App-menu__list">
                {componentArray.map(({name,title})=><div key={name}>
                    <NavLink to={`/components/${name}`} activeClassName="active">{title} {name}</NavLink>
                </div>)}
                <div className="App-menu__hr"/>
                <NavLink to="/report" activeClassName="active">单元测试报告</NavLink>
            </div>
        </div>
    }
}
