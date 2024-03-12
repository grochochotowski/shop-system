import React from 'react'

export default function FilterBox() {
  return (
    <div className="filter-box">
        <ul className="main">
            <li className={opened.option1 ? "opened main" : "closed main"}>
                <h4 onClick={() => toggleFilter("option1")}>Option1</h4>
                <ul className="inside">
                    <li className="inside"><input type="checkbox" name="opt-1-1" id="opt-1-1" />
                        <label htmlFor="opt-1-1">opt-1-1</label>
                    </li>
                    <li className="inside"><input type="checkbox" name="opt-1-2" id="opt-1-2" />
                        <label htmlFor="opt-1-2">opt-1-2</label>
                    </li>
                    <li className="inside"><input type="checkbox" name="opt-1-3" id="opt-1-3" />
                        <label htmlFor="opt-1-3">opt-1-3</label>
                    </li>
                    <li className="inside"><input type="checkbox" name="opt-1-4" id="opt-1-4" />
                        <label htmlFor="opt-1-4">opt-1-4</label>
                    </li>
                    <li className="inside"><input type="checkbox" name="opt-1-5" id="opt-1-5" />
                        <label htmlFor="opt-1-5">opt-1-5</label>
                    </li>
                </ul>
            </li>
            <li className={opened.option2 ? "opened main" : "closed main"} onClick={() => toggleFilter("option2")}>Option2</li>
            <li className={opened.option3 ? "opened main" : "closed main"} onClick={() => toggleFilter("option3")}>Option3</li>
            <li className={opened.option4 ? "opened main" : "closed main"} onClick={() => toggleFilter("option4")}>Option4</li>
            <li className={opened.option5 ? "opened main" : "closed main"} onClick={() => toggleFilter("option5")}>Option5</li>
        </ul>
        <button className="filter-button">Filter</button>
    </div>
  )
}
