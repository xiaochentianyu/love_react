import React from 'react'
import ContentEditable from 'react-contenteditable'

// const Edi = props => props.flag ? <ContentEditable html = {`<h2 data-${ props.id }> ${ props.text } </h2>`} onChange = { props.change }/> : <h2> { props.text } </h2 > ;

const Edi = props => props.flag ? props.text.map((i,index) => <ContentEditable html={`<h2 data-${props.id}> ${i} </h2>`} key={index} onChange={props.change.bind(this,index)} />): props.text.map((i,idx) => <h2 key={ idx }>{i}</h2>);




export default Edi;