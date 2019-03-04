import React from 'react';
import { ClipLoader } from 'react-spinners';


export default class Spinner extends React.Component {
    render() {
        return (
            <div className='sweet-loading'>
                <ClipLoader
                    sizeUnit={"px"}
                    size={120}
                    color={"pink"}
                    loading={true}
                />
            </div>
        )
    }
}