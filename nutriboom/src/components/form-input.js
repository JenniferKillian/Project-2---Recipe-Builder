import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

export default function FormInput(props) {
    let type = props.type;
    let name = props.name;
    let display; 
    let style = props.style;
    
    // If you'd like to display something other than props.name, define this value as a prop.

    if (props.display == undefined) {
        display = name;
    } else {
        display = props.display;
    }
    
    // Only use these if the type property is "radio2".
    let checked;
    let val1;
    let val2;

    if (type == "radio2") {
        //checked = props.checked;
        val1 = props.val1;
        val2 = props.val2;
    }

    const handleChange = props.handleChange;
    const dispatch = useDispatch();

    useEffect(() => {

    }, [type])
    
    if (type == "textarea") {
        return (
            <div className="col-sm">
                <label>{display}: </label>
                <textarea name={name} onChange={handleChange}></textarea>
            </div>
        )
    } else if (type == "ingredient") {
        return (
            <div>
            <div className="col-sm">
                <label>{display}: </label>

                <input style={{width: '180px'}} type="number" name="amount" placeholder="How many/much?" onChange={handleChange} />
                <select name="unit" onChange={handleChange}>
                        <option value="unit" defaultValue={true}>unit</option>
                            <option value="count">count</option>
                            <option value="tsp">tsp(s)</option>
                            <option value="Tbsp">Tbsp(s)</option>
                            <option value="cups">cup(s)</option>
                            <option value="pints">pint(s)</option>
                        </select>
                </div>
                <div className="col-sm">
                <input style={{width: '250px'}} type="text" name={name} placeholder="Type an ingredient name" onChange={handleChange} />
                </div>
                <div className="col-sm">
                <input style={{width: '250px'}} type="text" name="calories" placeholder="How many calories?" onChange={handleChange} />
                </div>
            </div>
        )
    } else if (type == "ingredientAmountInSearch") {
            return (
                <div>
                <div className="col-sm">
                    <label>{display}: </label>
    
                    <input style={{width: '180px'}} type="number" name="amount" onChange={handleChange} />
                    <select name="unit" onChange={handleChange}>
                            <option value="unit" defaultValue={true}>unit</option>
                                <option value="count">count</option>
                                <option value="tsp">tsp(s)</option>
                                <option value="Tbsp">Tbsp(s)</option>
                                <option value="cups">cup(s)</option>
                                <option value="pints">pint(s)</option>
                            </select>
                    
                    </div>
                </div>
            )
    } else if (type == "radio2") {
        return (
            <div className="col-sm">

                <input type="radio" name={name} value={val1} checked={checked} onChange={handleChange} defaultChecked={true}/>

                <label htmlFor={name}>{val1}: </label>                
                <input type="radio" name={name} value={val2} checked={checked} onChange={handleChange}/>
                <label htmlFor={name}>{val2}: </label>
            </div>
        )
    } else if (type == "photo") {
        return (
            <div className="col-sm">
                
            </div>
        )
    }
    else {
        return (
            <div className="col-sm">
                <label>{display}: </label>
                <input type={type} name={name} onChange={handleChange} style={style}/>
            </div>
        )
    }
}