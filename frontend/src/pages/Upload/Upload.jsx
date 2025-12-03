import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import useUserContext from "../../contexts/UserContext"

import { IoCloudUploadOutline } from "react-icons/io5"

import "./Upload.css"

const Upload = () => {

    const { userContextDetails } = useUserContext()
    const navigate = useNavigate()

    const subjects = ["OS", "DWM", "Stats", "BCE", "AI"]
    const fileTypes = ["Notes", "Assignment", "Lab File", "Other"]

    // dom
    const fileUpload = useRef(null)

    useEffect(() => {
        if (userContextDetails == null) {
            navigate("/auth")
        }
    }, [userContextDetails])

    return (
        <div className="Upload">
            <div className="Upload-form">
                <h2 className="Upload-title">Upload File</h2>
                <div className="Upload-input">
                    <label htmlFor="filename">Filename</label>
                    <input
                        type="text"
                        name="filename"
                    />
                </div>
                <div className="Upload-input">
                    <label htmlFor="subjects">Subjects</label>
                    <select name="subjects">
                        {
                            subjects.map(s => <option
                                value={s}
                            >
                                {s}
                            </option>)
                        }
                    </select>
                </div>
                <div className="Upload-input">
                    <label htmlFor="filetypes">File Type</label>
                    <select name="filetypes">
                        {
                            fileTypes.map(t => <option
                                value={t}
                            >
                                {t}
                            </option>)
                        }
                    </select>
                </div>
                <div className="Upload-input">
                    <label htmlFor="fileupload">Choose File</label>
                    <input ref={fileUpload} type="file" name="fileupload" />
                    <div
                        className="Upload-fileupload"
                        onClick={() => fileUpload.current.click()}
                    >
                        <span>Click or Drag a file to select</span>
                        <span><IoCloudUploadOutline /></span>
                    </div>
                </div>
                <button
                    className="Upload-submit" 
                >Add file</button>
            </div>
        </div>
    )
}

export default Upload