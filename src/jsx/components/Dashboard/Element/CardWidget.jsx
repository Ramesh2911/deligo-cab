import React from 'react';

const CardWidget = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="media align-items-center">
                    <div className="media-body me-3">
                        <h2 className="fs-34 text-black font-w600">{props.number}</h2>
                        <span>{props.subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWidget;