import React, {Component} from 'react';

class Form extends Component{
    configureField = (name, previewName, actor, index) => {
        return (
            <div className="field_section" key={index}>
                <div className={"field_" + name + "_name"}>{previewName}</div>
                <div className={"field_" + name + "_handler"} action={actor}/>
            </div>
            
        )
    }

    render = () => {
        const {fields} = this.props.fields;

        return (
            <div className="form_container">
                {
                    fields != null ?
                    fields.map((field, index) => {
                        this.configureField(field.name, field.previewName, field.actor, index)
                    })
                    :
                    <div className="error_creating">Error of generation form</div>
                }        
            </div>
        )
    }
}

export default Form;