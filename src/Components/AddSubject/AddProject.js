import React from 'react'

function AddProject() {
    return (
        <>
            <section className="addPage projectItem">
                <div className="details">
                    <h1>Project Item</h1>
                    <h2>Insert the project that you've created</h2>
                    <p>&nbsp;</p>
                </div>
                <form>
                    <div className="hero">
                        <h2 style={{color: 'black'}}>Project Item</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill name"
                            name="skill_name"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill path"
                            name="skill_path"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill opinion"
                            name="skill_opinion"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Skill rating"
                            name="skill_rating"
                            defaultValue=""
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button id="submitSkill" type="submit" variant="outlined" color="secondary">
                            Submit
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddProject
