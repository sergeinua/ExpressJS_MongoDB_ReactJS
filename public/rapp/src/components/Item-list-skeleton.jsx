import React, { Component } from 'react';

class ItemListSkeleton extends Component {
    render() {
        return (
            <div>
                <div className="SkeletonListingCards">
                    <div className="SkeletonListingCard">
                        <div className="SkeletonListingCard-photo"></div>
                        <div className="SkeletonListingCard-content">
                            <div className="Container Container-md" style={{margin:'auto'}}>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'40%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'60%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SkeletonListingCards">
                    <div className="SkeletonListingCard">
                        <div className="SkeletonListingCard-photo"></div>
                        <div className="SkeletonListingCard-content">
                            <div className="Container Container-md" style={{margin:'auto'}}>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'40%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'60%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SkeletonListingCards">
                    <div className="SkeletonListingCard">
                        <div className="SkeletonListingCard-photo"></div>
                        <div className="SkeletonListingCard-content">
                            <div className="Container Container-md" style={{margin:'auto'}}>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'40%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'60%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SkeletonListingCards">
                    <div className="SkeletonListingCard">
                        <div className="SkeletonListingCard-photo"></div>
                        <div className="SkeletonListingCard-content">
                            <div className="Container Container-md" style={{margin:'auto'}}>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'40%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'60%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SkeletonListingCards">
                    <div className="SkeletonListingCard">
                        <div className="SkeletonListingCard-photo"></div>
                        <div className="SkeletonListingCard-content">
                            <div className="Container Container-md" style={{margin:'auto'}}>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'40%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'60%'}}></div>
                                </div>
                                <div className="Row">
                                    <div className="SkeletonLine" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemListSkeleton;