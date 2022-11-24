import React from 'react';
import List from './List';

export default function SearchResults(props) {
    return (
        <div className="results-container">
            {Object.keys(props.data).map((type, index) => {
                return <List items={props.data[type]} type={type} />;
            })}
        </div>
    );
}
