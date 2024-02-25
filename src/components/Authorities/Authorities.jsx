import Card from "../Card/Card"
import data from "../../assets/data/data.jsx"

export default function Authorities() {
    return (
        <>
            { data.map((d) =>
            <Card
            image={d["img_src"]}
            quantity={d["quantity"]}
            quality={d["quality"]}
            address={d["address"]}
            time = {d["time"]}

            />
            )
            }
        </>
    )
}
