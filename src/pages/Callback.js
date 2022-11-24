import React, { useEffect, useContext } from 'react';
import { getToken } from '../utils/utils';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    /**
     * Get url params
     * Create URLSearchParmas (Allready x-www-form-urlencoded)
     * grant_type : Use Authorization code (with PKCE) to get more access.
     *  */
    let params = new URLSearchParams(document.location.search),
        code = params.get('code'),
        searchParamsBody = new URLSearchParams({
            code: code,
            redirect_uri: 'http://localhost:3000/callback',
            grant_type: 'client_credentials',
        }),
        body = searchParamsBody.toString();

    /**
     * Payload
     * & Authenticate with Uriencoded client_id & client secret for spotify token
     */
    let payload = {
        method: 'POST',
        body: body,
        headers: {
            Authorization:
                'Basic ' +
                window.btoa(
                    unescape(
                        encodeURIComponent(
                            process.env.REACT_APP_SPOTIFY_CLIENT_ID +
                                ':' +
                                process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                        )
                    )
                ),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        json: true,
    };

    useEffect(() => {
        let fetch = async () => {
            let token = await getToken(payload);
            setUser(token);
            navigate('/');
        };
        fetch();
    }, []);

    return (
        <div>
            <p>
                You will soon be redirected. If not, press <a href="/">Here</a>
            </p>
        </div>
    );
}
