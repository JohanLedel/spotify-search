/**
 * Get url params
 * Create URLSearchParmas (Allready x-www-form-urlencoded)
 * grant_type : Use Authorization code (with PKCE) to get more access.
 *  */

/**
 * Query spotify api
 * @param {string} searchString
 * @param {string} token
 * @returns
 */
export async function search(searchString, token) {
    return fetch(
        `https://api.spotify.com/v1/search?q=${searchString}&type=album,track,artist,playlist&market=SE`,
        {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        });
}

export async function getToken(payload) {
    return fetch('https://accounts.spotify.com/api/token', payload)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

/**
 * Change grant_type to Authorization code with PKCE to use this
 **/
export async function getProfile(token) {
    return fetch(`https://api.spotify.com/v1/me`, {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        });
}
