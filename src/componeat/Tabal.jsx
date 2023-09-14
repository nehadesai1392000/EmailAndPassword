import React from 'react'

const Tabal = () => {

    const data = JSON.parse(localStorage.getItem("mystoreg"))

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        UserName
                    </th>
                    <th>
                        Password
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((e) => {
                        return(
                            <tr>
                                <td>{e.username}</td>
                                <td>{e.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Tabal