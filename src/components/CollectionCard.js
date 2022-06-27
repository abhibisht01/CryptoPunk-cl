import React from 'react'
import '../css/collectioncard.css'
import wethImage from '../assets/weth.png'


const CollectionCard = ({ id, name, traits, image }) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt="" />
            <div className="details">
                <div className="name">
                    {name} <div className="id"> #{id}</div>
                </div>
                <div className="priceContainer">
                    <img className="wethImage " src={wethImage} alt="" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard