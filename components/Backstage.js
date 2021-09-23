import { useState } from "react"
import titleStyle from "../styles/Description.module.css"
import { InView } from 'react-intersection-observer';
import Description from "./Description";
import AboutVideo from "./AboutVideo"
import Screenshots from "./Screenshots";

export default function Backstage ({backstage, backstageVid, backstagePics}) {
  
    const [color, setColor] = useState("#000")

    return (
        <>
        <section className={titleStyle.description} id={titleStyle.hola}>
        <article>
            {backstage || backstageVid || backstagePics ? <h2 className={titleStyle.title}>El backstage</h2> : null}
        </article>

        </section>
        
        {backstage != null && 
        <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
            <Description text={backstage}/>
        </InView>
        }
        {backstageVid != null  && 
          <AboutVideo videoID={backstageVid}/>
        }
        {backstagePics != null  && 
          <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
            <Screenshots pictures={backstagePics} last={true}/>
          </InView>
        }
        </>
    )
}