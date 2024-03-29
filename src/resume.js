import phone from './image/phone.jpg';
import atTherate from './image/atTherate.webp';
import linkedin from './image/linkedin.jpg';




function Resume(props)
{
    
    return(
        <>
        <h1>
            Rahul Gautam
        </h1>
        <h5 style={{"color":"blue"}}>
            Senior Product Mananger
        </h5>
        <h  style={{"display":"flex"}}>
            <img style={{"height":"25px"}}  src={phone} /> 9870059302
            <img style={{"height":"25px","marginLeft":"400px"}}  src={atTherate} />gatuamrahul123456789@gmail.com
            <img style={{"height":"25px","marginLeft":"500px"}}  src={linkedin} />linkedin.com/in/rahulgautam

            </h>
        </>

    );
}

export default Resume;