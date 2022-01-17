import { GetStaticProps } from 'next'
import { PropsWithChildren } from 'react'
import {
    FaCompactDisc,
    FaExternalLinkAlt,
    FaGithub,
    FaMusic,
    FaSteam,
    FaQq,
    FaTwitter,
    FaEnvelope,
} from 'react-icons/fa'
import { IoBulb, IoCloud, IoGitBranch, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import BackgroundHeader from '../public/assets/images/background-header.svg'
import Background from '../public/assets/images/background.svg'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header, ProfileNameStandout } from '../sections/header'

interface IndexPageProps {
    initialSteamPersonaName?: string
    steamPersonaNameUrl?: string
}

interface SteamApiResponse {
    response?: { players?: { personaname?: string }[] }
}

const fetchSteamPersonaName = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const result = (await response.json()) as SteamApiResponse
    const personaName = result.response?.players?.[0]?.personaname

    if (typeof personaName === 'string') {
        return personaName
    } else {
        throw new Error('Invalid response from Steam API')
    }
}

const IndexPage = ({ initialSteamPersonaName, steamPersonaNameUrl }: PropsWithChildren<IndexPageProps>) => (
    <div className="container">
        <Header profileName="MoeMagicMango">
            <div>
                <a href="https://imagic.run">
                    <LabelGroup icon={IoLink} title="Blog"></LabelGroup>
                </a>
            </div>
            <div>
                <LabelGroup icon={IoLanguage} title="languages">
                    <LabelItem>汉语</LabelItem>
                    <LabelItem>漢語</LabelItem>
                    <LabelItem>English</LabelItem>
                </LabelGroup>
                <LabelGroup icon={IoSchool} title="status">
                    <LabelItem>Just a student:D</LabelItem>
                </LabelGroup>
            </div>
        </Header>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>心之所向，素履以往</Paragraph>
                    <Paragraph>Ciallo～(∠・ω&lt; )⌒★</Paragraph>
                    <Paragraph>你好吖，这边是夹子</Paragraph>
                    <Paragraph>
                        一名学生，没有什么特别引入注意的地方 喜欢折腾一些喜欢的东西，或者尝试一些新的爱好w
                    </Paragraph>
                    <Paragraph>如果需要更多信息， 可以往下翻翻惹</Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="open-source">
                    <Account href="https://github.com/MoYoez" icon={FaGithub} title="GitHub">
                        MoYoez
                    </Account>
                </AccountList>
                <AccountList title="social network">
                    <Account href="https://music.163.com/#/user/home?id=555696683" icon={FaMusic} title="netease">
                        MoeMagicMango
                    </Account>
                    <Account href="https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes" icon={FaQq} title="QQ">
                        Lemon Flavours
                    </Account>
                    <Account href="https://twitter.com/lemonflavours" icon={FaTwitter} title="Twitter">
                        @amphineko
                    </Account>
                    <Account href="mailto:i@himoyo.cn" icon={FaEnvelope} title="mail">
                        I#HiMoYo.cn
                    </Account>
                </AccountList>
            </Column>
        </Block>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>
                        偏爱于一些独立游戏w
                        <br />
                        同时也是个音游玩家
                        <br />
                        (*/ω＼*)
                    </Paragraph>
                    <Paragraph>
                        <del className="deleted">或许?你可以看到我熬夜玩原神.jpg</del>
                    </Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="profiles">
                    <Account href="https://osu.ppy.sh/users/14730537" icon={FaCompactDisc} title="osu!">
                        MoYoez
                    </Account>
                    <Account href="https://steamcommunity.com/id/akirasweetz/" icon={FaSteam} title="Steam">
                        MoeMagicMango
                    </Account>
                </AccountList>
            </Column>
        </Block>

        <Footer>
            <FooterParagraph icon={IoGitBranch}>
                <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                    Fork this template on GitHub
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
            </FooterParagraph>
            <FooterParagraph icon={IoBulb}>Copyright © 2021-2022 HiMoYo.</FooterParagraph>
        </Footer>

        <style jsx>{`
            .container {
                background: url('${BackgroundHeader}') no-repeat;
                background-color: #aaa;
                background-size: cover;
                border-top-left-radius: 1rem;
                box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
                display: flex;
                flex-direction: column;
                max-width: 64em;
                margin: 0 auto;
            }

            .footer-link {
                color: inherit;
                text-decoration: none;
            }

            .footer-external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }

            .silent-link {
                color: inherit;
                text-decoration: none;
            }

            .deleted {
                color: #777;
            }
        `}</style>

        <style jsx global>{`
            body {
                background: url('https://cdn.jsdelivr.net/gh/VincentSHI1230/BTPanel-beautification@master/background/NekohaShizuku1.jpg')
                    no-repeat;
                background-color: #aaa;
                background-size: cover;
                font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                    'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                margin: 0;
                min-height: 100vh;
                padding: 1em 0;
            }
        `}</style>
    </div>
)

export default IndexPage

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    const steamPersonaNameUrl = process.env.STEAM_PERSONA_NAME_URL

    return {
        props: {
            initialSteamPersonaName: await fetchSteamPersonaName(steamPersonaNameUrl),
            steamPersonaNameUrl,
        },
    }
}
