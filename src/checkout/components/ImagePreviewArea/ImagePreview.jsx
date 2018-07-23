import React from 'react';
import * as Workspace from './WorkspaceComponents';

export default class ImagePreview extends React.Component {
    render() {
        return (
            <div
                className="ImagePreview"
                style={{ backgroundImage: 'url(' + this.props.image + ')' }}
            >
                <div className="WorkspaceOverview">
                    <Workspace.Information
                        name="Coworking Space, South Korea"
                        price={this.props.price}
                        duration="1"
                    />
                    <Workspace.Meta people={this.props.prople} />
                </div>
            </div>
        );
    }
}
