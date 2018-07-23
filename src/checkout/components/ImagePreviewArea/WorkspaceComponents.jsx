import React from 'react';

const Information = (props) => {
    return (
        <div className="WorkspaceInformation">
            <div className="WorkspaceName">{props.name}</div>
            <div className="WorkspacePrice">
                <div className="Price">{props.price} GBP</div>
                <div className="Duration">{props.duration}</div>
            </div>
        </div>
    );
};

const Meta = (props) => {
    return (
        <div className="WorkspaceMeta">
            <div className="Description"> Entire office for <strong>{props.people}</strong></div>
            <div className="Dates"><strong>Mon, July 23 2018</strong> to <strong>Fri, July 30, 2018</strong></div>
        </div>
    );
};

export {
    Information,
    Meta
};