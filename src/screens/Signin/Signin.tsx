import React from 'react'
import {
    Container,
    Wrapper,
    Title,
    SigninTitle,
    SocialButton,
    SocialButtonText,
    Footer,
    Header,
    LogoContainer,
    LogoText,
    IconContainer,
    FooterWrapper

} from './SigninStyles'
import AppleSvg from '../../assets/icons/apple.svg'
import GoogleSvg from '../../assets/icons/google.svg'
import LogoSvg from '../../assets/icons/logo.svg'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Alert } from 'react-native'



export function Signin() {

    const { user, signWhitGoogle } = useContext(AuthContext)

    async function handleSignWhitGoogle() {
        try {
            await signWhitGoogle()

        } catch (error) {
            console.log(error)

            Alert.alert('Google não canto')

        }
    }

    return (
        <Container>
            <Header>


                <Wrapper>

                    <LogoContainer>
                        <LogoSvg
                            height={34}
                            width={34}
                        />
                        <LogoText>gofinances </LogoText>

                    </LogoContainer>

                    <Title>
                        Controle suas  {'\n'}
                        finanças de forma  {'\n'}
                        muito simples
                    </Title>

                    <SigninTitle>
                        Faça seu login com  {'\n'}
                        uma das contas abaixo
                    </SigninTitle>
                </Wrapper>

            </Header>
            <Footer >

                <FooterWrapper>
                    <SocialButton onPress={handleSignWhitGoogle}>
                        <IconContainer>
                            <GoogleSvg
                                height={24}
                                width={24}
                            />

                        </IconContainer>
                        <SocialButtonText>Entrar Com o Gooogle</SocialButtonText>
                    </SocialButton>

                    <SocialButton>
                        <IconContainer>
                            <AppleSvg
                                height={24}
                                width={24}
                            />
                        </IconContainer>
                        <SocialButtonText>Entrar Com o Apple</SocialButtonText>

                    </SocialButton>
                </FooterWrapper>



            </Footer>




        </Container>

    )
}