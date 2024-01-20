import personData from '../person.json';


export const General = () => {
    return (
        <>
        <h1>{personData.name}</h1>
        <h3>{personData.email}</h3>
        <h3>{personData.phone}</h3>
        </>
    )
}