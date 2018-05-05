import React, {Component} from 'react';
import logo from './logo.gif';
import './App.css';
import componentArray from './componentArray'
import Markdown from './components/Markdown'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import LeftMenu from './LeftMenu'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to EUI</h1>
                    </header>
                    <div className="App-content">
                        <Route><LeftMenu/></Route>
                        {componentArray.map(({name, title, ExampleComponent, ReadMe}) => <Route
                            path={`/components/${name}`} exact key={name} render={() => <div>
                            <Markdown>{ReadMe}</Markdown>
                            <h3>Example</h3>
                            <ExampleComponent/>
                        </div>}/>)}
                        <Redirect to={`/components/${componentArray[0].name}`}/>
                    </div>
                    <footer className="App-footer">
                        上海逸橙信息科技有限公司 Copyright ©
                    </footer>
                </div>
            </HashRouter>
        );
    }
}

export default App;
