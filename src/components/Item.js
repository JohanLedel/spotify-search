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
                    alt="Artist"
                    src={
                        props.item.images !== undefined &&
                        props.item.images.length > 0
                            ? props.item.images.slice(-1)[0]['url']
                            : props.genericImg
                    }
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
