import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header/Header.jsx"
import CoreConcept from "./Components/CoreConcept.jsx"
import TabButton from "./Components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("")
  function handleSelect(selectedButton) {
    setContent(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Component</TabButton>
            <TabButton label="JSX" onSelect={() => handleSelect("jsx")}></TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton label="State" onSelect={() => handleSelect("state")}></TabButton>
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;