import React, { useContext } from 'react';
import { UserContext } from '../App';

export default function () {
    const { user, setUser } = useContext(UserContext),
        signOut = () => {
            setUser(null);
        },
        redirect_uri =
            'https://spotify-search-teal.vercel.app/callback',
        redirect_uri_dev = 'http://localhost:3000/callback',
        authorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${redirect_uri}`;

    return (
        <nav className="header">
            <h2>Spotify search</h2>
            {user ? (
                <button className="btn btn--logout" onClick={() => signOut()}>
                    LOG OUT
                </button>
            ) : (
                <a className="btn btn--login" href={authorizeUrl}>
                    LOG IN
                </a>
            )}
        </nav>
    );
}
