import {React,useState} from 'react'

function Card(props){
    function isPositive(number){
        if(number>0) return "positive";
        else return "negative";
    }
    return(
        <div className="card">
             {console.log(props.item)}
            <div  className="card-top">
                <h1>{props.item.symbol}</h1>
                <h2>{props.item.name}</h2>
                <h2>{props.item.quote.USD.price.toFixed(3)} $</h2>
            </div>
            <div  className="card-bottom">
                <h3>24h: <span className={isPositive(props.item.quote.USD.percent_change_24h)}>{props.item.quote.USD.percent_change_24h.toFixed(1)}%</span></h3> 
                <h3>7d: <span className={isPositive(props.item.quote.USD.percent_change_7d)}>{props.item.quote.USD.percent_change_7d.toFixed(1)}%</span></h3> 
            </div>
        </div>
    )
}

export default Card;