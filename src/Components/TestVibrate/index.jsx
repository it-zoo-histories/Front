import React, {Component} from 'react';

class TestVibrate extends Component{
    render = () => {
        return (
            <div className="test_vibrate_container">
                {
                    window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100])
                }
            </div>
        )
    }
}
export default TestVibrate;