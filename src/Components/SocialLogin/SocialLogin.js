import {Component} from 'react';
import React from 'react';
import googleLogo from "../../assets/google-logo.png";
import fbLogo from "../../assets/fb-logo.png";
import githubLogo from "../../assets/github-logo.png";
import "./SocialLogin.css"
import {FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../Store/API/constants";

/**
 * Social panel of Login
 * @author kostya05983
 */
export default class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google"/> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook"/> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github"/> Log in with Github</a>
            </div>
        );
    }
}
