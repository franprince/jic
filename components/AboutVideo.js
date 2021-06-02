import ReactPlayer from 'react-player'
import PlayArrow from "../components/PlayArrow"
import styles from "../styles/AboutVideo.module.css"

export default function AboutVideo ({video}) {
    return (
        <section className={styles.film}>
        <h2>Un film acerca de mí</h2>
        <div className={styles.videoWrapper}>
                <ReactPlayer
                    url={video}
                    playIcon={<PlayArrow arrowColor={"#FFF"}/>}
                    light={true}
                    height={"100%"}
                    width={"100%"}
                    quality={100}
                    controls={true}
                    style={{position: "absolute", top: "0", left: "0"}}
                    config={{
                        youtube: {
                            playerVars: { autoplay: 1 }
                                }
                            }}
                />
        </div>
    </section>
    )
}