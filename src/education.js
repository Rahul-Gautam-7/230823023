import calender from './image/calender.jpg';
import location from './image/location.jpg'
function Education(props)
{
    return(
        <>
             
             <h5>{props.head}</h5>
        <h6 style={{"color":"blue"}}>{props.con}</h6>
        <img style={{"height":"25px", "widht":"15px","marginTop":"2px"}}  src={calender} />2018-2024
        <img style={{"height":"25px","marginLeft":"80px"}}  src={location} />rajkot India
        <ul>
            <li>randome content 1</li>
        </ul>
        
        </>
    );
}
export default Education;