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
    FaWindows,
    FaGit,
    FaChevronRight,
    FaList,
    FaBlog, FaGamepad, FaPen, FaMastodon
} from 'react-icons/fa'
import { GrArchlinux, GrDebian } from 'react-icons/gr'
import { PiBugDroidBold } from "react-icons/pi";
import React from 'react'
import { IoBulb, IoLanguage, IoSchool } from 'react-icons/io5'
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header } from '../sections/header'

const MainContainer = () => {
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
                        <LabelItem>"Cat"</LabelItem>
                    </LabelGroup>
                </div>
                <div>
                    <LabelGroup icon={GrArchlinux} title="DevOps">
                        <LabelItem>Arch Linux</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={FaWindows} title=''>
                        <LabelItem>Windows</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={FaGit} title=''>
                        <LabelItem>Git</LabelItem>
                    </LabelGroup>
                </div>
                <div>
                    <LabelGroup icon={GrDebian} title='Current'>
                        <LabelItem>A Debianer🍥?</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={PiBugDroidBold} title=''>
                        <LabelItem>CTFer</LabelItem>
                    </LabelGroup>
                </div>
            </Header>
            <Block>
                <Column width={"100%"}>
                    <div className={"header-text-render"}>心之所向，素履以往。</div>
                    <div className={"header-text-render-addby"}>---《尘曲》</div>
                </Column>
                <Column>
                    <Description>
                        <h1><FaChevronRight /> awa? </h1>
                        <Paragraph>设定上是猫娘&魔法师, 不过按照技术栈定义也可以为半个全栈工程师 ()</Paragraph>
                        <h1> <FaList />  <FaPen /> </h1>
                        <Paragraph>貌似没有什么特别~唯一的爱好可能是<del className="deleted">睡觉💤</del>或者<del className="deleted">划水</del></Paragraph>
                        <Paragraph>大多数时间已经从玩游戏转到做好玩的东西(? 例如是做一些小玩具</Paragraph>
                        <Paragraph>写一些博客内容或者是学习一下新的代码貌似也算不错呢x，或许可以考虑多做点试试(?</Paragraph>
                        <Paragraph>如果实在没有事情做的话，貌似也可以体验一下运维的快乐，例如维护一些开源项目的发展~</Paragraph>
                        <Paragraph>"Keep it Simple,Stupid."</Paragraph>
                        <h1> <FaList /> Plan </h1>
                        <Paragraph>大概学完一部分有兴趣的编程语言，例如 Rust 和 C# </Paragraph>
                        <Paragraph>目前正参与学校的 CTF 训练，不知道有什么成就呢x </Paragraph>
                        <Paragraph>计划成为一名合格的全栈工程师，能力能被认可。</Paragraph>
                        <Paragraph></Paragraph>
                    </Description>
                </Column>
                <Column>
                    <AccountList title="Link To My Social Network❤">
                        <Account href="https://github.com/MoYoez" icon={FaGithub} title="GitHub">
                            MoeMagicMango
                        </Account>
                        <Account href="https://moe.himoyo.cn" icon={FaBlog} title="Blog">
                            https://moe.himoyo.cn
                        </Account>
                        <Account href="https://music.163.com/#/user/home?id=555696683" icon={FaMusic} title="netease">
                            MoeMagicMango
                        </Account>
                        <Account href="https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes" icon={FaQq} title="QQ">
                            🍀MoeMagicMango🍥💫
                        </Account>
                        <Account href="https://twitter.com/lemonflavours" icon={FaTwitter} title="Twitter">
                            @LemonFlavours
                        </Account>
                        <Account href='https://msu.a233.shop/web/@moyoez' icon={FaMastodon} title="Mastodon">
                            MoeMagicMango@hello.2heng.xin
                        </Account>
                        <Account href="mailto:i@himoyo.cn" icon={FaEnvelope} title="mail">
                            i@himoyo.cn
                        </Account>
                    </AccountList>
                    <AccountList title="Toys">
                        <Account href="https://github.com/MoYoez/Lucy_ZeroBot" icon={FaGithub} title="Lucy_Zerobot">
                            HiMoYoBot Lucy
                        </Account>
                        <Account href="https://github.com/MoYoez/Text-WaterMark" icon={FaGithub} title="Text_WaterMark">
                            在文字上实现添加水印
                        </Account>
                        <Account href="https://github.com/MoYoez/music-radio" icon={FaGithub} title="music-box">
                            基于 WebAudio 的简易播放器
                        </Account>
                        <Account href="https://github.com/FloatTech/ZeroBot-Plugin" icon={FaGithub} title="Zerobot-Plugin">
                            基于ZeroBot的插件
                        </Account>
                    </AccountList>
                </Column>
                <Column width={"100%"}>
                    <div className={"least-intro"}> ^^ Always try to be pleasant and not be harsh all the time, perhaps I wanted to meet more people and learn more. (/≧▽≦)/
                    </div>
                </Column>
            </Block>

            <Block>
                <Column>
                    <Description>
                        <h1><span className="icon">
                            <FaChevronRight /> <FaGamepad></FaGamepad> </span></h1>
                        <Paragraph>
                            大部分是音游哦w 主修 Arcaea + Project Sekai 类移动端音游</Paragraph>
                        <Paragraph>有可能会在假期看到咱出勤，同时咱也是个maimai + chuni玩家</Paragraph>
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
                <script src="https://cdn.himoyo.cn/handsome/js/title_change.js"></script>
                <FooterParagraph color={"#c39595"} icon={IoBulb}>Copyright © 2021-2023 HiMoYo. | <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                    Fork this template on GitHub
                </a>
                    <span className="footer-external-link-icon">
                        <FaExternalLinkAlt />
                    </span></FooterParagraph>
            </Footer>

            <style jsx>{`
            .container {
                position: relative;
                left: 5em;
                min-width: 30em;
                max-width: 64em;
                background: rgba(243,205,205,.70);
                background-size: cover;
                box-shadow: 0 0 .15em .15em rgba(0,0,0,.125);
                padding-top: 1em;
                margin: 0 auto;
                .header-text-render {
                  margin-bottom: 2em;
                  position: relative;
                  font-size: 1.5em;
                  text-align: center;
                  top: 2em;
                }
              .header-text-render-addby {
                  margin-bottom: 1em;
                  position: relative;
                  font-size: 1.5em;
                  float: right;
                  right: 30%;
                  top: 1em;
                  }
                  .least-intro {
                  margin: 1em;
                  font-weight: lighter;
                  }
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
          h1 {
            font-size: 1.5em;
            font-weight: bold;
          }
          body {
            background: url('https://cdn.himoyo.cn/img_service/IMG_0645(20230601-111656).PNG') no-repeat;
            background-size: cover;
            margin: 0 auto;
            min-height: 100vh;
            padding: 1em 0;
            font-family: "Noto Sans","Noto Sans SC","Microsoft YaHei",serif;
          }
        `}</style>
        </div>
    )
}

export default MainContainer
