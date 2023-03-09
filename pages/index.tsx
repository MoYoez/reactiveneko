/* eslint-disable react/display-name */
import {
    FaCompactDisc,
    FaExternalLinkAlt,
    FaGithub,
    FaMusic,
    FaSteam,
    FaQq,
    FaTwitter,
    FaEnvelope,
    FaCat,
} from 'react-icons/fa'
import React from 'react'
import { VscEdit } from "react-icons/vsc"
import { IoBulb, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header } from '../sections/header'

export default () => {
    return (
        <div className="container">
        <Header profileName="MoeMagicMango">
            <div>
            <LabelGroup icon={IoLanguage} title="Languages">
                    <LabelItem>汉语</LabelItem>
                    <LabelItem>漢語</LabelItem>
                    <LabelItem>English</LabelItem>
                </LabelGroup>
            </div>
            <div>
                <LabelGroup icon={IoSchool} title="Education">
                    <LabelItem>Undergraduate</LabelItem>
                </LabelGroup>
                <LabelGroup icon={FaCat} title="Status">
                    <LabelItem>'unknown'</LabelItem>
                </LabelGroup>
            </div>
            <div>
            <LabelGroup icon={VscEdit} title="DevOps">
                    <LabelItem>汉语</LabelItem>
                    <LabelItem>漢語</LabelItem>
                    <LabelItem>English</LabelItem>
                </LabelGroup>
            </div>
        </Header>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>Stay Hungry, Stay Foolish.</Paragraph>
                    <Paragraph>你好吖，这边是夹子</Paragraph>
                    <Paragraph>
                        貌似没有什么特别之处呢~唯一的爱好可能<del className="deleted">是睡觉💤</del>
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
                        MapleNeko_
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
                        或者是和好朋友玩联机的游戏w~
                        <br />
                        同时也是个音游玩家 同时玩移动端和街机~例如mai和中二
                        <br />
                        (*/ω＼*)
                    </Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="Game Profiles">
                    <Account href="https://osu.ppy.sh/users/14730537" icon={FaCompactDisc} title="osu!">
                        MoYoez
                    </Account>
                    <Account href="https://steamcommunity.com/id/akirasweetz/" icon={FaSteam} title="Steam">
                    ⭐MoeMagicMango⭐
                    </Account>
                </AccountList>
            </Column>
        </Block>

        <Footer>
                <FooterParagraph icon={IoBulb}>Copyright © 2021-2023 HiMoYo Global. | <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                     Fork this template on GitHub
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span></FooterParagraph>
        </Footer>

        <style jsx>{`
            .container {
                background: rgba(243,205,205,.82);
                background-size: cover;
                box-shadow: 0 0 .15em .15em rgba(0,0,0,.125);
                padding-top: 1em;
                max-width: 65em;
                margin: 0 100px 0 auto
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
                background: url('https://cdn.himoyo.cn/img_service/waifu_personbg.jpg')
                    no-repeat;
                background-color: #aaa;
                background-size: cover;
                font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft YaHei', '微软雅黑',
                    'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                margin: 0;
                min-height: 100vh;
                padding: 1em 0;
            }
        `}</style>
    </div>
    )
}
