import React from 'react';

export default function Item(props) {
    return (
        <div className="item">
            <a
                className="item-img"
                target="_blank"
                rel="noreferrer"
                href={props.item.external_urls.spotify}>
                <img
                    src={
                        props.item.album.images !== undefined &&
                        props.item.album.images.length > 0
                            ? props.item.album.images.slice(-1)[0]['url']
                            : props.genericImg
                    }
                    alt="Track"
                />
            </a>

            <a
                target="_blank"
                rel="noreferrer"
                href={props.item.external_urls.spotify}>
                {props.item.name}
            </a>
        </div>
    );
}
