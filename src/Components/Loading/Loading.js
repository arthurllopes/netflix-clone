import React from 'react'
import { LoadingContainer } from './style'
import loading from '../../assets/images/netflix-loading.gif'

const Loading = () => {
    return (
        <LoadingContainer>
            <div>
                <img src={loading} alt="Loading" />
            </div>
        </LoadingContainer>
    )
}

export default Loading
