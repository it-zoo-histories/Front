export const API_BASE_URL = 'http://it-zoo.pro:8080';
<<<<<<< HEAD
export const API_BASE_ROUTER = "http://it-zoo.pro:8888/";
=======

export const API_BASE_ROUTER = "https://it-zoo.pro:8443";
>>>>>>> ref

export const ACCESS_TOKEN = "access_token";

export const OAUTH2_REDIRECT_URI = 'https://it-zoo.pro/oauth2/redirect';

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const API_SendCurrentPosition = API_BASE_ROUTER + "/points"
