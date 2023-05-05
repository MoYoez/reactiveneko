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
    FaUbuntu,
    FaWindows,
    FaGit,
    FaChevronRight,
    FaList,
    FaBlog,
    FaThList,
} from 'react-icons/fa'
import React from 'react'
import { IoBulb, IoLanguage, IoSchool } from 'react-icons/io5'
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
                    <LabelItem>"Unknown Data"</LabelItem>
                </LabelGroup>
            </div>
            <div>
            <LabelGroup icon={FaUbuntu} title="DevOps">
                    <LabelItem>Ubuntu</LabelItem>
                </LabelGroup>
                <LabelGroup icon={FaWindows} title=''>
                    <LabelItem>Windows</LabelItem>
                </LabelGroup>
                <LabelGroup icon={FaGit} title=''>
                    <LabelItem>Git</LabelItem>
                </LabelGroup>
            </div>
            <div>
                <LabelGroup icon={FaThList} title="Fingerprint">
                    <LabelItem>A0DB 23CE E377 AF83 06E6  21D9 8636 C00F 8EAD 0ECD</LabelItem>
                </div>
        </Header>
        <Block>
        <Column>
                <Description>
                <h1><FaChevronRight/> Current </h1>
                <Paragraph>目前是一名在校学生，对前端应用和后端语言略微精通，大概就是什么都会一点点的水平x</Paragraph>
                    <h1> <FaList/> 关于个人爱好 </h1> 
                    <Paragraph>貌似没有什么特别~唯一的爱好可能是<del className="deleted">睡觉💤</del></Paragraph>
                        <Paragraph>大多数时间是玩一些相对不错的独立游戏和做一些个人感觉会很不错的事。</Paragraph>
                    <Paragraph>例如去写一些博客内容或者是学习一下新的代码或者UI设计一类的事。</Paragraph>
                    <h1> <FaList/> Plan </h1> 
                    <Paragraph>大概学完一部分有兴趣的编程语言，例如 Go Python 和 C 一类</Paragraph>
                    <Paragraph>计划成为一名合格的全栈工程师，能力能被认可。</Paragraph>
                    <Paragraph></Paragraph>
                </Description>
                </Column>

            <Column>
            <AccountList title="Link To My Social Network❤">
                    <Account href="https://github.com/MoYoez" icon={FaGithub} title="GitHub">
                        KoiParadise
                    </Account>
                    <Account href="https://moe.himoyo.cn" icon={FaBlog} title="boki~">
                    https://moe.himoyo.cn
                    </Account>
                    <Account href="https://music.163.com/#/user/home?id=555696683" icon={FaMusic} title="netease">
                        MapleNeko_
                    </Account>
                    <Account href="https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes" icon={FaQq} title="QQ">
                        MoeMagicMango.⭐
                    </Account>
                    <Account href="https://twitter.com/lemonflavours" icon={FaTwitter} title="Twitter">
                        @LemonFlavours
                    </Account>
                    <Account href="mailto:i@himoyo.cn" icon={FaEnvelope} title="mail">
                        I#HiMoYo.cn
                    </Account>
                </AccountList>
                <AccountList title="写过的小玩意w">
                <Account href="https://github.com/MoYoez/Lucy_ZeroBot" icon={FaGithub} title="Lucy_Zerobot">
                Zerobot三方分支Lucy
                    </Account>
                    <Account href="https://github.com/MoYoez/Lucy_SideBook" icon={FaGithub} title="Lucy_SideBook">
                        Lucy说明书
                    </Account>
                    <Account href="https://github.com/MoYoez/music-radio" icon={FaGithub} title="music-box">
                        基于 WebAudio API 三方音乐播放器
                    </Account>
                    <Account href="https://github.com/FloatTech/ZeroBot-Plugin" icon={FaGithub} title="Zerobot-Plugin">
                    基于 ZeroBot 的 OneBot 插件
                    </Account>

                </AccountList>
            </Column>
        </Block>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <h1><FaChevronRight/> Game! </h1>
                    <Paragraph>
                    大部分是音游哦w 主修 Arc+pjsk 类移动端音游</Paragraph>
                    <Paragraph>有可能会在假期看到咱出勤，同时咱也是个MaiMai + 中二玩家</Paragraph>
                    <Paragraph>欢迎一起拼机！或者来加咱的Steam也是可的，或许咱可能会跟你一起玩一些联机游戏(*/ω＼*)</Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="Game Profiles">
                    <Account href="https://osu.ppy.sh/users/14730537" icon={FaCompactDisc} title="osu!">
                    KoiParadise
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
                background: rgba(243,205,205,.60);
                background-size: cover;
                box-shadow: 0 0 .15em .15em rgba(0,0,0,.125);
                padding-top: 1em;
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
