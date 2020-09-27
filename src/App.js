import React from 'react';
import './App.css';
import {NavbarMenu} from "../../my-news-app/src/components/NavbarMenu";
import {Header} from "../../my-news-app/src/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {Article} from "./components/Article";
import {Alert} from "react-bootstrap";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            category: 'health',
            country: 'ro',
            keyword: '',
            messages: {text: '', severity: ''}
        };
        this.fetchURL = this.fetchURL.bind(this);
        this.changeStateByCategory = this.changeStateByCategory.bind(this);
        this.changeStateByCountry = this.changeStateByCountry.bind(this);
        this.changeStateByKeyword = this.changeStateByKeyword.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    fetchURL() {
        //const URL = 'http://newsapi.org/v2/top-headlines?country=ro&category=health&apiKey=e1a19ce0bb6343058575dcb72bb50b19';
        const URL = `http://newsapi.org/v2/top-headlines?${this.state.keyword}country=${this.state.country}&category=${this.state.category}&apiKey=3e0c0141320d40618f2f100434a90b04`;
        console.log(URL);
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({
                data: data,
                messages: {text: 'Fetch successfully done!', severity: 'info'}
            }))
            .catch(error => this.setState({
                messages: {text: error.toString(), severity: 'danger'}
            }))
    }

    changeStateByCategory(category) {
        this.setState({
            category: `${category}`,
            keyword: ''
        });
        setTimeout(()=>this.fetchURL(),50);
    }

    changeStateByCountry(country) {
        this.setState({
            country: `${country}`,
            keyword: ''
        })
        setTimeout(()=>this.fetchURL(),50);
    }

    changeStateByKeyword(keyword) {
        this.setState({
            category: '',
            country: '',
            keyword: `${keyword}`
        })
        setTimeout(()=>this.fetchURL(),50);
    }

componentDidMount(){
        this.fetchURL();
}

    saveData(item) {
        const fetchURL = `http://localhost:8080/news/post/`;


        fetch(fetchURL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <NavbarMenu
                    onClickCategory={this.changeStateByCategory}
                    onClickCountry={this.changeStateByCountry}
                    onClickSearch={this.changeStateByKeyword}
                />
                { this.state.messages &&
                <Alert variant={this.state.messages.severity}>
                    {this.state.messages.text}
                </Alert>
                }
                {
                    this.state.data &&
                    <Article
                        data={this.state.data}
                        saveData = {this.saveData}
                    />
                }
            </div>
        );
    }
}

export default App;
