import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label>
                <div className="form-switch">
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={() => setEditMode(!editMode)}
                        style={{ display: "none" }} {/* Add style to hide the checkbox */}
                    />
                    <span className="slider round"></span>
                </div>
            </label>
            {editMode ? (
                <div>
                    {/* No textboxes in this mode */}
                </div>
            ) : (
                <div>
                    <p>
                        {userName} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}