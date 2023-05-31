import React from 'react'

export default function Employees({ employeesData, pexelsClient }) {

    return (
        <div>
            <h2>Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Email Address</th>
                        <th>Department</th>
                        <th>Location</th>
                    </tr>
                </thead>

                <tbody>
                    {employeesData.map((employee, index) => {
                        function getPhoto(iconId) {
                            return pexelsClient.photos.show({ id: iconId })
                                    .then(photo => {
                                        console.log(photo.src.small)
                                    });
                        }
                        return (
                            <tr>
                                <th>{employee.name}</th>
                                <th>{getPhoto(employee.photoId)}</th>
                                <th>{employee.position}</th>
                                <th>{employee.email}</th>
                                <th>{employee.department}</th>
                                <th>{employee.location}</th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
