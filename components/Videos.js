import styles from "../styles/Videos.module.css"
import ReactPlayer from 'react-player'
import PlayArrow from "../components/PlayArrow"

export default function Videos ({videos}) {
    return (
        <main className={styles.wrapper}>
            <section>
                {videos && videos.map(item => {
                    return (
                        <article style={{backgroundImage: `url(https://i.ytimg.com/vi/${item}/hqdefault.jpg)`}}>
                            <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${item}&ab_channel=JuanIgnacioCali`}
                            playIcon={<PlayArrow arrowColor={"#FFF"}/>}
                            light={true}
                            height={"100%"}
                            width={"100%"}
                            controls={false}
                            style={{position: "absolute", top: "0", left: "0"}}
                            config={{
                                youtube: {
                                    playerVars: { autoplay: 1 }
                                }
                            }}
                            />
                        </article>
                    )
                })}
            </section>
            <a href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA">Visitá mi canal</a>
        </main>
    )
}