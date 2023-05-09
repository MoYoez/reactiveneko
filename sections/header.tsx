import { PropsWithChildren, ReactNode } from 'react'
const HeadPictureOriginal = 'https://sdn.geekzu.org/avatar/22b242a28bb848f2629f2a636bba9c03?s=600'
export const ProfileName = ({ children }: PropsWithChildren) => (
    <div className="profile-name">
        {children}
        <style jsx>{`
            .profile-name {
                color: #f5f5f5;
                display: inline-block;
                font-weight: 600;
                font-size: 40px;
                line-height: 1.65em;
                margin: .25em .5em .25em 0;
                text-shadow: 2px 2px 4px rgba(0,0,0,.25)
            }
        `}</style>
    </div>
)

export const Header = ({ children, profileName }: PropsWithChildren<{ profileName: ReactNode }>) => (
    <header className="row">
        <div className="column left-side">
            <a className="head-picture-container" href={HeadPictureOriginal}>
                    <img alt="user pic" className="head-picture" src={HeadPictureOriginal} />
            </a>
        </div>

        <div className="column right-side">
            <ProfileName>{profileName}</ProfileName>
            <div>{children}</div>
        </div>

        <style jsx>{`
          .row {
            align-items: center;
            background: rgba(243, 205, 205, 0.7);
            border-top-left-radius: 1rem;
            box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
            display: flex;
            flex: 1;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .column {
            box-sizing: border-box;
            padding: 2rem;
          }

          .left-side {
            flex-basis: 45%;
          }

          .right-side {
            flex-basis: 55%;
          }

          @media (max-width: 40rem) {
            .left-side,
            .right-side {
              flex-basis: 100%;
            }
          }

          .head-picture {
            height: 100%;
            width: 100%;
          }

          .head-picture-container {
            background: #fff;
            border: 0.5em solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 0.15em 0.15em rgb(0 0 0 / 15%);
            display: block;
            overflow: hidden;
          }
        `}</style>
    </header>
)
