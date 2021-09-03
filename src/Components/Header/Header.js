import React from 'react'
import { HeaderContainer } from './style'
import logo from '../../assets/images/netflix-logo.png'
import userLogo from '../../assets/images/netflix-avatar.png'

const Header = () => {
    const [background, setBackground] = React.useState('transparent')

    React.useEffect(() => {
        const setBlackBackground = () => {
            if(window.scrollY > 12){
                setBackground('#141414')
            } else {
                setBackground('transparent')
            }
        }
        window.addEventListener('scroll', setBlackBackground)
    }, [])

    return (
        <HeaderContainer background={background}>
            <div>
                <a href="/">
                <img src={logo} alt="Netflix Logo" />
                </a>
            </div>
            <div>
                <img src={userLogo} alt="User Logo" />
            </div>
        </HeaderContainer>
    )
}

export default Header
