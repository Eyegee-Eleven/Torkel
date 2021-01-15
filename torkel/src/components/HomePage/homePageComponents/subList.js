import React from 'react'
import { StateContext } from '../../../State'
import './subList.css'




export default function SubList() {
    let { HomepageListing } =React.useContext(StateContext)

    return (
        <div className="content">
          {Object.keys(HomepageListing).map(ListingGroup => {
              return(
              <div className='individualBox'>
                <h4 className = 'titleBox' id= 'title'>{HomepageListing[ListingGroup].title}</h4>
                <ul className='list_items'>
                  { HomepageListing[ListingGroup].listings.map(listing => <div>{listing}</div>)}
                </ul>
              </div>              
              )
          })}
        </div>
    )
}
