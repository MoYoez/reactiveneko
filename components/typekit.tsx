import React, { useEffect } from 'react';
import * as Typekit from 'react-dom/test-utils';

function TypekitLoader() {
    useEffect(() => {
        (function(d) {
            var config = {
                    kitId: 'oes8iuq',
                    scriptTimeout: 3000,
                    async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true; // @ts-ignore
            tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
    }, []); // Empty dependency array means this effect runs once after mount

    return <div></div>; // Placeholder until fonts are loaded
}

export default TypekitLoader;
