import React from 'react';
import Barrenav from './Barrenav';

export default function Main(props) {
const { children } = props;
    return (
        <div>
            <Barrenav />
            {children}
        </div>
        );
}
    


