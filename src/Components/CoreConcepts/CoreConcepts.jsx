import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "../CoreConcept"
import Section from "../Section/Section"

// export default function CoreConcepts() {
//     return (
//         <section id="core-concepts">
//             <h2>Core Concepts</h2>
//             <ul>
//                 {CORE_CONCEPTS.map((element) => (
//                     <CoreConcept key={element.title} {...element} />

//                 ))}
//                 {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
//                     <CoreConcept {...CORE_CONCEPTS[1]} />
//                     <CoreConcept {...CORE_CONCEPTS[2]} />
//                     <CoreConcept {...CORE_CONCEPTS[3]} /> */}
//             </ul>
//         </section>
//     )
// }


export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((element) => (
                    <CoreConcept key={element.title} {...element} />

                ))}
                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </Section>
    )
}