import Image from "next/image"
import banner from "../bannerTest.json"

export default function Separator () {

    return (
            <article style={{height: "80vh", position: "relative"}}>
            <Image
                src={banner[0].url}
                alt="Imagen de separador"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                />
            </article>
    )
}