import React from 'react';
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import {generateIdForItems} from "../common/utils";
import CardDeck from "react-bootstrap/esm/CardDeck";

export const Article = (props) => {
    const {data} = props;
    const art = data.articles;
    const artWithId = generateIdForItems(art);
    console.log(artWithId);
    return (artWithId.map(item => {
        return (
                <div className={"App"} key={item.id}>
                    <Card className="CardLayout">
                        <Card.Img variant="top" src={item.urlToImage}/>
                        {/*<Card.Header> category of the news </Card.Header>*/}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>{`sursa: ${item.source.name} autor: ${item.author ? item.author : '-'}`}</p>
                                <p>{item.description}</p>
                            </Card.Text>
                            <Button variant="primary"><a href={item.url} className={"ReadMoreButton"}>Read More</a></Button>
                            <Button variant="secondary" className={"ArchiveButton"} onClick={()=>props.saveData(item)}>Archive</Button>
                        </Card.Body>
                    </Card>
                    <br/>
                </div>
        )})
        )
    }

    Article.defaultProps = {
        data: null,
        category: 'health',
        country: 'ro',
        keyword: ''
    }
