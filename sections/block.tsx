import { PropsWithChildren } from 'react'


export const Column = ({ children, width }: PropsWithChildren<{ width?: string }>) => (
    <>
        <div className="column">{children}</div>
        <style jsx>{`
            .column {
                flex-basis: ${width || '50%'};
            }

            @media (max-width: 40rem) {
                .column {
                    flex-basis: 100%;
                }
            }
        `}</style>
    </>
)

export const Block = ({ children }: PropsWithChildren<{ breakpoint?: string }>) => (
    <>
        <section className="block">{children}</section>
        <style jsx>{`
            .block {
                background: #FFFFFFBF;
                box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.4);
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
                display: flex;
                flex: 1;
            }

            .block {
                margin-top: 1em;
            }
        `}</style>
    </>
)