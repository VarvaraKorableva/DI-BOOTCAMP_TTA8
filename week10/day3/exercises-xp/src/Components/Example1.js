import data from '../secondData.json'


function Example1() {
    const medias = data.SocialMedias
    return(
        <ul>
            {medias.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default Example1;