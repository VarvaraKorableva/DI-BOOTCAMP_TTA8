import data from '../secondData.json'

function Example3() {

    const experiences = data.Experiences

    return(
        <ul className='container_esx3'>
        {experiences.map((item) => (
            <li>
                <div className='img__pic__exs'>NO IMAGE AVAILABLE</div>
                {item.companyName}
                {item.roles.map((role)=>(
                    <>
                    <p>{role.title}</p>
                    <p>{role.location}</p>
                    <p>{role.description}</p>
                    </>
                ))}

            </li>
        ))}
        </ul>
    )
}

export default Example3;