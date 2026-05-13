export default function Home() {
    return (          
            <html lang="da">
                <head>
                    <meta charset="UTF-8" />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Lær HTML, de vigtigste elementer, programmer og webteknologier" />
                    {/* <meta name="keyword" content="html, css, jQuery"></meta> - gammel kodning - bruges ikke mere*/}
                    {/* <script src="src/js/redirect.js" defer></script> */}
                    <title>Lærer HTML</title>
                </head>
                <body bgcolor="#000000" text="#5524e6" alink="green" onLoad={""} class="classeHome" id="idHome">
                    
                    <h1>Velkommen til min HTML-side!</h1>
<hr /> 
                    <p>Dette er en <em>simpel HTML-side</em> <br></br>indlejret i en <strong>React-komponent</strong>.</p>
                    <p>Her er et link til DR: <a href="https://www.dr.dk" target="_blank">Danmarks Radio</a></p>
                              
                    <ul>
                        <h2>Programmer</h2>

                        <li>Visual Studio Code</li>
                        <li>Sublime eller Sublime Text</li>
                        <li>Notepad++</li>
                        <li>Adobe Dreamweaver</li>
                        <li>NetBeans</li>
                        <li>Bluefish</li>
                        <li>Google Web Designer</li>
                        <li>Atom</li>
                        <li>Adobe Photoshop</li>
                        <li>GIMP</li>
                    </ul>
                    
                    <ul>
                        <h2>Webteknologier</h2>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>API</li>
                    </ul>

                    <ul>
                        <h2>Andre begreber</h2>
                        <li>HTTP redirect</li>
                        
                    </ul>

                    <ul>
                        <h2>Hvordan laver man SVG filer?</h2>
                        <li>SVG favicon: Design i Figma / Illustrator</li>
                        <li>PNG filer: Ekspoter fra samme design i: 16x16 eller 32x32. Brug evt. tools som RealFaviconGenerator eller Figma export</li>
                        <li>ICO fil (valgfrit): Generér fra samme tool (de fleste laver multiple sizes automatisk)</li>
                        <li>Tommelfingerregel: SVG = fremtid / moderne. PNG = sikker fallback. ICO = "kan redde gamle browsere"</li>
                    </ul>

                    

{/* <ul>
                        <h2>HTML-elementer</h2>

                        <li>&lt;!DOCTYPE html&gt;: All HTML documents begin with DOCTYPE declaration</li>
                        <li>HTML-tag foreksempel følgende to tags: start tag &lt;p&gt; og slut tag &lt;/p&gt;. 
                            Et andet eksempel: &lt;img src="image.jpg"&gt; har ingen slut tag.</li>
                        <li>HTML-element: Er hele pakken: &lt;p&gt;indhold&lt;/p&gt; Det hele samlet = ét HTML element
                            Et andet eksempel: &lt;img src="image.jpg"&gt; har ingen slut tag, men stadig et element.</li>
                        <li>HTML-attribute: foreksempel class, id, style</li>
                        <li>HTML: gammel notation</li>
                        <li>XHTML: bruges næsten aldrig</li>
                        <li>&lt;!-- --&gt;: kommentar  </li>
                        <li>&lt;html lang="da"&gt;: angiver sprog</li>
                        <li>&lt;html&gt;: angiver dokumentets rootelement</li>
                        <li>&lt;head&gt;: metadata, scripts, styles</li>
                        <li>&lt;title&gt;: sidetitel</li>
                        <li>&lt;body&gt;: synligt indhold</li>
                        <li>h1-h6: overskrifter</li>
                        <li>p: paragraf</li>
                        <li>br: linjeskift</li>
                        <li>hr: vandret linje</li>
                        <li>em: fremhævelse</li>
                        <li>strong: stærk fremhævelse</li>
                        <li>ul: uordnet liste</li>
                        <li>ol: ordnet liste</li>
                        <li>li: listeelement</li>
                        <li>favicon: webstedsikon 16x16 eller 32x32 ikon.ico</li>
                        <li>&lt;br&gt;: linjeskift</li>
                        <li>&lt;meta&gt;: data om data</li>
                    </ul>
                    */}
                </body>

            </html>
    )
}
