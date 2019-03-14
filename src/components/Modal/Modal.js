import React from 'react';
import classes from './Modal.module.scss';

const modal = props => {
    return (
        <div className={ classes.backdrop }>
            <div className={ classes.modal }>
                <span className={ classes.close } onClick={ props.onClose }>&times;</span>
                { props.children }
            </div>
        </div>
    )
}

export default modal
