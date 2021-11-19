import React from 'react';

import Button from './Button'

const TaskDetails = () => {
    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ad minima neque dignissimos minus molestiae!</p>
            </div>
        </>
     );
}
 
export default TaskDetails;