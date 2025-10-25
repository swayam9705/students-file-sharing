import FileBox from "../FileBox/FileBox"

import "./FileContainer.css"


const FileContainer = () => {

    const files = [
        {
            title: "Module 1: OSI Model",
            lastUpdated: "20-10-2025"
        },
        {
            title: "Module 2: Subnetting",
            lastUpdated: "21-10-2025"
        }
    ]

    return (
        <div className="FileContainer">
            {
                files.map(f => <FileBox
                    title={f.title}
                    lastUpdated={f.lastUpdated}
                />)
            }
        </div>
    )
}

export default FileContainer