import React, {Component} from 'react';

import './style.scss';

class Form extends Component{
    configureField = (name, previewName, actor, index) => {
        let param = ``;

        console.log(param)
        return (
            <div className="field_section" key={index}>
                <div className={"field_" + name + "_name"}>{previewName}</div>
                <input className={"field_" + name + "_handler"} action={actor} onChange={this.props.ActionsEntry}/>
            </div>
        )
    }

    render = () => {
        console.log(this.props);
        const {fields} = this.props;

        return (
            <div className="form_container">
                {
                    fields != null ?
                    fields.map((field, index) => {
                        return (
                            this.configureField.bind(this)(field.name, field.previewName, field.actor, index)
                        )
                    })
                    :
                    <div className="error_creating">Error of generation form</div>
                }        
            </div>
        )
    }
}

export default Form;