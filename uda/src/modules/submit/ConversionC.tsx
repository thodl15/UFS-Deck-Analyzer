import * as React from 'react';

import Presentation from './ConversionP';

export class ConversionContainer extends React.Component {
    constructor(props : any) {
        super(props);
    }
    
    render() {
        return (
            <Presentation/>
        );
    }
}