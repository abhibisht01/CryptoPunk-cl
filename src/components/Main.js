import React, { useState, useEffect } from 'react'
import '../css/main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = ({ selectedPunk, punkListData }) => {

    const [ActivePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])


    }, [punkListData, selectedPunk]);

    return (
        <div className='main'>
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src={ActivePunk.image_original_url} className='selectedPunk' alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ color: "#fff" }}>
                    <div className="title">{ActivePunk.name}
                        <span className="itemNumber">#{ActivePunk.token_id}</span>
                    </div>
                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={ActivePunk.owner.profile_img_url} className='selectedPunk' alt="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameHandle">
                                <div>{ActivePunk.owner.address}</div>
                                <div className='ownerHandle'>Bisht.abhishek77@gmail.com</div>
                            </div>
                            <div className="ownerlink">
                                <img src={instagramLogo} alt="" />
                            </div>
                            <div className="ownerlink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerlink">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
