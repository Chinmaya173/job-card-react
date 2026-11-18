import React from 'react'
import {Bookmark} from 'lucide-react'


const Card  = (props) => {
  console.log(props)
  return (
        <div className="card"> 
             <div>  
                <div className="top">
                <img src={props.logo} alt={props.companyName} />
                <button>Save  <Bookmark  size={12} /> </button>
             </div>
                <div className="centre">
                  <h3>{props.companyName} <span>{props.datePosted}</span> </h3>  
                  <h2>{props.post}</h2>
                  <div className="tag">
                    <h4>{props.tag}</h4>
                    <h4>{props.tag2}</h4>
                  </div>
                </div>
             </div>
                <div className="bottom">
                    <div>
                   <h3>{props.pay}</h3>
                   <h4>{props.location}</h4>
                   </div>
                   <button>Apply now</button>
                </div>
        </div>
  )
}

export default Card;