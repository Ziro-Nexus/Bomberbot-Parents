import React from 'react';

function Copy(props) {
    const { dataUser } = props;
    const { edad, estatura } = dataUser;
    return (
        <div>
            <form>
                <label>
                    Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default Copy;
