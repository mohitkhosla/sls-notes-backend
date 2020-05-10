const getUserId = (headers) => {
    return headers.app_user_id;
}

const getIdToken = (headers) => {
    return headers.Authorization;
}

const getUserName = (headers) => {
    return headers.app_user_name;
}

const getResponseHeaders = () => {
    return {
        'Access-Control-Allow-Origin': '*'
    }
}

module.exports = {
    getUserId,
    getIdToken,
    getUserName,
    getResponseHeaders
}