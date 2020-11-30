import React from 'react'
import AppFrame from './AppFrame'

export default {
    title: 'AppFrame',
    component: AppFrame
}



export const AppFrameExample = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppFrame value={value} changeValue={handleChange}>
            {
                !value ? 
                <div>tamos melos</div>:
                <h1>melos pero aca</h1>
            }
        </AppFrame>
    )
}