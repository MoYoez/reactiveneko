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
import { IoBulb,  IoGitBranch, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import BackgroundHeader from '../public/assets/images/background-header.svg'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header } from '../sections/header'


const IndexPage = (PropsWithChildren) ; (
    <div className="container">
        <Header profileName="MoeMagicMango">
            <div>
            <a href="https://himoyo.cn" title="Meow~Here~">
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
                    <LabelItem>College Student:P</LabelItem>
                </LabelGroup>
            </div>
        </Header>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>Looking for the night that never comes.</Paragraph>
                    <Paragraph>Ciallo～(∠・ω&lt; )⌒★</Paragraph>
                    <Paragraph>你好吖，这边是夹子</Paragraph>
                    <Paragraph>
                        貌似没有什么特别之处呢~唯一的爱好可能就<del className="deleted">是睡觉💤</del>
                    </Paragraph>
                    <Paragraph>~向下翻可以找到更多w</Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="My Github">
                    <Account href="https://github.com/MoYoez" icon={FaGithub} title="GitHub">
                        MoYoez
                    </Account>
                </AccountList>
                <AccountList title="Link To My Social Network❤">
                    <Account href="https://music.163.com/#/user/home?id=555696683" icon={FaMusic} title="netease">
                        MoeMagicMango
                    </Account>
                    <Account href="https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes" icon={FaQq} title="QQ">
                        MoeMagicMango.
                    </Account>
                    <Account href="https://twitter.com/lemonflavours" icon={FaTwitter} title="Twitter">
                        @LemonFlavours
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
                        大多数时候会去玩一些较为精品的独立游戏作品~
                        <br />
                        或者是和好朋友玩的独立游戏
                        <br />
                        同时也是个音游玩家 貌似是除了街机都玩? <br /> <del className="deleted">除了maimai</del>
                        <br />
                        (*/ω＼*)
                    </Paragraph>
                    <Paragraph>
                        <del className="deleted">某些情况下 咱会偷偷玩游戏w</del>
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
                background: url('https://img1.imgtp.com/2022/09/22/xsQUvvxo.png')
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