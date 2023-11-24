import React from 'react'

import './TestComponent.scss'

type Props = {
    theme: string;
};

const TestComponent = (props: Props) => {
    return (
        <div>
            TestComponent
            {props.theme}
        </div>
    )
}

export default TestComponent