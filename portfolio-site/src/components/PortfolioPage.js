import React from 'react';
import { Link } from 'react-router-dom';

const EditExpensePage = (props) => {
    const id = props.match.params.id;
    if (id) {
        return (
            <div>
                Viewing portfolio {id}.
            </div>
        );
    }
    const items = ['one', 'two'];
    return (
        <div>
            {items.map((item) => <p key={item}><Link to={`portfolio/${item}`}>{item}</Link></p>)}
        </div>
    )
};

export default EditExpensePage;