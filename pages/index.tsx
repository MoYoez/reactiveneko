import {
    FaCompactDisc,
    FaExternalLinkAlt,
    FaGithub,
    FaMusic,
    FaSteam,
    FaQq,
    FaTwitter,
    FaCat,
    FaWindows,
    FaGit,
    FaChevronRight,
    FaList,
    FaBlog, FaGamepad, FaPen, FaMastodon
} from 'react-icons/fa'
import { GrUbuntu } from 'react-icons/gr'
import { IoBulb, IoLanguage, IoSchool } from 'react-icons/io5'
import { RxMagicWand } from "react-icons/rx";
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header } from '../sections/header'
import React from 'react'

const MainContainer = () => {
    return (
        <div className="container">
            <Header profileName="MoeMagicMango🍀">
                <div>
                    <LabelGroup icon={IoLanguage} title="Languages">
                        <LabelItem>汉语</LabelItem>
                        <LabelItem>漢語</LabelItem>
                        <LabelItem>English</LabelItem>
                        <LabelItem>Japanese</LabelItem>
                    </LabelGroup>
                </div>
                <div>
                    <LabelGroup icon={IoSchool} title="Education">
                        <LabelItem>Undergraduate</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={FaCat} title="Status">
                        <LabelItem>"Cat"</LabelItem>
                        <LabelItem icon={RxMagicWand}>Magician</LabelItem>
                    </LabelGroup>
                </div>
                <div>
                    <LabelGroup icon={GrUbuntu} title="DevOps">
                        <LabelItem>Ubuntu</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={FaWindows} title=''>
                        <LabelItem>Windows</LabelItem>
                    </LabelGroup>
                    <LabelGroup icon={FaGit} title=''>
                        <LabelItem>Git</LabelItem>
                    </LabelGroup>
                </div>
            </Header>
            <Block>
                <Column width={"100%"}>
                    <div className={"header-text-render"}>心之所向，素履以往。</div>
                </Column>
                <Column>
                    <Description>
                        <h1><FaChevronRight /> awa? </h1>
                        <Paragraph>qwq? Always Magic Power~ 🌟  ૮ • ﻌ - ა </Paragraph>
                        <h1> <FaList />  <FaPen /> </h1>
                        <Paragraph>貌似没有什么特别~唯一的爱好可能是<del className="deleted">睡觉💤</del>或者<del className="deleted"></del></Paragraph>
                        <Paragraph>大多数时间已经从玩游戏转到做好玩的东西(? 例如是做一些小玩具 已经变成了长期不理人的形态了.png </Paragraph>
                        <Paragraph>写一些博客内容或者是学习一下新的代码貌似也算不错呢x，或许可以考虑多做点试试(?</Paragraph>
                        <h1> <FaList /> Plan </h1>
                        <Paragraph>Draw | Cat Caught Something ? </Paragraph>
                        <Paragraph> ⊂₍ •ᴥ• ₎っ </Paragraph>
                    </Description>
                </Column>
                <Column>
                    <AccountList title="Link To My Social Network❤">
                        <Account href="https://github.com/MoYoez" icon={FaGithub} title="GitHub">
                            MoeMagicMango
                        </Account>
                        <Account href="https://lemonkoi.one" icon={FaBlog} title="Blog">
                            https://lemonkoi.one
                        </Account>
                        <Account href="https://music.163.com/#/user/home?id=555696683" icon={FaMusic} title="netease">
                            MoeMagicMango
                        </Account>
                        <Account href="https://wpa.qq.com/msgrd?v=3&uin=1292581422&site=qq&menu=yes" icon={FaQq} title="QQ">
                            🍀MoeMagicMango💫
                        </Account>
                        <Account href="https://twitter.com/akirasweetz" icon={FaTwitter} title="Twitter">
                            @Pochiuww
                        </Account>
                        <Account href='https://msu.a233.shop/web/@moyoez' icon={FaMastodon} title="Mastodon">
                            MoeMagicMango@hello.2heng.xin
                        </Account>
                    </AccountList>
                    <AccountList title="Toys">
                        <Account href="https://github.com/MoYoez/Lucy_ZeroBot" icon={FaGithub} title="Lucy_Zerobot">
                            Lucy For Onebot
                        </Account>
                        <Account href="https://github.com/MoYoez/lucy_reibot" icon={FaGithub} title="Lucy_Reibot">
                            Lucy For Telegram (2Paradise)
                        </Account>
                        <Account href="https://github.com/MoYoez/PhigrosLibrary-FlaskAPI" icon={FaGithub} title="PhigrosLibrary-FlaskAPI">
                           Phigros 存档逆向接口
                        </Account>
                        <Account href="https://github.com/FloatTech/ZeroBot-Plugin" icon={FaGithub} title="Zerobot-Plugin">
                            Zerobot 系Bot插件组
                        </Account>
                    </AccountList>
                </Column>
                <Column width={"100%"}>
                    <div className={"least-intro"}> " 心が向かうところへ、たとえ素足でも進んで行く | Always try to seek for Stellar and Dream 💫"
                    </div>
                </Column>
            </Block>

            <Block>
                <Column>
                    <Description>
                        <h1><span className="icon">
                            <FaChevronRight /> <FaGamepad></FaGamepad> </span></h1>
                        <Paragraph>
                            沉迷于炉石传说和一部分音游 (Arcaea + Rotaeno) w</Paragraph>
                        <Paragraph>有可能会在假期看到咱出勤，大概会在某些地方看到傻傻的咱在打Maimai和中二w </Paragraph>
                        <Paragraph>抓到咱请手下留情呜呜~ </Paragraph>
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
                <FooterParagraph color={"#c39595"} icon={IoBulb}>Copyright © 2021-2024 HiMoYo. | <a className="footer-link" href="https://github.com/amphineko/atomicneko">
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
            background: url('https://cdn.himoyo.cn/img_service/2628866d3dbdb972febb35681e709083888e128b_s2_n2_y1.png') no-repeat;
            background-size: cover;
            margin: 0 auto;
            min-height: 100vh;
            padding: 1em 0;
            font-family: "Ubuntu","Noto Sans SC","Noto Sans CJK SC",serif;
          }
        `}</style>
        </div>
    )
}

export default MainContainer
