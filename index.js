import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Cards.jsx'
import './index.css';
import Sdata from './Sdata.jsx';
 
function ncard(val){
return(
    <Card
        title={val.title}
        imgsrc={val.imgsrc}
        sname={val.sname}
        link={val.link}
    />
);
}

ReactDOM.render(
    <>
    <h1 className='heading_style'>List of top Netflix series in 2020</h1>
    
     {Sdata.map(ncard)}
    </>,
     document.getElementById('root')
);                   