import img from './ok.png'

export const OkStatus = ({message}) => {
    return (
        <>
            <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
            <div>{message}</div>
        </>
    )
}