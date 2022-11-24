import React from 'react';
import ListItemTrack from './ItemTrack';
import ListItem from './Item';
import genericImg from '../generic-album.jpg';

export default function list(props) {
    /**
     *  Use correct (Item)component based on the data type(artist, track...)
     * @returns Component
     */
    let Item = (data, type, genericImg) => {
        switch (type) {
            case 'tracks':
                return <ListItemTrack item={data} genericImg={genericImg} />;
            case 'albums':
                return <ListItem item={data} genericImg={genericImg} />;
            case 'artists':
                return <ListItem item={data} genericImg={genericImg} />;
            case 'playlists':
                return <ListItem item={data} genericImg={genericImg} />;
            default:
                return null;
        }
    };

    return (
        <details className="details-animated" open>
            <summary className="type-title">
                <h2>{props.type.toUpperCase()}</h2>
            </summary>
            <div className="list">
                {props.items.items.map((item) => {
                    return Item(item, props.type, genericImg);
                })}
            </div>
        </details>
    );
}
