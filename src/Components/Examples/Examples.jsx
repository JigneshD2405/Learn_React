import TabButton from "../TabButton/TabButton"
import { EXAMPLES } from "../../data"
import { useState } from "react"
import Tab from "../Tabs/Tab"

export default function () {
    const [content, setContent] = useState("")
    function handleSelect(selectedButton) {
        setContent(selectedButton)
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tab
                button={
                    <>
                        <TabButton onClick={() => handleSelect("components")} isSelected={content === "components"}>Component</TabButton>
                        <TabButton label="JSX" onClick={() => handleSelect("jsx")} isSelected={content === "jsx"}></TabButton>
                        <TabButton onClick={() => handleSelect("props")} isSelected={content === "props"}>Props</TabButton>
                        <TabButton label="State" onClick={() => handleSelect("state")} isSelected={content === "state"}></TabButton>
                    </>
                }>
                {!content && <p>Please select a topic.</p>}
                {content &&
                    <div id="tab-content">
                        <h3>{EXAMPLES[content].title}</h3>
                        <p>{EXAMPLES[content].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[content].code}
                            </code>
                        </pre>
                    </div>
                }
            </Tab>

        </section>
    )
}



