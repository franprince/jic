import ReactPlayer from 'react-player'
import PlayArrow from "../components/PlayArrow"
import styles from "../styles/AboutVideo.module.css"

export default function AboutVideo ({videoID}) {

    console.log(videoID)
    return (
        <section className={styles.film}>
        <h2>Un film acerca de mí</h2>
        <article style={{backgroundImage: `url(https://i.ytimg.com/vi/${videoID}/hqdefault.jpg)`}}>
                <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoID}&ab_channel=JuanIgnacioCali`}
                playIcon={<PlayArrow arrowColor={"#FFF"}/>}
                light={true}
                height={"100%"}
                width={"100%"}
                controls={true}
                muted={true}
                style={{position: "absolute", top: "0", left: "0"}}
                config={{
                    youtube: {
                    playerVars: { autoplay: 1 }
                    }
                    }}
                    />
        </article>
    </section>
    )
}