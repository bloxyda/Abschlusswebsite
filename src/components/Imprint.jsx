import React from 'react'
import content from '../../content'

function Imprint() {
    return (
        <section className="flex justify-center mb-5">
            <div className='max-w-[80vw] md:max-w-[60vw]'>
                <h2 className='text-3xl mb-2'>Impressum</h2>
                {
                    content.imprint.firmawortlaut.map(item => {
                        return (
                            <p>{item}</p>
                        )
                    })
                }
                <p>
                    {content.imprint.unternehmensgegenstand}
                </p>
                <p>
                    UID Nummer: {content.imprint.UIDNr}
                </p>
                <p>
                    Firmenbuchnummer: {content.imprint.firmenbuchnummer}
                </p>
                <p>
                    Firmenbuchgericht: {content.imprint.firmenbuchgericht}
                </p>
                <p>
                    Firmensitz: {content.imprint.firmensitz}
                </p>
                <p>
                    {content.imprint.volleGeographischeAnschrift}
                </p>
                <p>
                    Kontaktdaten: 
                </p>
                <dl>
                    {
                        content.imprint.kontaktdaten.map(item => {
                            return (
                                <dt>{item}</dt>
                            )
                        })
                    }
                </dl>
                <p>
                    {content.imprint.mitgliedschaftenBeiDerWKO}
                </p>
                <p>
                    Anwendbare Rechtsvorschrifen:
                    <br />
                    Berufsrecht:
                    <a className='link' href={content.imprint.anwendbareRechtsvorschriften.berufsrecht.gewerbeordnung}>Gewerbeordnung</a>
                </p>
                <p>
                    Aufsichtsbehörde: {content.imprint.aufsichtsbehörde}
                </p>
                <p>
                    Berufsbezechnung: {content.imprint.berufsbezeichnung}
                </p>
                <p>
                    Verleihungsstaat: {content.imprint.verleihungsstaat}
                </p>
                <p>
                    Online Streitbeteiligung: 
                    {
                        content.imprint.onlineStreitbeteiligung.text.map(item => {
                            return item === false ? <a className='link' href={content.imprint.onlineStreitbeteiligung.link}>{content.imprint.onlineStreitbeteiligung.link}</a> :
                            item
                        })
                    }
                </p>
            </div>
        </section>
    )
}

export default Imprint